/* Sistema de idiomas do site. Traduz os textos da pagina, lembra o idioma escolhido
   e avisa os outros scripts pelo evento langchange para eles remontarem o que geram.
   I18n.lang informa o idioma atual, I18n.t busca um texto do translations.js
   e I18n.pick escolhe a traducao certa de um texto do data.js. */
const I18n = (() => {
  'use strict';

  const SUPPORTED = ['pt', 'en', 'es'];
  const HTML_LANG = {pt: 'pt-BR', en: 'en', es: 'es'};
  const STORAGE_KEY = 'portfolio-lang';

  // O site comeca em portugues, a nao ser que o visitante ja tenha escolhido outro idioma
  let lang = 'pt';
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED.includes(saved)) lang = saved;
  } catch (err) { /* sem acesso ao armazenamento, o site continua em portugues */ }

  /* Busca o texto de uma chave e troca marcadores como {s} pelos valores recebidos */
  function t(key, vars) {
    let text = TRANSLATIONS[lang][key] ?? TRANSLATIONS.pt[key] ?? key;
    if (vars) Object.keys(vars).forEach(k => { text = text.replace('{' + k + '}', vars[k]); });
    return text;
  }

  /* Devolve a versao do idioma atual de um texto que tem as tres traducoes */
  function pick(value) {
    if (value && typeof value === 'object' && !Array.isArray(value)) return value[lang] ?? value.pt;
    return value;
  }

  /* Traduz todos os elementos da pagina que tem data-i18n */
  function apply() {
    document.documentElement.lang = HTML_LANG[lang];
    document.title = t('meta_title');

    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
    document.querySelectorAll('[data-i18n-title]').forEach(el => { el.title = t(el.dataset.i18nTitle); });
    document.querySelectorAll('[data-i18n-tip]').forEach(el => { el.dataset.tip = t(el.dataset.i18nTip); });

    document.querySelectorAll('.lang button').forEach(b => {
      const active = b.dataset.lang === lang;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function set(next) {
    if (!SUPPORTED.includes(next) || next === lang) return;
    lang = next;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (err) { /* sem acesso ao armazenamento, a escolha so nao fica salva */ }
    apply();
    document.dispatchEvent(new CustomEvent('langchange', {detail: {lang}}));
  }

  document.querySelectorAll('.lang').forEach(group => {
    group.addEventListener('click', e => {
      const btn = e.target.closest('button[data-lang]');
      if (btn) set(btn.dataset.lang);
    });
  });

  apply();

  return {
    get lang() { return lang; },
    t,
    pick,
    set
  };
})();
