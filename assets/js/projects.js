/* Monta os cartoes de habilidades e os paineis de projeto a partir do data.js.
   Quando o idioma muda, tudo e remontado mantendo os paineis abertos e o filtro escolhido. */
(() => {
  'use strict';

  const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';
  const skillsEl = document.getElementById('skills');
  const casesEl = document.getElementById('cases');
  const tr = I18n.pick;

  let firstRender = true;
  let activeFilter = 'all';

  /* Cartoes de habilidades */
  function renderSkills() {
    // Os cartoes so animam na primeira vez, depois de trocar o idioma eles ja aparecem prontos
    const revealClass = firstRender ? 'reveal' : 'reveal is-visible';

    skillsEl.innerHTML = SKILLS.map(group => `
      <div class="block skills__card ${revealClass}">
        <h3><i class="${group.icon}"></i> ${tr(group.title)}</h3>
        <ul>${group.items.map(item => `
          <li>${item.i ? `<img src="${DEVICON}${item.i}.svg" alt=""${item.dark ? ' class="is-dark-icon"' : ''}>` : ''}${item.n}</li>`).join('')}
        </ul>
      </div>`).join('');
  }

  /* Paineis de projeto, que comecam fechados */
  function renderCases() {
    const openIds = [...casesEl.querySelectorAll('.case.is-open')].map(c => c.id);

    casesEl.innerHTML = PROJECTS.map((p, i) => {
      const fields = p.fields.map(f => `
        <div class="case__field ${f.list ? 'case__field--wide' : ''}">
          <h4>${tr(f.label)}</h4>
          ${f.text ? `<p>${tr(f.text)}</p>` : ''}
          ${f.list ? `<ul class="case__list">${tr(f.list).map(li => `<li><i class="ri-square-fill"></i><span>${li}</span></li>`).join('')}</ul>` : ''}
        </div>`).join('');

      const shot = p.image ? `
        <div class="case__field case__field--wide">
          <img class="case__shot" src="${p.image}" alt="${p.title}" loading="lazy">
        </div>` : '';

      return `
      <article class="case block" id="${p.id}" data-cats="${p.cats.join(' ')}" style="--c:${p.color};--tc:${p.text}${p.imageMax ? `;--shot-max:${p.imageMax}` : ''}">
        <button class="case__toggle" type="button" aria-expanded="false">
          <span class="case__swatch${p.logoFill ? ' case__swatch--fill' : ''}">${p.logo ? `<img src="${p.logo}" alt="">` : `<i class="${p.icon}"></i>`}</span>
          <span class="case__n">${String(i + 1).padStart(2, '0')}</span>
          <span class="case__title">${p.title}</span>
          <span class="case__kind">${tr(p.kind)}</span>
          <i class="ri-arrow-down-s-line case__chev"></i>
        </button>
        <div class="case__wrap"><div>
          <div class="case__bar"></div>
          <div class="case__body">${shot}${fields}</div>
          <footer class="case__foot">
            <div class="stack">${p.stack.map(s => `<span>${tr(s)}</span>`).join('')}</div>
            <div class="case__links">
              ${p.links.map(l => `<a class="link-btn ${l.solid ? 'link-btn--solid' : ''}" href="${l.url}" target="_blank" rel="noopener"><i class="${l.icon}"></i> ${tr(l.label)}</a>`).join('')}
            </div>
          </footer>
        </div></div>
      </article>`;
    }).join('');

    openIds.forEach(id => openCase(document.getElementById(id)));
    applyFilter(activeFilter);
  }

  function openCase(card) {
    if (!card || !card.classList.contains('case')) return;
    card.classList.add('is-open');
    card.querySelector('.case__toggle').setAttribute('aria-expanded', 'true');
  }

  function applyFilter(filter) {
    activeFilter = filter;
    document.querySelectorAll('.filter').forEach(f => f.classList.toggle('is-active', f.dataset.filter === filter));
    casesEl.querySelectorAll('.case').forEach(c => {
      c.classList.toggle('is-hidden', filter !== 'all' && !c.dataset.cats.split(' ').includes(filter));
    });
  }

  /* Abre e fecha um painel ao clicar no titulo */
  casesEl.addEventListener('click', e => {
    const btn = e.target.closest('.case__toggle');
    if (!btn) return;
    const card = btn.closest('.case');
    const open = card.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  /* Filtra os projetos por categoria */
  document.getElementById('filters').addEventListener('click', e => {
    const btn = e.target.closest('.filter');
    if (btn) applyFilter(btn.dataset.filter);
  });

  /* Abre o projeto quando alguem chega por um link direto, como #singra */
  function openFromHash() {
    const id = location.hash.slice(1);
    if (id) openCase(document.getElementById(id));
  }
  addEventListener('hashchange', openFromHash);

  renderSkills();
  renderCases();
  firstRender = false;
  openFromHash();

  document.addEventListener('langchange', () => {
    renderSkills();
    renderCases();
  });
})();
