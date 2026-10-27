// Suite-owned guarded adaptation; imported Luma source remains immutable.
export function lumaAppearance(source) {
 const patches = [
  ['const SCHEMA = [', `const LUMA_PALETTES = {aurora:'#078f72',ocean:'#1477c9',sunset:'#cf573e',lavender:'#8059c7'};
const SCHEMA = [
 {name:'icon',selector:{icon:{}}},
 {name:'palette',selector:{select:{options:[{value:'auto',label:'Auto (existing behavior)'},...Object.keys(LUMA_PALETTES).map(value=>({value,label:value[0].toUpperCase()+value.slice(1)}))],mode:'dropdown'}}},`],
  ['const LABELS = { entity:', 'const LABELS = { icon: "Icon (optional)", palette: "Orbit palette", entity:'],
  ['    this._config = { transition: 0.3, ...config };', `    if (config.icon != null && typeof config.icon !== 'string') throw new Error('Icon must be text.');
    if (config.palette != null && config.palette !== '' && config.palette !== 'auto' && !Object.hasOwn(LUMA_PALETTES, config.palette)) throw new Error('Choose auto, aurora, ocean, sunset or lavender.');
    this._config = { transition: 0.3, ...config };`],
  ['return this.attrs.icon ||', 'return this._config.icon?.trim() || this.attrs.icon ||'],
  ['const primaryColor = this.isOn ? (this.domain === "light" ? this.colorHex() : "var(--success-color,#38a987)") : "var(--primary-color)";', `const paletteColor = LUMA_PALETTES[this._config.palette];
    const primaryColor = this.isOn ? (this.domain === 'light' ? this.colorHex() : (paletteColor || 'var(--success-color,#38a987)')) : (paletteColor || 'var(--primary-color)');`],
  ["const shellStyle = `style=\"--glow:${escapeHtml(primaryColor)}\"`;", "const shellStyle = `style=\"--glow:${escapeHtml(primaryColor)}${paletteColor ? \";--accent:\" + paletteColor : \"\"}\"${paletteColor ? ' data-luma-palette=\"' + this._config.palette + '\"' : \"\"}`;"],
 ];
 for (const [before,after] of patches) {
  if (source.split(before).length !== 2) throw Error('Luma appearance contract changed: '+before);
  source=source.replace(before,after);
 }
 // Explicit palettes affect decoration; real light RGB and semantic colors stay intact.
 const marker='  @media(prefers-reduced-motion:reduce)';
 if(source.split(marker).length!==2)throw Error('Luma style contract changed');
 return source.replace(marker, '.shell[data-luma-palette]{background:radial-gradient(ellipse at 8% 0%,color-mix(in srgb,var(--accent) 11%,transparent),transparent 48%)}.shell[data-luma-palette] .icon-wrap{color:var(--accent);border-color:color-mix(in srgb,var(--accent) 22%,transparent);background:color-mix(in srgb,var(--accent) 12%,var(--card-background-color,#fff))}\n'+marker);
}
