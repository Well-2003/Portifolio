/* Icones do site, desenhados aqui em SVG para nao depender de outro site.
   No HTML basta escrever <i data-icon="home"></i> que este arquivo troca pelo desenho.
   Nos scripts, use Icone.de('home') para receber o SVG pronto. */
const Icone = (() => {
  'use strict';

  // Cada icone e o miolo de um SVG de 24 por 24, so com os tracos
  const DESENHOS = {
    home: '<path d="M4 11.4 12 4.3l8 7.1"/><path d="M6.2 10v9.7h11.6V10"/>',
    user: '<circle cx="12" cy="8" r="3.6"/><path d="M4.8 20c0-3.7 3.2-5.6 7.2-5.6s7.2 1.9 7.2 5.6"/>',
    wip: '<path d="M14.8 3.6a5 5 0 0 0-6.4 6.4l-4.6 4.6a2.1 2.1 0 1 0 3 3l4.6-4.6a5 5 0 0 0 6.4-6.4l-2.6 2.6-2.5-.5-.5-2.5z"/>',
    folder: '<path d="M3.6 7.4h5l2 2.6h9.8v9.4a1 1 0 0 1-1 1H4.6a1 1 0 0 1-1-1z"/>',
    file: '<path d="M6.6 3.6h7l4.4 4.4v12H6.6z"/><path d="M13.6 3.6V8H18"/><path d="M9.3 12.8h5.4M9.3 16h5.4"/>',
    mail: '<rect x="3.4" y="5.6" width="17.2" height="12.8" rx="2.2"/><path d="m4.2 7.2 7.8 5.8 7.8-5.8"/>',
    github: '<path d="M9.3 19.8c-3.6 1-3.6-1.9-5.1-2.3m10.2 4.1v-3.3c0-.9.1-1.3-.4-1.8 2.3-.3 4.6-1.2 4.6-5.1a4 4 0 0 0-1.1-2.7 3.7 3.7 0 0 0-.1-2.8s-.9-.3-3 1.1a10.2 10.2 0 0 0-5.3 0C6.9 5.6 6 5.9 6 5.9a3.7 3.7 0 0 0-.1 2.8 4 4 0 0 0-1.1 2.8c0 3.8 2.3 4.7 4.6 5-.3.3-.5.8-.5 1.3v3.8"/>',
    linkedin: '<rect x="3.6" y="3.6" width="16.8" height="16.8" rx="2.4"/><path d="M8 10.6v6M8 7.4v.1M12 16.6v-3.4a2 2 0 0 1 4 0v3.4"/><path d="M12 16.6v-6"/>',
    gamepad: '<path d="M7.2 8.4h9.6a4 4 0 0 1 3.9 4.8l-.7 3.4a2.4 2.4 0 0 1-4.2 1L14 15.8h-4l-1.8 1.8a2.4 2.4 0 0 1-4.2-1l-.7-3.4a4 4 0 0 1 3.9-4.8z"/><path d="M8.4 11v2.2M7.3 12.1h2.2M15.4 11.6v.1M17 13.1v.1"/>',
    studio: '<path d="M12 3.2 20.4 18H3.6z"/><path d="M12 9.6 16.2 18H7.8z"/>',
    ext: '<path d="M13.5 5.5h5v5"/><path d="M18.5 5.5 11 13"/><path d="M17 14.4v3.8a1.6 1.6 0 0 1-1.6 1.6H5.8a1.6 1.6 0 0 1-1.6-1.6V8.6A1.6 1.6 0 0 1 5.8 7h3.8"/>',
    arrow: '<path d="M4.5 12h14"/><path d="m13 6.5 5.5 5.5-5.5 5.5"/>',
    voltar: '<path d="M14.5 5.5 8 12l6.5 6.5"/>',
    play: '<path d="M8.4 5.8 18 12l-9.6 6.2z"/>',
    copy: '<rect x="8.6" y="8.6" width="11" height="11" rx="2"/><path d="M15.6 5.4H6.4a1.8 1.8 0 0 0-1.8 1.8v9.2"/>',
    download: '<path d="M12 4.4v10.4"/><path d="m7.8 10.8 4.2 4.2 4.2-4.2"/><path d="M5 19.2h14"/>',
    send: '<path d="M20.4 3.6 3.8 10.2l6.6 2.8 2.8 6.6z"/><path d="M20.4 3.6 10.4 13"/>',
    sun: '<circle cx="12" cy="12" r="4.2"/><path d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6"/>',
    moon: '<path d="M20 14.2A8.4 8.4 0 0 1 9.8 4 8.4 8.4 0 1 0 20 14.2z"/>',
    terminal: '<rect x="3.4" y="4.6" width="17.2" height="14.8" rx="2.2"/><path d="m7.6 9.6 3 2.6-3 2.6M13 15.2h4"/>',
    dice: '<rect x="4.2" y="4.2" width="15.6" height="15.6" rx="3"/><path d="M9 9v.1M15 9v.1M9 15v.1M15 15v.1M12 12v.1"/>',
    server: '<rect x="3.6" y="4.4" width="16.8" height="6" rx="1.8"/><rect x="3.6" y="13.6" width="16.8" height="6" rx="1.8"/><path d="M7.4 7.4v.1M7.4 16.6v.1"/>',
    window: '<rect x="3.6" y="4.6" width="16.8" height="14.8" rx="2.2"/><path d="M3.6 9h16.8M7 6.8v.1M9.6 6.8v.1"/>',
    tools: '<path d="M6.4 3.8 9.6 7 7 9.6 3.8 6.4a3.6 3.6 0 0 0 2.6-2.6z"/><path d="m10.6 11.4 7.2 7.2a1.8 1.8 0 0 1-2.6 2.6l-7.2-7.2"/><path d="M15.8 4.2a4 4 0 0 1 4 4l-3.2 1-1.8-1.8z"/>',
    lock: '<rect x="5" y="10.4" width="14" height="9.6" rx="2.2"/><path d="M8.4 10.4V7.7a3.6 3.6 0 0 1 7.2 0v2.7"/>',
    menu: '<path d="M4.4 7.2h15.2M4.4 12h15.2M4.4 16.8h15.2"/>',
    nave: '<path d="M12 3.2c2.9 2.1 4.5 5.4 4.5 9l-1.9 3.2H9.4L7.5 12.2c0-3.6 1.6-6.9 4.5-9z"/><circle cx="12" cy="10" r="1.7"/><path d="M9.4 15.4 7.1 18.8l3-.9M14.6 15.4l2.3 3.4-3-.9"/>',
    cima: '<path d="M12 19.2V5.2"/><path d="m6.6 10.6 5.4-5.4 5.4 5.4"/>',
    mira: '<circle cx="12" cy="12" r="7"/><path d="M12 2.8v3.2M12 18v3.2M2.8 12H6M18 12h3.2"/>',
    close: '<path d="m6.6 6.6 10.8 10.8M17.4 6.6 6.6 17.4"/>',
    grid: '<rect x="4" y="4" width="6.6" height="6.6" rx="1.6"/><rect x="13.4" y="4" width="6.6" height="6.6" rx="1.6"/><rect x="4" y="13.4" width="6.6" height="6.6" rx="1.6"/><rect x="13.4" y="13.4" width="6.6" height="6.6" rx="1.6"/>'
  };

  /* O data.js guarda nomes de icone do pacote antigo, entao eles ficam ligados aqui */
  const DO_DATA = {
    'ri-gamepad-line': 'gamepad',
    'ri-gamepad-fill': 'gamepad',
    'ri-server-line': 'server',
    'ri-window-line': 'window',
    'ri-tools-line': 'tools',
    'ri-terminal-box-line': 'terminal',
    'ri-dice-line': 'dice',
    'ri-github-line': 'github',
    'ri-external-link-line': 'ext',
    'ri-play-line': 'play',
    'ri-play-circle-line': 'play',
    'ri-lock-line': 'lock'
  };

  /* Devolve o SVG de um icone, pronto para entrar no HTML */
  function de(nome) {
    return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (DESENHOS[nome] || DESENHOS.grid) + '</svg>';
  }

  /* Devolve o SVG a partir do nome que esta no data.js */
  function doData(nome) {
    return de(DO_DATA[nome] || 'grid');
  }

  /* Troca todo <i data-icon="..."> da pagina pelo desenho */
  function aplica() {
    document.querySelectorAll('[data-icon]').forEach(el => {
      el.outerHTML = de(el.dataset.icon);
    });
  }

  aplica();

  return {de, doData, aplica};
})();
