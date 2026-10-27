// Guarded suite adaptation; immutable imported Frigate source is preserved.
export function frigateLive(source,runtime){
 const patches=[
 ['    this.shadowRoot.innerHTML = ' + String.fromCharCode(96)+'\n      <style>', '    const markup = '+String.fromCharCode(96)+'\n      <style>'],
 ['      </ha-card>'+String.fromCharCode(96)+';\n  }','      </ha-card>'+String.fromCharCode(96)+';\n    this._orbitCommit(markup);\n  }'],
 ['if (!customElements.get(CARD_TAG))','orbitFrigateLive(FrigateControlCard);\nif (!customElements.get(CARD_TAG))'],
 ];
 for(const[before,after]of patches){if(source.split(before).length!==2)throw Error('Frigate live contract changed: '+before);source=source.replace(before,after);}
 return runtime+'\n'+source;
}
