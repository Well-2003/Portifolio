/* Monta os cartoes de habilidades e os paineis de projeto a partir do data.js.
   Quando o idioma muda, tudo e remontado mantendo os paineis abertos e o filtro escolhido. */
(() => {
  'use strict';

  const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';
  const skillsEl = document.getElementById('skills');
  const casesEl = document.getElementById('cases');
  const wipsEl = document.getElementById('wips');
  const tr = I18n.pick;

  /* Monta os blocos de texto e de lista de um projeto, usados nos casos e nos cartoes
     em andamento. wide abre nas duas colunas as listas, o codigo, os numeros e os textos
     marcados com wide no data.js, o que so o caso usa. */
  function fieldsHtml(fields, wide) {
    return fields.map(f => `
        <div class="case__field ${(f.list || f.code || f.stats || f.wide) && wide ? 'case__field--wide' : ''}">
          <h4>${tr(f.label)}</h4>
          ${f.text ? `<p>${tr(f.text)}</p>` : ''}
          ${f.list ? `<ul class="case__list">${tr(f.list).map(li => `<li><i class="ri-square-fill"></i><span>${li}</span></li>`).join('')}</ul>` : ''}
          ${f.code ? codeHtml(f.code) : ''}
          ${f.stats ? statsHtml(f.stats) : ''}
        </div>`).join('');
  }

  /* Numeros do projeto, contados no proprio repositorio. Ficam em fileira,
     com o algarismo grande e o rotulo pequeno embaixo. */
  function statsHtml(stats) {
    return `<div class="nums">${stats.map(s => `
            <div><b>${s.n}</b><span>${tr(s.k)}</span></div>`).join('')}
          </div>`;
  }

  /* Dois blocos de codigo lado a lado, para mostrar a entrada e a saida de um compilador.
     Escapa o texto porque ele vai para dentro do HTML como conteudo, nao como marcacao. */
  function codeHtml(code) {
    const esc = t => t.replace(/[&<>]/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;'}[c]));
    const pane = c => `
      <figure class="code">
        <figcaption>${c.name}</figcaption>
        <pre><code>${esc(c.body)}</code></pre>
      </figure>`;
    return `<div class="code-pair">${pane(code.left)}<i class="ri-arrow-right-line code-pair__arrow"></i>${pane(code.right)}</div>`;
  }

  /* Galeria do projeto: uma imagem grande e, quando ha mais de uma, as miniaturas
     que trocam a principal. Com uma imagem so, some a fileira de miniaturas. */
  function shotsHtml(p) {
    const imgs = p.images || [];
    if (!imgs.length) return '';

    const thumbs = imgs.length < 2 ? '' : `
        <div class="shots__thumbs">${imgs.map((im, i) => `
          <button type="button" class="${i ? '' : 'is-active'}" aria-pressed="${i ? 'false' : 'true'}"
                  data-src="${im.src}" data-cap="${tr(im.cap)}">
            <img src="${im.src}" alt="${tr(im.cap)}" loading="lazy">
          </button>`).join('')}
        </div>`;

    return `
        <div class="case__field case__field--wide">
          <figure class="shots">
            <img class="case__shot" src="${imgs[0].src}" alt="${p.title}" loading="lazy">
            <figcaption>${tr(imgs[0].cap)}</figcaption>
            ${thumbs}
          </figure>
        </div>`;
  }

  /* Botoes de link do rodape. Um link marcado como locked vira selo, e nao link,
     porque o repositorio ainda e privado e o endereco daria 404 para quem clicasse. */
  function linksHtml(links) {
    return links.map(l => l.locked
      ? `<span class="link-btn link-btn--locked"><i class="${l.icon}"></i> ${tr(l.label)}</span>`
      : `<a class="link-btn ${l.solid ? 'link-btn--solid' : ''}" href="${l.url}" target="_blank" rel="noopener"><i class="${l.icon}"></i> ${tr(l.label)}</a>`
    ).join('');
  }

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
      const fields = fieldsHtml(p.fields, true);

      const shot = shotsHtml(p);

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
            <div class="case__links">${linksHtml(p.links)}</div>
          </footer>
        </div></div>
      </article>`;
    }).join('');

    openIds.forEach(id => openCase(document.getElementById(id)));
    applyFilter(activeFilter);
  }

  /* Paineis da secao em andamento. Sao .case tambem, entao herdam o abre e fecha,
     o abrir por link direto, a galeria e todo o visual dos casos. O .wip so muda o corpo
     para uma coluna e acrescenta o selo de estado. */
  function renderWip() {
    const openIds = [...wipsEl.querySelectorAll('.case.is-open')].map(c => c.id);

    wipsEl.innerHTML = WIP.map(p => `
      <article class="case wip block" id="${p.id}" style="--c:${p.color};--tc:${p.text}${p.imageMax ? `;--shot-max:${p.imageMax}` : ''}">
        <button class="case__toggle" type="button" aria-expanded="false">
          <span class="case__swatch${p.logoFill ? ' case__swatch--fill' : ''}">${p.logo ? `<img src="${p.logo}" alt="">` : `<i class="${p.icon}"></i>`}</span>
          <span class="case__title">${p.title}</span>
          <span class="case__kind">${tr(p.kind)}</span>
          <i class="ri-arrow-down-s-line case__chev"></i>
        </button>
        <div class="case__wrap"><div>
          <div class="case__bar"></div>
          <div class="case__body">
            <div class="case__field wip__intro">
              <span class="wip__status ${p.live ? 'wip__status--live' : ''}"><i class="wip__dot"></i>${tr(p.status)}</span>
              <p>${tr(p.summary)}</p>
            </div>
            ${shotsHtml(p)}
            ${fieldsHtml(p.fields, false)}
          </div>
          <footer class="case__foot">
            <div class="stack">${p.stack.map(s => `<span>${tr(s)}</span>`).join('')}</div>
            <div class="case__links">${linksHtml(p.links)}</div>
          </footer>
        </div></div>
      </article>`).join('');

    openIds.forEach(id => openCase(document.getElementById(id)));
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

  /* Abre e fecha um painel ao clicar no titulo, tanto nos casos quanto em andamento */
  function onPanelClick(e) {
    const btn = e.target.closest('.case__toggle');
    if (!btn) return;
    const card = btn.closest('.case');
    const open = card.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  casesEl.addEventListener('click', onPanelClick);
  wipsEl.addEventListener('click', onPanelClick);

  /* Troca a imagem grande ao clicar em uma miniatura, nos casos e em andamento */
  function onThumbClick(e) {
    const thumb = e.target.closest('.shots__thumbs button');
    if (!thumb) return;

    const galeria = thumb.closest('.shots');
    galeria.querySelector('.case__shot').src = thumb.dataset.src;
    galeria.querySelector('figcaption').textContent = thumb.dataset.cap;

    galeria.querySelectorAll('.shots__thumbs button').forEach(b => {
      const ativo = b === thumb;
      b.classList.toggle('is-active', ativo);
      b.setAttribute('aria-pressed', ativo ? 'true' : 'false');
    });
  }
  casesEl.addEventListener('click', onThumbClick);
  wipsEl.addEventListener('click', onThumbClick);

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
  renderWip();
  firstRender = false;
  openFromHash();

  document.addEventListener('langchange', () => {
    renderSkills();
    renderCases();
    renderWip();
  });
})();
