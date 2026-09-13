/* Troca entre a foto e a logo a cada 10 segundos. Com o mouse por cima mostra
   o outro lado e, no celular, a troca acontece com um toque. A animacao fica no style.css. */
(() => {
  'use strict';

  const AUTO_MS = 10000; // tempo entre as trocas automaticas

  const swap = document.getElementById('swap');
  const frame = swap.querySelector('.swap__frame');
  const finePointer = matchMedia('(pointer: fine)').matches;
  // Sem troca automatica para quem ativou a reducao de movimento no sistema
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  let autoLogo = false;    // lado escolhido pelo ciclo automatico, false e a foto
  let hovering = false;    // mouse em cima da moldura
  let showingLogo = false; // lado que esta na tela agora
  let timer = null;

  /* Mostra o lado do ciclo automatico, invertido enquanto o mouse esta por cima */
  function render() {
    swap.classList.toggle('is-hovered', hovering);

    const next = autoLogo !== hovering;
    if (next === showingLogo) return;
    showingLogo = next;
    swap.classList.toggle('is-flipped', showingLogo);

    // Tira e coloca a classe de novo para o brilho reiniciar
    swap.classList.remove('is-shining');
    void swap.offsetWidth;
    swap.classList.add('is-shining');
  }

  function restartTimer() {
    clearInterval(timer);
    if (reduceMotion) return;
    timer = setInterval(() => {
      // Nao troca debaixo do mouse nem com a aba escondida
      if (hovering || document.hidden) return;
      autoLogo = !autoLogo;
      render();
    }, AUTO_MS);
  }

  frame.addEventListener('pointerenter', e => {
    if (e.pointerType !== 'mouse') return;
    hovering = true;
    render();
  });

  frame.addEventListener('pointerleave', e => {
    if (e.pointerType !== 'mouse') return;
    hovering = false;
    render();
    restartTimer();
  });

  frame.addEventListener('click', () => {
    if (finePointer) return;
    autoLogo = !autoLogo;
    render();
    restartTimer();
  });

  restartTimer();
})();
