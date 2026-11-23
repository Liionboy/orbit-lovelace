// Apply only to the three controls whose own renderers replace their shadow DOM.
export const stableControlTypes = [
  'lovelace-luma-control-card', 'lovelace-climate-control-card', 'lovelace-switch-control-card',
];

function bindControl(node, type, listener) {
  if (!node) return;
  const bound = boundControlEvents.get(node) || new Set();
  if (bound.has(type)) return;
  bound.add(type);
  boundControlEvents.set(node, bound);
  node.addEventListener(type, listener);
}

function renderControl(root, html) {
  const template = document.createElement('template');
  template.innerHTML = html;
  const oldFrame = root.querySelector('ha-card');
  const newFrame = template.content.querySelector('ha-card');
  const oldStyle = root.querySelector('style:not([data-orbit-compact])');
  const newStyle = template.content.querySelector('style');
  if (!oldFrame || !newFrame || oldStyle?.textContent !== newStyle?.textContent) {
    root.innerHTML = html;
    return;
  }
  patchControlNode(oldFrame, newFrame);
}

function controlNodeKey(node) {
  if (node.nodeType !== 1) return String(node.nodeType);
  const action = node.getAttribute('data-action') || node.getAttribute('data-control') ||
    node.getAttribute('data-step') || node.getAttribute('data-flash');
  // Classes describe identity for layout containers, not changing state or feedback.
  const role = /^(DIV|SECTION|FOOTER|HEADER)$/.test(node.tagName)
    ? node.classList[0] : '';
  return [node.localName, node.id && !node.id.startsWith('orbit-compact-') ? node.id : '',
    action, role, node.localName === 'option' ? node.value : ''].join(':');
}

function patchControlNode(current, next) {
  const input = current.localName === 'input';
  const valueChanged = input && current.getAttribute('value') !== next.getAttribute('value');
  for (const name of current.getAttributeNames()) {
    if (name.startsWith('data-orbit-') || (name === 'id' && current.id.startsWith('orbit-compact-'))) continue;
    if (!next.hasAttribute(name)) current.removeAttribute(name);
  }
  for (const { name, value } of next.attributes) {
    if (current.getAttribute(name) !== value) current.setAttribute(name, value);
  }

  const candidates = new Map();
  const ownsNode = node => !node.classList?.contains('orbit-tile');
  for (const child of current.childNodes) {
    if (!ownsNode(child)) continue;
    const key = controlNodeKey(child);
    if (!candidates.has(key)) candidates.set(key, []);
    candidates.get(key).push(child);
  }
  const desired = Array.from(next.childNodes);
  const matches = desired.map(child => candidates.get(controlNodeKey(child))?.shift());
  for (const unused of candidates.values()) for (const child of unused) child.remove();
  let cursor = Array.from(current.childNodes).find(ownsNode) || null;
  desired.forEach((child, index) => {
    let retained = matches[index];
    if (retained?.nodeType === 1) patchControlNode(retained, child);
    if (retained && retained.nodeType !== 1 && retained.nodeValue !== child.nodeValue) {
      // Observe text changes through the existing Compact child-list observer.
      const text = child.cloneNode(true);
      retained.replaceWith(text);
      if (cursor === retained) cursor = text;
      retained = text;
    }
    const node = retained || child.cloneNode(true);
    if (node !== cursor) current.insertBefore(node, cursor);
    cursor = node.nextSibling;
  });
  if (valueChanged) current.value = next.value;
  if (current.localName === 'select' && current.value !== next.value) current.value = next.value;
}

const runtime = [bindControl, renderControl, controlNodeKey, patchControlNode].map(fn => fn.toString()).join('\n');

export function stableControlRender(source, id) {
  const root = id === 'lovelace-switch-control-card' ? 'shadowRoot' : '_root';
  const render = new RegExp('this\\.' + root + '\\.innerHTML = (`[^\\n]*`);', 'g');
  const calls = Array.from(source.matchAll(render));
  // Switch uses a multiline template with nested template expressions.
  if (id === 'lovelace-switch-control-card') {
    const start = '    this.shadowRoot.innerHTML = `\n';
    const end = '\n      </ha-card>`;';
    if (source.split(start).length !== 2 || source.split(end).length !== 2) throw Error('Switch control template changed');
    source = source.replace(start, '    renderControl(this.shadowRoot, `\n').replace(end, '\n      </ha-card>`);');
  }
  const expected = id === 'lovelace-switch-control-card' ? 1 : 2;
  if (calls.length !== expected) throw Error('Stable control template contract changed: ' + id);
  source = source.replace(render, (_, html) => 'renderControl(this.' + root + ', ' + html + ');');
  // Handlers are bound once to each retained control; newly added controls still get handlers.
  const handlers = /(this\.(?:_root|shadowRoot)\.querySelector\('[^']+'\)|\b(?:brightness|temperature|color|transition))\?\.addEventListener\(|\bbutton\.addEventListener\(/g;
  let bindings = 0;
  source = source.replace(handlers, (_, node) => {
    bindings++;
    return 'bindControl(' + (node || 'button') + ', ';
  });
  if (bindings !== { 'lovelace-switch-control-card': 1, 'lovelace-luma-control-card': 11, 'lovelace-climate-control-card': 5 }[id]) {
    throw Error('Stable control binding contract changed: ' + id + ' (' + bindings + ')');
  }
  return 'const boundControlEvents = new WeakMap();\n' + runtime + '\n' + source;
}
