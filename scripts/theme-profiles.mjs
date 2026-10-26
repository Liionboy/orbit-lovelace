// Optional card-mod root CSS. Unknown HA markup fails open (native header stays visible).
export const profiles = ['Desktop', 'Mobile', 'iOS Mobile'];
export function profileVariables(name, profile) {
 if (!profiles.includes(profile)) throw Error('Unknown theme profile: ' + profile);
 if (profile === 'Desktop') return {};
 // Do not hide editing controls or native subview Back. No global/other-panel selectors.
 const wrapper = ':host > div:not(.edit-mode)';
 const header = wrapper + ' > .header:not(:has(ha-icon-button-arrow-prev))';
 const css = `@media (max-width: 767px) {
  ${header} { display: none !important; }
  ${header} + #view {
    padding-top: max(8px, var(--safe-area-inset-top, env(safe-area-inset-top, 0px))) !important;
    padding-bottom: max(12px, var(--safe-area-inset-bottom, env(safe-area-inset-bottom, 0px))) !important;
    padding-left: max(8px, var(--safe-area-inset-left, env(safe-area-inset-left, 0px))) !important;
    padding-right: max(8px, var(--safe-area-inset-right, env(safe-area-inset-right, 0px))) !important;
    box-sizing: border-box;
    min-height: 100vh;
    min-height: 100dvh;
    height: auto !important;
    ${profile === 'iOS Mobile' ? 'margin: 0 !important; width: 100% !important; transform: none !important;' : ''}
  }
}`;
 return { 'card-mod-theme': name, 'card-mod-root': css,
  ...(profile === 'iOS Mobile' ? {'ha-font-family-body': '-apple-system, BlinkMacSystemFont, Roboto, system-ui, sans-serif', 'ha-font-family-heading': '-apple-system, BlinkMacSystemFont, Roboto, system-ui, sans-serif'} : {}) };
}
