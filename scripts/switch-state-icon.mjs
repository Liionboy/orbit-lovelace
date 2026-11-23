// Suite-owned Switch presentation and stable telemetry updates.
export function switchStateIcon(source) {
 const previousSetter = `    this._hass = value;
    const signature = JSON.stringify([this._state(), this._sensorState(this._config.power_entity), this._sensorState(this._config.energy_entity), this._sensorState(this._config.voltage_entity)]);
    if (signature !== this._entitySignature) {
      this._entitySignature = signature;
      this._render();
    }`;
 if (source.split(previousSetter).length !== 2) throw Error('Switch telemetry render contract changed');
 source = source.replace(previousSetter, `    this._hass = value;
    const state = this._state();
    const signature = JSON.stringify([state?.state, state?.attributes?.friendly_name, state?.attributes?.icon]);
    const readings = [this._config.power_entity, this._config.energy_entity, this._config.voltage_entity]
      .filter(Boolean)
      .map(id => this._formatSensor(this._sensorState(id)));
    const nodes = this.shadowRoot.querySelectorAll(".consumption .reading-value");
    if (signature !== this._entitySignature || nodes.length !== readings.length) {
      this._entitySignature = signature;
      this._render();
      return;
    }
    const updateText = (node, text) => {
      if (!node || node.textContent === text) return;
      const existing = node.firstChild;
      if (existing?.nodeType === 3 && existing === node.lastChild) existing.data = text;
      else node.textContent = text;
    };
    nodes.forEach((node, index) => updateText(node, readings[index]));
    // Keep the existing Compact summary live without rerunning its DOM synchronizer.
    const badge = readings[0]?.trim() || "";
    updateText(this.shadowRoot.querySelector(".orbit-tile-badge"), badge);
    updateText(this.shadowRoot.querySelector(".orbit-tile-mobile-badge"), badge ? " · " + badge : "");`);
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
