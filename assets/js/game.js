/* Mini game da nave. O jogador pilota a nave, desvia e atira nos asteroides.
   Se for atingido, responde uma pergunta do questions.js. Acertou, o jogo continua.
   Errou, e fim de jogo e o site volta ao normal. */
(() => {
  'use strict';

  const finePointer = matchMedia('(pointer: fine)').matches;

  const gameEl = document.getElementById('game');
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d');
  const timeEl = document.getElementById('game-time');
  const hintEl = document.getElementById('game-hint');
  const quizEl = document.getElementById('quiz');
  const quizQ = document.getElementById('quiz-question');
  const quizOpts = document.getElementById('quiz-options');
  const overEl = document.getElementById('over');
  const overTime = document.getElementById('over-time');
  const touchEl = document.getElementById('game-touch');

  const shipSprite = new Image();
  shipSprite.src = 'assets/images/nave_mini_game.png';

  let running = false, paused = false, raf = null;
  let startT = 0, pausedTotal = 0, pauseStart = 0, lastSpawn = 0, lastShot = 0, invulnUntil = 0;
  let ship = null, rocks = [], shots = [], keys = {}, order = [];

  /* Embaralha a ordem das perguntas para nao repetir ate acabarem todas */
  function nextQuestion() {
    if (!order.length) {
      order = QUESTIONS.map((_, i) => i);
      for (let i = order.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
      }
    }
    return QUESTIONS[order.pop()];
  }

  function sizeGame() { canvas.width = innerWidth; canvas.height = innerHeight; }
  addEventListener('resize', () => { if (running) sizeGame(); });

  /* Cria um asteroide em uma borda da tela, longe da nave */
  function makeRock(size) {
    const w = canvas.width, h = canvas.height;
    let x, y;
    do {
      const edge = Math.floor(Math.random() * 4);
      if (edge === 0) { x = Math.random() * w; y = -60; }
      else if (edge === 1) { x = w + 60; y = Math.random() * h; }
      else if (edge === 2) { x = Math.random() * w; y = h + 60; }
      else { x = -60; y = Math.random() * h; }
    } while (ship && Math.hypot(x - ship.x, y - ship.y) < 250);

    const ang = Math.random() * Math.PI * 2, sp = .6 + Math.random() * 1.2;
    return {
      x, y, vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp, radius: size,
      rot: Math.random() * Math.PI * 2, spin: (Math.random() - .5) * .02,
      pts: Array.from({length: 9}, () => .72 + Math.random() * .45)
    };
  }

  function startGame() {
    sizeGame();
    order = [];
    ship = {x: canvas.width / 2, y: canvas.height / 2, vx: 0, vy: 0, angle: -Math.PI / 2, radius: 22};
    rocks = []; shots = []; keys = {}; lastShot = 0;
    for (let i = 0; i < 5; i++) rocks.push(makeRock(38 + Math.random() * 18));

    startT = performance.now(); pausedTotal = 0; lastSpawn = startT; invulnUntil = startT + 2000;
    running = true; paused = false;

    gameEl.classList.add('is-active');
    document.body.classList.add('game-open');
    touchEl.classList.toggle('is-on', !finePointer);
    hintEl.classList.remove('is-hidden');
    setTimeout(() => hintEl.classList.add('is-hidden'), 4000);
    raf = requestAnimationFrame(loop);
  }

  function endGame() {
    running = false; paused = false;
    cancelAnimationFrame(raf);
    gameEl.classList.remove('is-active');
    quizEl.classList.remove('is-open');
    overEl.classList.remove('is-open');
    document.body.classList.remove('game-open');
  }

  function gameOver() {
    paused = true;
    quizEl.classList.remove('is-open');
    const s = Math.floor((performance.now() - startT - pausedTotal) / 1000);
    overTime.textContent = I18n.t('over_time', {s});
    overEl.classList.add('is-open');
    setTimeout(endGame, 2600);
  }

  function askQuestion() {
    paused = true; pauseStart = performance.now();
    const q = nextQuestion();
    // Pergunta e alternativas no idioma escolhido no site
    quizQ.textContent = I18n.pick(q.q);
    quizOpts.innerHTML = '';

    I18n.pick(q.a).forEach((alt, idx) => {
      const b = document.createElement('button');
      b.className = 'quiz__option';
      b.textContent = alt;
      b.addEventListener('click', () => {
        if (idx === q.c) {
          // Acertou, volta para o jogo com uns segundos de protecao e sem asteroides perto da nave
          quizEl.classList.remove('is-open');
          pausedTotal += performance.now() - pauseStart;
          invulnUntil = performance.now() + 2500;
          rocks = rocks.filter(r => Math.hypot(r.x - ship.x, r.y - ship.y) > 220);
          paused = false;
        } else {
          gameOver();
        }
      });
      quizOpts.appendChild(b);
    });
    quizEl.classList.add('is-open');
  }

  /* Faz os objetos atravessarem as bordas e aparecerem do outro lado */
  function wrapEdges(o, m) {
    const w = canvas.width, h = canvas.height;
    if (o.x < -m) o.x = w + m;
    if (o.x > w + m) o.x = -m;
    if (o.y < -m) o.y = h + m;
    if (o.y > h + m) o.y = -m;
  }

  function shoot() {
    const now = performance.now();
    if (now - lastShot < 250) return;
    lastShot = now;
    shots.push({
      x: ship.x + Math.cos(ship.angle) * 24, y: ship.y + Math.sin(ship.angle) * 24,
      vx: Math.cos(ship.angle) * 8 + ship.vx, vy: Math.sin(ship.angle) * 8 + ship.vy, born: now
    });
  }

  function loop() {
    if (!running) return;
    raf = requestAnimationFrame(loop);
    if (paused) return;

    const now = performance.now(), w = canvas.width, h = canvas.height;
    timeEl.textContent = Math.floor((now - startT - pausedTotal) / 1000) + 's';

    // Controles da nave
    if (keys['ArrowLeft'] || keys['a']) ship.angle -= .05;
    if (keys['ArrowRight'] || keys['d']) ship.angle += .05;
    if (keys['ArrowUp'] || keys['w']) { ship.vx += Math.cos(ship.angle) * .09; ship.vy += Math.sin(ship.angle) * .09; }
    if (keys['ArrowDown'] || keys['s']) { ship.vx *= .95; ship.vy *= .95; }
    if (keys[' ']) shoot();

    // Atrito leve e limite de velocidade
    ship.vx *= .97; ship.vy *= .97;
    const sp = Math.hypot(ship.vx, ship.vy);
    if (sp > 6) { ship.vx *= 6 / sp; ship.vy *= 6 / sp; }
    ship.x += ship.vx; ship.y += ship.vy;
    wrapEdges(ship, 30);

    // Novos asteroides surgem com o tempo e os tiros andam ate sumir
    if (now - lastSpawn > 3500 && rocks.length < 12) { rocks.push(makeRock(38 + Math.random() * 18)); lastSpawn = now; }
    rocks.forEach(r => { r.x += r.vx; r.y += r.vy; r.rot += r.spin; wrapEdges(r, 70); });
    shots = shots.filter(b => now - b.born < 1400);
    shots.forEach(b => { b.x += b.vx; b.y += b.vy; wrapEdges(b, 10); });

    // Tiro acertando asteroide, os grandes se dividem em dois menores
    for (let i = rocks.length - 1; i >= 0; i--) {
      const r = rocks[i];
      for (let j = shots.length - 1; j >= 0; j--) {
        if (Math.hypot(r.x - shots[j].x, r.y - shots[j].y) < r.radius) {
          shots.splice(j, 1);
          rocks.splice(i, 1);
          if (r.radius > 24) {
            for (let k = 0; k < 2; k++) {
              const c = makeRock(r.radius * .55);
              c.x = r.x; c.y = r.y;
              rocks.push(c);
            }
          }
          break;
        }
      }
    }

    // Asteroide acertando a nave, hora da pergunta
    if (now > invulnUntil) {
      for (const r of rocks) {
        if (Math.hypot(r.x - ship.x, r.y - ship.y) < r.radius + ship.radius) { askQuestion(); break; }
      }
    }

    // Desenho da cena
    ctx.fillStyle = '#010716';
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = '#EDF4FF';
    shots.forEach(b => { ctx.beginPath(); ctx.arc(b.x, b.y, 2.5, 0, Math.PI * 2); ctx.fill(); });

    rocks.forEach(r => {
      ctx.save();
      ctx.translate(r.x, r.y);
      ctx.rotate(r.rot);
      ctx.strokeStyle = 'rgba(79,172,254,.9)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      r.pts.forEach((p, i) => {
        const a = (i / r.pts.length) * Math.PI * 2;
        const px = Math.cos(a) * r.radius * p, py = Math.sin(a) * r.radius * p;
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      });
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    });

    // A nave pisca enquanto esta invencivel
    if (!(now < invulnUntil && Math.floor(now / 150) % 2 === 0)) {
      ctx.save();
      ctx.translate(ship.x, ship.y);
      ctx.rotate(ship.angle + Math.PI / 2);
      const sh = 64, sw = sh * (shipSprite.width / shipSprite.height || .57);
      ctx.drawImage(shipSprite, -sw / 2, -sh / 2, sw, sh);
      ctx.restore();
    }
  }

  /* Teclado */
  addEventListener('keydown', e => {
    if (!running) return;
    if ([' ', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) e.preventDefault();
    if (e.key === 'Escape') { endGame(); return; }
    keys[e.key.length === 1 ? e.key.toLowerCase() : e.key] = true;
  });
  addEventListener('keyup', e => {
    keys[e.key.length === 1 ? e.key.toLowerCase() : e.key] = false;
  });

  /* Botoes de toque para jogar no celular */
  const touchMap = {left: 'ArrowLeft', right: 'ArrowRight', thrust: 'ArrowUp', fire: ' '};
  document.querySelectorAll('.touch-btn').forEach(btn => {
    const key = touchMap[btn.dataset.touch];
    const press = e => { e.preventDefault(); keys[key] = true; };
    const release = e => { e.preventDefault(); keys[key] = false; };
    btn.addEventListener('pointerdown', press);
    btn.addEventListener('pointerup', release);
    btn.addEventListener('pointerleave', release);
    btn.addEventListener('pointercancel', release);
  });

  document.getElementById('rocket').addEventListener('click', startGame);
  document.getElementById('game-quit').addEventListener('click', endGame);
})();
