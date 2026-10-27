// Suite-owned Welcome Normal compatibility adaptation; imported source stays immutable.
export function welcomeNormalToolbar(source) {
 const replacements = [
  ["(compact ? ' compact' : '')", "(compact ? ' compact' : this._orbitWelcomeNormal ? ' orbit-welcome-normal' : '')"],
  ["].join('');", "].concat('.orbit-welcome-normal .meta{flex-direction:column;align-items:flex-start;gap:5px;margin-top:10px}.orbit-welcome-normal .date{max-width:100%;font-size:16px;font-weight:600;line-height:1.45;color:var(--primary-text-color,#202b3c);overflow-wrap:anywhere}.orbit-welcome-normal .clock{font-size:24px;font-weight:750;line-height:1.25;letter-spacing:-.02em;color:var(--primary-text-color,#202b3c);font-variant-numeric:tabular-nums}').join('');"],
  ["const toolbar = compact ?", "const toolbar = compact || this._orbitWelcomeNormal ?"],
  ["'<div class=\"toolbar-center\">' + this._weather(now)", "'<div class=\"toolbar-center\">' + (compact ? this._weather(now) : '')"],
  ["(compact && !this._expanded ? ' hidden' : '')", "((compact || this._orbitWelcomeNormal) && !this._expanded ? ' hidden' : '')"],
  ["if (this._config.layout === 'compact' && this._shortcuts().length)", "if ((this._config.layout === 'compact' || this._orbitWelcomeNormal) && this._shortcuts().length)"],
  ["if (this._config.layout === 'compact' && this._config.settings_path)", "if ((this._config.layout === 'compact' || this._orbitWelcomeNormal) && this._config.settings_path)"],
 ];
 for (const [before, after] of replacements) {
  if (!source.includes(before) || source.indexOf(before) !== source.lastIndexOf(before)) throw Error('Welcome Normal toolbar contract changed: ' + before);
  source = source.replace(before, after);
 }
 return source;
}
