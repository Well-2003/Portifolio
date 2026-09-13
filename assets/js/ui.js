/* Tema, menu, rolagem, relogio e animacoes de entrada.
   Roda depois do projects.js porque observa os cartoes criados por ele. */
(() => {
  'use strict';

  /* Alterna entre o tema claro e o escuro */
  const themeBtn = document.getElementById('theme-btn');
  themeBtn.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    themeBtn.innerHTML = next === 'light' ? '<i class="ri-moon-line"></i>' : '<i class="ri-sun-line"></i>';
  });

  /* Abre e fecha o menu no celular */
  const navMenu = document.getElementById('nav-menu');
  document.getElementById('nav-toggle').addEventListener('click', () => navMenu.classList.add('is-open'));
  document.getElementById('nav-close').addEventListener('click', () => navMenu.classList.remove('is-open'));
  navMenu.addEventListener('click', e => {
    if (e.target.matches('.nav__link')) navMenu.classList.remove('is-open');
  });

  /* Borda do cabecalho, botao de voltar ao topo e link ativo do menu conforme a rolagem */
  const header = document.getElementById('header');
  const toTop = document.getElementById('to-top');
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  function onScroll() {
    const y = scrollY;
    header.classList.toggle('is-scrolled', y > 16);
    toTop.classList.toggle('is-visible', y > 700);

    let current = '';
    sections.forEach(s => { if (y >= s.offsetTop - 170) current = s.id; });
    navLinks.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === '#' + current));
  }
  addEventListener('scroll', onScroll, {passive: true});
  onScroll();

  /* Relogio de Sao Paulo no topo, no formato do idioma escolhido */
  const clock = document.getElementById('clock');
  function tick() {
    const time = new Date().toLocaleTimeString(I18n.t('clock_locale'), {
      hour: '2-digit', minute: '2-digit', timeZone: 'America/Sao_Paulo'
    });
    clock.textContent = time + ' ' + I18n.t('clock_suffix');
  }
  tick();
  setInterval(tick, 30000);
  document.addEventListener('langchange', tick);

  /* Animacao de entrada quando o bloco aparece na tela */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: .08, rootMargin: '0px 0px -40px 0px'});
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  /* Atualiza o ano do rodape automaticamente */
  document.getElementById('year').textContent = new Date().getFullYear();
})();
