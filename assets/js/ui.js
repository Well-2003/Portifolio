/* Tema claro ou escuro do site */
(() => {
  'use strict';

  const CHAVE_TEMA = 'portfolio-theme';
  // Um botao de tema fica no alto e o outro dentro do painel do celular
  const botoesDeTema = document.querySelectorAll('.themebtn');

  /* Deixa o botao com o icone e o nome do tema que esta valendo */
  function aplicaTema(tema) {
    document.documentElement.dataset.theme = tema;

    const chave = tema === 'dark' ? 'theme_dark' : 'theme_light';
    botoesDeTema.forEach(botao => {
      botao.innerHTML = Icone.de(tema === 'dark' ? 'moon' : 'sun') +
        '<span data-i18n="' + chave + '">' + I18n.t(chave) + '</span>';
    });

    try {
      localStorage.setItem(CHAVE_TEMA, tema);
    } catch (err) { /* sem acesso ao armazenamento, a escolha so nao fica salva */ }
  }

  // O site abre no tema escuro, a nao ser que o visitante ja tenha escolhido o claro
  let temaSalvo = 'dark';
  try {
    if (localStorage.getItem(CHAVE_TEMA) === 'light') temaSalvo = 'light';
  } catch (err) { /* sem acesso ao armazenamento, o site continua no tema escuro */ }

  aplicaTema(temaSalvo);

  botoesDeTema.forEach(botao => {
    botao.addEventListener('click', () => {
      aplicaTema(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
    });
  });

})();
