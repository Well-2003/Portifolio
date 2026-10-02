/* Troca as paginas do site e monta o que vem do data.js: numeros, tecnologias,
   habilidades, cartoes de projeto e a pagina de cada projeto.
   Quando o idioma muda, tudo e montado de novo no idioma escolhido. */
(() => {
  'use strict';

  // Endereco dos icones das tecnologias, os mesmos nomes que estao no data.js
  const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';

  /* Cor de cada tecnologia, tirada do proprio icone. Ela pinta o brilho e a borda
     quando o mouse passa por cima, do mesmo jeito que a cor de cada projeto faz nos cartoes.
     A do GitHub e um cinza, porque a logo dele e preta no claro e branca no escuro. */
  const CORES = {
    godot: '#478CBF',
    python: '#FFD43B',
    mysql: '#00546B',
    html5: '#E34F26',
    css3: '#1572B6',
    javascript: '#F7DF1E',
    github: '#8B949E',
    figma: '#F24E1E',
    canva: '#00C4CC',
    wordpress: '#8B949E'
  };

  /* Pega a cor pelo nome da pasta do icone, como godot em godot/godot-original */
  function corDa(item) {
    return (item.i && CORES[item.i.split('/')[0]]) || 'var(--accent)';
  }

  const tr = I18n.pick;
  const pane = document.getElementById('pane');
  const loadbar = document.getElementById('loadbar');

  let paginaAtual = 'inicio';
  let projetoAberto = null;
  let filtroAtual = 'all';

  /* Mostra uma pagina e esconde as outras */
  function abrePagina(nome) {
    if (nome !== 'projeto') projetoAberto = null;

    document.querySelectorAll('.view').forEach(view => {
      view.hidden = view.id !== 'view-' + nome;
    });

    // A barra fina do topo corre a cada troca, como o carregamento de uma pagina
    loadbar.classList.remove('is-loading');
    void loadbar.offsetWidth;
    loadbar.classList.add('is-loading');

    const aberta = document.getElementById('view-' + nome);
    aberta.classList.remove('is-entering');
    void aberta.offsetWidth;
    aberta.classList.add('is-entering');
    pane.scrollTop = 0;

    paginaAtual = nome;
    marcaTrilho();
  }

  /* Acende no trilho o botao da pagina aberta. A pagina de um projeto acende
     Projetos ou Em andamento, conforme o lugar de onde o projeto veio. */
  function marcaTrilho() {
    let marcada = paginaAtual;
    if (paginaAtual === 'projeto' && projetoAberto) {
      marcada = PROJECTS.some(p => p.id === projetoAberto.id) ? 'projetos' : 'andamento';
    }

    document.querySelectorAll('.rail__btn').forEach(btn => {
      btn.classList.toggle('is-active', btn.dataset.page === marcada);
    });
  }

  /* Numeros da pagina inicial, contados a partir do data.js */
  function montaNumeros() {
    const jogos = PROJECTS.filter(p => p.links.some(l => (l.url || '').includes('itch.io'))).length;

    document.getElementById('tiles').innerHTML = [
      [PROJECTS.length, I18n.t('stat_projects')],
      [WIP.length, I18n.t('stat_wip')],
      [jogos, I18n.t('stat_games')]
    ].map(item => `
      <div class="tile"><b>${item[0]}</b><span>${item[1]}</span></div>`).join('');
  }

  /* Icone de uma tecnologia. Nem todo item do data.js tem icone, entao o nome fica sozinho */
  function icone(item) {
    if (!item.i) return '';
    return `<img src="${DEVICON}${item.i}.svg" alt=""${item.dark ? ' class="is-dark-icon"' : ''}>`;
  }

  /* Faixa de tecnologias da pagina inicial */
  function montaTecnologias() {
    document.getElementById('techs').innerHTML = SKILLS.map(grupo => grupo.items.map(item => `
      <span class="tech" style="--cor:${corDa(item)}">${icone(item)}${item.n}</span>`).join('')).join('');
  }

  /* Cartoes de habilidades da pagina sobre mim */
  function montaHabilidades() {
    document.getElementById('skills').innerHTML = SKILLS.map(grupo => `
      <div class="skill">
        <h4>${Icone.doData(grupo.icon)} ${tr(grupo.title)}</h4>
        <ul>${grupo.items.map(item => `
          <li style="--cor:${corDa(item)}">${icone(item)}${item.n}</li>`).join('')}
        </ul>
      </div>`).join('');
  }

  /* Escapa o texto que vai para dentro do HTML como conteudo, nao como marcacao */
  function escapa(texto) {
    return texto.replace(/[&<>]/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;'}[c]));
  }

  /* Codigo do projeto, quando ele tem um exemplo no data.js */
  function codigoDo(projeto) {
    const campo = projeto.fields.find(f => f.code);
    return campo ? campo.code : null;
  }

  /* Janela com o codigo, usada por quem nao tem captura de tela, como o compilador */
  function janelaDeCodigo(projeto, mini) {
    const codigo = codigoDo(projeto);
    if (!codigo) return '';

    return `
      <div class="codeshot ${mini ? 'codeshot--mini' : ''}">
        <div class="codeshot__bar"><i></i><i></i><i></i><span>${codigo.left.name}</span></div>
        <pre><code>${escapa(codigo.left.body)}</code></pre>
      </div>`;
  }

  /* Cartao de um projeto. O selo verde so aparece nos projetos em andamento */
  function cartao(projeto, comSelo) {
    const imagem = projeto.images && projeto.images[0] ? projeto.images[0].src : '';
    const primeiroTexto = projeto.fields.find(f => f.text);
    const resumo = projeto.summary ? tr(projeto.summary) : (primeiroTexto ? tr(primeiroTexto.text) : '');

    const logo = projeto.logo
      ? `<span class="pcard__logo ${projeto.logoFill ? 'pcard__logo--fill' : ''}"><img src="${projeto.logo}" alt=""></span>`
      : `<span class="pcard__logo">${Icone.doData(projeto.icon)}</span>`;

    const topo = imagem
      ? `<span class="pcard__shot">
           <img class="pcard__blur" src="${imagem}" alt="" aria-hidden="true" loading="lazy">
           <img class="pcard__img" src="${imagem}" alt="" loading="lazy">
           ${comSelo ? `<span class="pcard__badge"><i></i>${tr(projeto.status)}</span>` : ''}
         </span>`
      : `<span class="pcard__shot">${janelaDeCodigo(projeto, true)}</span>`;

    return `
      <div class="pcard" role="button" tabindex="0" data-projeto="${projeto.id}" style="--cor:${projeto.color}">
        ${topo}
        <span class="pcard__body">
          <span class="pcard__top">
            ${logo}
            <span>
              <h3>${projeto.title}</h3>
              <span class="pcard__kind">${tr(projeto.kind)}</span>
            </span>
          </span>
          <span class="pcard__text">${resumo}</span>
          <span class="stack-row">${projeto.stack.slice(0, 3).map(s => `<span class="chip">${tr(s)}</span>`).join('')}</span>
          <span class="pcard__open">${I18n.t('open_case')} ${Icone.de('arrow')}</span>
        </span>
      </div>`;
  }

  function montaCartoes() {
    document.getElementById('cases').innerHTML = PROJECTS.map(p => cartao(p, false)).join('');
    document.getElementById('wips').innerHTML = WIP.map(p => cartao(p, true)).join('');
    aplicaFiltro(filtroAtual);
  }

  /* Blocos de texto do projeto, em duas colunas iguais.
     Listas, codigo e numeros ocupam a linha toda. Um texto que ficaria sozinho
     no fim da linha tambem ocupa, para nao sobrar buraco do lado. */
  function blocos(projeto) {
    const largos = projeto.fields.map(f => Boolean(f.list || f.code || f.stats || f.wide));

    for (let i = 0; i < largos.length; i++) {
      if (largos[i]) continue;

      let fim = i;
      while (fim + 1 < largos.length && !largos[fim + 1]) fim++;
      if ((fim - i + 1) % 2 === 1) largos[fim] = true;
      i = fim;
    }

    return projeto.fields.map((campo, i) => {
      let dentro = `<h4>${tr(campo.label)}</h4>`;

      if (campo.text) dentro += `<p>${tr(campo.text)}</p>`;

      if (campo.list) {
        dentro += `<ul>${tr(campo.list).map(item => `<li><span>${item}</span></li>`).join('')}</ul>`;
      }

      if (campo.code) {
        dentro += `
          <div class="codepair">
            <figure>
              <figcaption>${campo.code.left.name}</figcaption>
              <pre><code>${escapa(campo.code.left.body)}</code></pre>
            </figure>
            <figure>
              <figcaption>${campo.code.right.name}</figcaption>
              <pre><code>${escapa(campo.code.right.body)}</code></pre>
            </figure>
          </div>`;
      }

      if (campo.stats) {
        dentro += `<div class="nums">${campo.stats.map(s => `
          <div><b>${s.n}</b><span>${tr(s.k)}</span></div>`).join('')}
        </div>`;
      }

      return `<div class="field ${largos[i] ? 'field--wide' : ''}">${dentro}</div>`;
    }).join('');
  }

  /* Botoes de link do rodape. O repositorio privado vira selo, e nao link */
  function links(lista) {
    return lista.map(link => link.locked
      ? `<span class="linkbtn linkbtn--locked">${Icone.doData(link.icon)} ${tr(link.label)}</span>`
      : `<a class="linkbtn ${link.solid ? 'linkbtn--solid' : ''}" href="${link.url}" target="_blank" rel="noopener">${Icone.doData(link.icon)} ${tr(link.label)}</a>`
    ).join('');
  }

  /* Monta e abre a pagina de um projeto */
  function abreProjeto(id) {
    const projeto = PROJECTS.concat(WIP).find(p => p.id === id);
    if (!projeto) return;

    projetoAberto = projeto;

    const lista = PROJECTS.some(p => p.id === id) ? PROJECTS : WIP;
    const proximo = lista[(lista.indexOf(projeto) + 1) % lista.length];
    const voltarPara = lista === PROJECTS ? 'projetos' : 'andamento';
    const imagens = projeto.images || [];

    const palco = imagens.length
      ? `<img class="case__blur" id="blur" src="${imagens[0].src}" alt="" aria-hidden="true">` +
        imagens.map((img, i) => `
          <img class="case__img ${i ? '' : 'is-on'}" src="${img.src}" alt="" loading="${i ? 'lazy' : 'eager'}">`).join('')
      : janelaDeCodigo(projeto, false);

    const miniaturas = imagens.length > 1
      ? `<div class="case__thumbs" id="thumbs">${imagens.map((img, i) => `
           <button type="button" class="${i ? '' : 'is-on'}" data-i="${i}" aria-label="${tr(img.cap)}">
             <img src="${img.src}" alt="" loading="lazy">
           </button>`).join('')}
         </div>`
      : '';

    const view = document.getElementById('view-projeto');
    view.style.setProperty('--cor', projeto.color);
    view.innerHTML = `
      <button type="button" class="btn" data-page="${voltarPara}">
        ${Icone.de('voltar')} ${I18n.t('case_back')}
      </button>

      <div class="case__hero" style="margin-top:16px">
        <div class="case__stage" id="stage">
          ${palco}
          <div class="case__over">
            <div>
              <h2>${projeto.title}</h2>
              <p>${tr(projeto.kind)}</p>
            </div>
            ${projeto.status ? `<span class="livepill"><i></i>${tr(projeto.status)}</span>` : ''}
          </div>
        </div>
        ${miniaturas}
        ${imagens.length ? `<p class="case__cap" id="cap">${tr(imagens[0].cap)}</p>` : ''}
      </div>

      ${projeto.summary ? `<div class="field field--wide" style="margin-top:16px"><p class="lead">${tr(projeto.summary)}</p></div>` : ''}

      <div class="case__cols">${blocos(projeto)}</div>

      <div class="case__foot">
        <div class="stack-row">${projeto.stack.map(s => `<span class="chip">${tr(s)}</span>`).join('')}</div>
        <div class="stack-row">${links(projeto.links)}</div>
      </div>

      <div class="casenav">
        <button type="button" data-page="${voltarPara}">${Icone.de('voltar')} ${I18n.t('case_back')}</button>
        <button type="button" data-projeto="${proximo.id}">${I18n.t('case_next')}: ${proximo.title} ${Icone.de('arrow')}</button>
      </div>`;

    abrePagina('projeto');
  }

  /* Troca a imagem grande ao clicar em uma miniatura */
  document.getElementById('view-projeto').addEventListener('click', e => {
    const botao = e.target.closest('.case__thumbs button');
    if (!botao) return;

    const i = Number(botao.dataset.i);
    const imagens = document.querySelectorAll('#stage .case__img');

    imagens.forEach((img, k) => img.classList.toggle('is-on', k === i));
    document.getElementById('blur').src = imagens[i].src;
    document.querySelectorAll('#thumbs button').forEach((b, k) => b.classList.toggle('is-on', k === i));

    const projeto = projetoAberto;
    document.getElementById('cap').textContent = tr(projeto.images[i].cap);
  });

  /* Filtro dos projetos por tipo */
  function aplicaFiltro(filtro) {
    filtroAtual = filtro;
    document.querySelectorAll('.filter').forEach(b => b.classList.toggle('is-active', b.dataset.filter === filtro));

    PROJECTS.forEach(projeto => {
      const cartao = document.querySelector(`#cases [data-projeto="${projeto.id}"]`);
      if (cartao) cartao.hidden = filtro !== 'all' && !projeto.cats.includes(filtro);
    });
  }

  document.getElementById('filters').addEventListener('click', e => {
    const botao = e.target.closest('.filter');
    if (botao) aplicaFiltro(botao.dataset.filter);
  });

  /* Cliques do trilho e de qualquer botao que leve a outra pagina */
  const trilho = document.getElementById('rail');
  const botaoDoMenu = document.getElementById('rail-toggle');

  /* No celular o trilho fica escondido e abre pelo botao redondo */
  function abreMenu(aberto) {
    trilho.classList.toggle('is-open', aberto);
    botaoDoMenu.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    botaoDoMenu.innerHTML = Icone.de(aberto ? 'close' : 'menu');
  }

  botaoDoMenu.addEventListener('click', e => {
    // O clique para aqui, senao ele chega no documento e fecha o painel que acabou de abrir.
    // Isso acontece porque o icone do botao e trocado neste momento, e o alvo do clique sai da pagina.
    e.stopPropagation();
    abreMenu(!trilho.classList.contains('is-open'));
  });

  // Um toque fora do painel fecha ele
  document.addEventListener('click', e => {
    if (!trilho.contains(e.target)) abreMenu(false);
  });

  trilho.addEventListener('click', e => {
    // O foguete abre o jogo, entao aqui so fecha o painel do celular
    if (e.target.closest('#rocket')) {
      abreMenu(false);
      return;
    }

    const botao = e.target.closest('.rail__btn');
    if (!botao) return;

    abrePagina(botao.dataset.page);
    abreMenu(false);

    // Com o mouse, tira o foco do botao, senao o trilho continua aberto depois que o mouse sai.
    // No teclado o detail vem zero, e ai o foco fica onde esta.
    if (e.detail > 0) botao.blur();
  });

  pane.addEventListener('click', e => {
    const cartao = e.target.closest('[data-projeto]');
    if (cartao) {
      abreProjeto(cartao.dataset.projeto);
      return;
    }

    const botao = e.target.closest('[data-page]');
    if (botao) abrePagina(botao.dataset.page);
  });

  /* O cartao de projeto e uma caixa clicavel, entao o teclado precisa abrir junto */
  pane.addEventListener('keydown', e => {
    if (e.key !== 'Enter' && e.key !== ' ') return;

    const cartao = e.target.closest('[data-projeto]');
    if (!cartao) return;

    e.preventDefault();
    abreProjeto(cartao.dataset.projeto);
  });

  /* Brilho na cor do projeto ou da tecnologia, seguindo o mouse.
     O cartao ainda inclina de leve, e a etiqueta so acende. */
  pane.addEventListener('pointermove', e => {
    const alvo = e.target.closest('.pcard, .tech, .skill li');
    if (!alvo) return;

    const area = alvo.getBoundingClientRect();
    const x = (e.clientX - area.left) / area.width;
    const y = (e.clientY - area.top) / area.height;

    alvo.style.setProperty('--mx', (x * 100) + '%');
    alvo.style.setProperty('--my', (y * 100) + '%');

    if (alvo.classList.contains('pcard')) {
      alvo.style.transform = `perspective(900px) rotateX(${((.5 - y) * 5).toFixed(2)}deg) rotateY(${((x - .5) * 6).toFixed(2)}deg) translateY(-4px)`;
    }
  });

  pane.addEventListener('pointerout', e => {
    const cartao = e.target.closest('.pcard');
    if (cartao) cartao.style.transform = '';
  });

  /* Os dois cargos se escrevendo um atras do outro, embaixo do nome */
  const cargoEl = document.getElementById('role-text');
  let cargo = 0;
  let letras = 0;
  let apagando = false;
  let relogioCargo = null;

  function escreveCargo() {
    const cargos = [I18n.t('role_games'), I18n.t('role_web')];
    const texto = cargos[cargo % cargos.length];

    letras += apagando ? -1 : 1;
    cargoEl.textContent = texto.slice(0, letras);

    if (!apagando && letras === texto.length) {
      apagando = true;
      letras += 14; // segura o texto escrito por um tempinho antes de apagar
    } else if (apagando && letras <= 0) {
      apagando = false;
      cargo++;
    }
  }

  function iniciaCargos() {
    clearInterval(relogioCargo);
    letras = 0;
    apagando = false;

    // Quem pediu menos movimento no sistema ve so o primeiro cargo, parado
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      cargoEl.textContent = I18n.t('role_games');
      return;
    }

    relogioCargo = setInterval(escreveCargo, 95);
  }

  /* Monta tudo pela primeira vez */
  function montaTudo() {
    montaNumeros();
    montaTecnologias();
    montaHabilidades();
    montaCartoes();
    if (projetoAberto) abreProjeto(projetoAberto.id);
    marcaTrilho();
  }

  montaTudo();
  iniciaCargos();

  // Ao trocar o idioma, o que foi montado por aqui precisa ser montado de novo
  document.addEventListener('langchange', () => {
    montaTudo();
    iniciaCargos();
  });
})();
