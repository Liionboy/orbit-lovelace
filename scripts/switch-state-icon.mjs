// Suite-owned presentation only; original commands, inputs and listeners stay intact.
export function switchStateIcon(source) {
 const before='<ha-card data-palette="${this._config.palette}">';
 if(source.split(before).length!==2)throw Error('Switch state icon render contract changed');
 source=source.replace(before,'<ha-card data-palette="${this._config.palette}" data-orbit-switch-on="${isOn}">');
 const marker='  @media(prefers-reduced-motion:reduce)';
 if(source.split(marker).length!==2)throw Error('Switch state icon CSS contract changed');
 const targets=['.shell .identity .icon-wrap','.shell .panel .state-icon','.shell .orbit-tile .orbit-tile-icon'];
 const neutral=targets.map(s=>'ha-card '+s).join(',')+'{color:var(--secondary-text-color,#637080);background:transparent;border-color:var(--divider-color,#dfe5eb);box-shadow:none}';
 const on=targets.map(s=>'ha-card[data-orbit-switch-on="true"] '+s).join(',')+'{color:var(--accent);background:color-mix(in srgb,var(--accent) 12%,transparent);border-color:color-mix(in srgb,var(--accent) 24%,transparent)}';
 return source.replace(marker,neutral+on+'\n'+marker);
}
