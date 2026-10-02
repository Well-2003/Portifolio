/* Curriculo, formulario de contato e botao de copiar o e-mail */
(() => {
  'use strict';

  const EMAIL = 'silva.wes2003@gmail.com';
  const t = I18n.t;

  /* Curriculo. Cada idioma aponta para um arquivo PDF diferente */
  const cvView = document.getElementById('cv-view');
  const cvDownload = document.getElementById('cv-download');
  const cvStatus = document.getElementById('cv-status');

  function escolheCv(lang) {
    cvView.href = CV[lang].url;
    cvDownload.href = CV[lang].url;
    cvDownload.setAttribute('download', CV[lang].file);

    document.querySelectorAll('#cv-switch button').forEach(b => {
      b.classList.toggle('is-active', b.dataset.cv === lang);
    });

    cvStatus.textContent = '';
    cvStatus.className = 'formstatus';
  }

  /* Ja deixa escolhido o curriculo mais proximo do idioma do site.
     Nao existe versao em espanhol, entao quem esta em ES recebe a inglesa. */
  const cvDoIdioma = () => (I18n.lang === 'pt' ? 'pt' : 'en');

  document.getElementById('cv-switch').addEventListener('click', e => {
    const botao = e.target.closest('button');
    if (botao) escolheCv(botao.dataset.cv);
  });

  escolheCv(cvDoIdioma());

  /* Alguns navegadores ignoram o atributo download e abrem o PDF no leitor embutido.
     Aqui o arquivo e buscado e salvo pelo proprio site, entao o download acontece de verdade. */
  cvDownload.addEventListener('click', async e => {
    // Sem servidor o fetch nao funciona, entao o link normal continua valendo
    if (location.protocol === 'file:') return;
    e.preventDefault();

    const endereco = cvDownload.getAttribute('href');
    const nomeDoArquivo = cvDownload.getAttribute('download');

    cvStatus.className = 'formstatus';
    cvStatus.textContent = t('cv_saving');

    try {
      const resposta = await fetch(endereco);
      if (!resposta.ok) throw new Error('resposta ' + resposta.status);

      const arquivo = URL.createObjectURL(await resposta.blob());
      const linkTemporario = document.createElement('a');
      linkTemporario.href = arquivo;
      linkTemporario.download = nomeDoArquivo;
      document.body.appendChild(linkTemporario);
      linkTemporario.click();
      linkTemporario.remove();

      // Espera um pouco antes de liberar o endereco temporario, senao o download pode ser cancelado
      setTimeout(() => URL.revokeObjectURL(arquivo), 10000);

      cvStatus.className = 'formstatus ok';
      cvStatus.textContent = t('cv_saved');
    } catch (err) {
      // Se algo der errado, abre o arquivo do jeito antigo para o visitante nao ficar sem nada
      cvStatus.className = 'formstatus err';
      cvStatus.textContent = t('cv_failed');
      window.open(endereco, '_blank');
    }
  });

  /* Formulario de contato, valida os campos e envia a mensagem pelo Web3Forms */
  const form = document.getElementById('form');
  const status = document.getElementById('status');

  /* Chave de acesso do Web3Forms, que entrega a mensagem direto no e-mail.
     A chave chega por e-mail ao informar o endereco em web3forms.com e pode ficar no codigo,
     porque ela so envia mensagens para o endereco cadastrado. Enquanto estiver vazia,
     o envio continua abrindo o app de e-mail do visitante. */
  const WEB3FORMS_KEY = 'aafb3ff0-e1aa-4a6c-acaf-3f74f9a9f79b';
  const FORM_ENDPOINT = 'https://api.web3forms.com/submit';

  /* Abre o app de e-mail com a mensagem pronta. E o caminho de reserva:
     serve quando nao ha chave configurada e quando o envio pela rede falha. */
  function abreAppDeEmail(nome, email, mensagem) {
    const assunto = encodeURIComponent(t('mail_subject') + nome);
    const corpo = encodeURIComponent(mensagem + '\n\n' + nome + '\n' + email);
    location.href = `mailto:${EMAIL}?subject=${assunto}&body=${corpo}`;
  }

  const enviar = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('msg').value.trim();

    status.className = 'formstatus err';
    if (!nome) { status.textContent = t('form_err_name'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { status.textContent = t('form_err_email'); return; }
    if (mensagem.length < 10) { status.textContent = t('form_err_msg'); return; }

    // Sem chave configurada, o comportamento e o antigo: abre o app de e-mail
    if (!WEB3FORMS_KEY) {
      abreAppDeEmail(nome, email, mensagem);
      status.className = 'formstatus ok';
      status.textContent = t('form_ok');
      form.reset();
      return;
    }

    // Trava o botao para a mensagem nao sair duas vezes num clique nervoso
    enviar.disabled = true;
    status.className = 'formstatus';
    status.textContent = t('form_sending');

    try {
      const resposta = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {'Content-Type': 'application/json', Accept: 'application/json'},
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: t('mail_subject') + nome,
          from_name: nome,
          name: nome,
          email,
          message: mensagem
        })
      });

      // O Web3Forms responde success false quando recusa a mensagem, mesmo sem erro de rede
      const dados = await resposta.json();
      if (!resposta.ok || !dados.success) throw new Error(dados.message || resposta.status);

      status.className = 'formstatus ok';
      status.textContent = t('form_sent');
      form.reset();
    } catch (err) {
      // Falhou a rede ou o servico: em vez de perder a mensagem, devolve pelo e-mail
      status.className = 'formstatus err';
      status.textContent = t('form_fail');
      abreAppDeEmail(nome, email, mensagem);
    } finally {
      enviar.disabled = false;
    }
  });

  /* Copia o e-mail ao clicar no botao */
  const copiar = document.getElementById('copy-mail');
  let voltaDoCopiar = null;

  // O span com data-i18n faz o texto acompanhar a troca de idioma
  function textoDoCopiar(chave) {
    copiar.innerHTML = Icone.de('copy') + `<span data-i18n="${chave}">${t(chave)}</span>`;
  }

  copiar.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      textoDoCopiar('copied');
    } catch (err) {
      textoDoCopiar('copy_fail');
    }

    clearTimeout(voltaDoCopiar);
    voltaDoCopiar = setTimeout(() => textoDoCopiar('copy'), 2200);
  });

  /* Ao trocar o idioma, o curriculo acompanha e as mensagens antigas saem da tela */
  document.addEventListener('langchange', () => {
    escolheCv(cvDoIdioma());
    status.textContent = '';
    status.className = 'formstatus';
  });
})();
