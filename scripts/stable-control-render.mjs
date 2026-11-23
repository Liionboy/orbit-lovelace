// Apply to pinned cards whose own renderers replace their shadow DOM.
// Pinned legacy cards that use shadow HTML snapshots. Frigate, Vacuum and the
// native modules already have dedicated incremental renderers.
const templates = {
  'ha-alerts-orbit-card': 1, 'ha-battery-orbit-card': 1, 'ha-fan-orbit-card': 1,
  'ha-nas-orbit-card': 1, 'ha-person-orbit-card': 1, 'ha-room-orbit-card': 1,
  'ha-scenes-orbit-card': 1, 'ha-sensor-graph-orbit-card': 1, 'ha-server-orbit-card': 1,
  'ha-speedtest-orbit-card': 1, 'ha-unifi-orbit-card': 2, 'ha-weather-orbit-card': 1,
  'ha-welcome-orbit-card': 1, 'lovelace-action-button-card': 2,
  'lovelace-alecoair-dehumidifier-card': 2, 'lovelace-animated-gate-card': 1,
  'lovelace-climate-control-card': 2, 'lovelace-home-connect-washer-card': 1,
  'lovelace-hp-printer-card': 1, 'lovelace-luma-control-card': 2,
  'lovelace-pihole-control-card': 2, 'lovelace-sensor-meter-card': 2,
  'lovelace-switch-control-card': 2, 'media-player-card': 3, 'temperature-humidity-card': 2,
};
export const stableControlTypes = Object.keys(templates);

function bindControl(node, type, listener) {
  if (!node) return;
  let bound = boundControlEvents.get(node);
  if (!bound) boundControlEvents.set(node, bound = new Map());
  if (!bound.has(type)) node.addEventListener(type, event => bound.get(type).call(node, event));
  bound.set(type, listener);
}

function renderControl(root, html) {
  const template = document.createElement('template');
  template.innerHTML = html;
  const oldFrame = Array.from(root.children).find(node => node.localName !== 'style');
  const newFrame = Array.from(template.content.children).find(node => node.localName !== 'style');
  const oldStyle = root.querySelector('style:not([data-orbit-compact])');
  const newStyle = template.content.querySelector('style');
  if (!oldFrame || !newFrame || oldFrame.localName !== newFrame.localName || oldFrame.namespaceURI !== newFrame.namespaceURI) {
    if (newFrame) rememberTemplate(newFrame);
    root.replaceChildren(template.content);
    return;
  }
  if (oldStyle && newStyle && oldStyle.textContent !== newStyle.textContent) oldStyle.textContent = newStyle.textContent;
  patchControlNode(oldFrame, newFrame);
}

function rememberTemplate(node) {
  templateAttributes.set(node, node.getAttributeNames());
  for (const child of node.children) rememberTemplate(child);
}
function controlNodeKey(node) {
  if (node.nodeType !== 1) return String(node.nodeType);
  const action = ['data-action', 'data-control', 'data-step', 'data-flash', 'data-entity',
    'data-device', 'data-cc-device', 'data-action-entity', 'data-cc-action-entity',
    'data-confirm', 'data-power', 'data-cmd'].map(name => node.getAttribute(name) || '').join(':');
  // Classes describe identity for layout containers, not changing state or feedback.
  const role = /^(DIV|SECTION|FOOTER|HEADER)$/.test(node.tagName)
    ? node.classList[0] : '';
  return [node.namespaceURI, node.localName, node.id && !node.id.startsWith('orbit-compact-') ? node.id : '',
    action, role, node.localName === 'option' ? node.value : ''].join(':');
}

function patchControlNode(current, next) {
  const input = current.localName === 'input';
  const valueChanged = input && current.getAttribute('value') !== next.getAttribute('value');
  for (const name of templateAttributes.get(current) || next.getAttributeNames()) {
    if (name === 'hidden' && current.localName === 'img' && current.getAttribute('src') === next.getAttribute('src')) continue;
    if (name.startsWith('data-orbit-') || (name === 'id' && current.id.startsWith('orbit-compact-'))) continue;
    if (!next.hasAttribute(name)) current.removeAttribute(name);
  }
  for (const { name, value } of next.attributes) {
    if (current.getAttribute(name) !== value) current.setAttribute(name, value);
  }

  templateAttributes.set(current, next.getAttributeNames());
  if (current.localName === "ha-icon" && !next.hasChildNodes()) return;

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
    const retained = matches[index];
    if (retained?.nodeType === 1) patchControlNode(retained, child);
    if (retained && retained.nodeType !== 1 && retained.nodeValue !== child.nodeValue) {
      retained.nodeValue = child.nodeValue;
    }
    const node = retained || child.cloneNode(true);
    if (!retained && node.nodeType === 1) rememberTemplate(node);
    if (node !== cursor) current.insertBefore(node, cursor);
    cursor = node.nextSibling;
  });
  if (valueChanged) current.value = next.value;
  if (current.localName === 'select' && current.value !== next.value) current.value = next.value;
}

export const stableControlRuntime = 'const boundControlEvents = new WeakMap(), templateAttributes = new WeakMap();\n' +
  [bindControl, renderControl, rememberTemplate, controlNodeKey, patchControlNode].map(fn => fn.toString()).join('\n');

export function stableControlRender(source, id) {
  let writes = 0;
  source = source.replace(/this\.(shadowRoot|_root)\.innerHTML\s*=\s*([\s\S]*?);[ \t]*(?=\r?\n|$)/g, (match, root, html) => {
    if (html.startsWith('`<style>:host{display:block;padding:8px 0;')) return match; // UniFi editor
    writes++;
    return 'renderControl(this.' + root + ', ' + html + ');';
  });
  if (writes !== templates[id]) throw Error('Stable view template contract changed: ' + id + ' (' + writes + ')');
  const handlers = /(this\.(?:_root|shadowRoot)\.querySelector\(['"][^\n]*?['"]\)|\b(?:brightness|temperature|color|transition|wake|shell))\?\.addEventListener\(|\b(button|node)\.addEventListener\(/g;
  source = source.replace(handlers, (_, optional, required) => 'bindControl(' + (optional || required) + ', ');
  return source;
}
