/* Curriculo, formulario de contato e botao de copiar o e-mail */
(() => {
  'use strict';

  const EMAIL = 'silva.wes2003@gmail.com';
  const t = I18n.t;

  /* Secao do curriculo, cada idioma aponta para um arquivo PDF diferente */
  const cvDownload = document.getElementById('cv-download');
  const cvView = document.getElementById('cv-view');

  function setCv(lang) {
    cvDownload.href = CV[lang].url;
    cvDownload.setAttribute('download', CV[lang].file);
    cvView.href = CV[lang].url;
    document.querySelectorAll('#cv-switch button').forEach(b => {
      b.classList.toggle('is-active', b.dataset.cv === lang);
    });
  }

  /* Ja deixa selecionado o curriculo mais proximo do idioma do site.
     Nao existe versao em espanhol, entao quem esta em ES recebe a inglesa. */
  const cvForSiteLang = () => (I18n.lang === 'pt' ? 'pt' : 'en');

  document.getElementById('cv-switch').addEventListener('click', e => {
    const b = e.target.closest('button');
    if (b) setCv(b.dataset.cv);
  });
  setCv(cvForSiteLang());

  /* Alguns navegadores ignoram o atributo download e abrem o PDF no leitor embutido.
     Aqui o arquivo e buscado e salvo pelo proprio site, entao o download acontece de verdade. */
  cvDownload.addEventListener('click', async e => {
    // Sem servidor o fetch nao funciona, entao o link normal continua valendo
    if (location.protocol === 'file:') return;
    e.preventDefault();

    const url = cvDownload.getAttribute('href');
    const fileName = cvDownload.getAttribute('download');

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('resposta ' + response.status);

      const blobUrl = URL.createObjectURL(await response.blob());
      const tempLink = document.createElement('a');
      tempLink.href = blobUrl;
      tempLink.download = fileName;
      document.body.appendChild(tempLink);
      tempLink.click();
      tempLink.remove();

      // Espera um pouco antes de liberar o endereco temporario, senao o download pode ser cancelado
      setTimeout(() => URL.revokeObjectURL(blobUrl), 10000);
    } catch (err) {
      // Se algo der errado, abre o arquivo do jeito antigo para o visitante nao ficar sem nada
      location.href = url;
    }
  });

  /* Formulario de contato, valida os campos e envia a mensagem pelo Web3Forms */
  const form = document.getElementById('form');
  const statusEl = document.getElementById('status');

  /* Chave de acesso do Web3Forms, que entrega a mensagem direto no e-mail.
     A chave chega por e-mail ao informar o endereco em web3forms.com e pode ficar no codigo,
     porque ela so envia mensagens para o endereco cadastrado. Enquanto estiver vazia,
     o envio continua abrindo o app de e-mail do visitante. */
  const WEB3FORMS_KEY = 'aafb3ff0-e1aa-4a6c-acaf-3f74f9a9f79b';
  const FORM_ENDPOINT = 'https://api.web3forms.com/submit';

  /* Abre o app de e-mail com a mensagem pronta. E o caminho de reserva:
     serve quando nao ha servico configurado e quando o envio pela rede falha. */
  function openMailClient(nome, email, msg) {
    const subject = encodeURIComponent(t('mail_subject') + nome);
    const body = encodeURIComponent(msg + '\n\n---\n' + nome + '\n' + email);
    location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('msg').value.trim();

    statusEl.className = 'status err';
    if (!nome) { statusEl.textContent = t('form_err_name'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { statusEl.textContent = t('form_err_email'); return; }
    if (msg.length < 10) { statusEl.textContent = t('form_err_msg'); return; }

    // Sem chave configurada, o comportamento e o antigo: abre o app de e-mail
    if (!WEB3FORMS_KEY) {
      openMailClient(nome, email, msg);
      statusEl.className = 'status ok';
      statusEl.textContent = t('form_ok');
      form.reset();
      return;
    }

    // Trava o botao para a mensagem nao sair duas vezes num clique nervoso
    submitBtn.disabled = true;
    statusEl.className = 'status';
    statusEl.textContent = t('form_sending');

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {'Content-Type': 'application/json', Accept: 'application/json'},
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: t('mail_subject') + nome,
          from_name: nome,
          name: nome,
          email,
          message: msg
        })
      });
      // O Web3Forms responde success false quando recusa a mensagem, mesmo sem erro de rede
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || res.status);

      statusEl.className = 'status ok';
      statusEl.textContent = t('form_sent');
      form.reset();
    } catch (err) {
      // Falhou a rede ou o servico: em vez de perder a mensagem, devolve pelo e-mail
      statusEl.className = 'status err';
      statusEl.textContent = t('form_fail');
      openMailClient(nome, email, msg);
    } finally {
      submitBtn.disabled = false;
    }
  });

  /* Copia o e-mail ao clicar no botao */
  const copy = document.getElementById('copy-mail');
  let copyReset = null;

  // O span com data-i18n faz o texto acompanhar a troca de idioma
  function copyLabel(icon, key) {
    copy.innerHTML = `<i class="${icon}"></i> <span data-i18n="${key}">${t(key)}</span>`;
  }

  copy.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      copyLabel('ri-check-line', 'copied');
    } catch (err) {
      copyLabel('ri-error-warning-line', 'copy_fail');
    }
    clearTimeout(copyReset);
    copyReset = setTimeout(() => copyLabel('ri-file-copy-line', 'copy'), 2200);
  });

  /* Atualiza o curriculo e limpa as mensagens quando o idioma muda */
  document.addEventListener('langchange', () => {
    setCv(cvForSiteLang());
    // Mensagens antigas ficariam no idioma anterior
    statusEl.textContent = '';
    statusEl.className = 'status';
  });
})();
