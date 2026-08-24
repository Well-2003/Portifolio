/* Todas as traducoes do site nos tres idiomas */
const translations = {
    pt: {
        nav_home: "Início",
        nav_about: "Sobre",
        nav_services: "Serviços",
        nav_skills: "Habilidades",
        nav_portfolio: "Portfólio",
        nav_contact: "Contato",
        nav_cv: "Currículo",

        greeting: "> Olá, eu sou",
        btn_projects: "Ver projetos",
        btn_contact_short: "Contato",

        about_title: "Sobre Mim",
        bio: "Sou um estudante do último ano de Ciência da Computação na UNASP e desenvolvedor de jogos e web. Meu foco principal é criar experiências que as pessoas realmente gostem de usar ou jogar, sempre priorizando eficiência e funcionalidade.",
        bio_2: "Gosto muito de organizar a estrutura dos projetos antes da implementação, compreendendo o propósito por trás de cada decisão. Acredito no desenvolvimento como um processo contínuo: sinto-me à vontade e ansioso para revisitar sistemas, simplificando processos e aprimorando funcionalidades à medida que aprendo e cresço profissionalmente.",
        bio_3: "Seja desenvolvendo um jogo ou um software, meu objetivo é entregar soluções inteligentes e uma excelente experiência de usuário.",
        about_loc_label: "Localização:",
        about_focus_label: "Foco:",
        about_focus_value: "Desenvolvimento web e de jogos",
        about_lang_label: "Idiomas:",
        about_lang_value: "Português (nativo), Inglês (técnico), Espanhol (básico)",
        btn_contact: "Entrar em contato",
        btn_cv: "Baixar CV",

        services_title: "Serviços",
        serv_1_title: "Game Development",
        serv_1_desc: "Desenvolvimento de jogos 2D, 2.5D e 3D na Godot Engine: mecânicas de gameplay, máquinas de estado, sistemas de combate e integração de animações.",
        serv_2_title: "Backend & Sistemas",
        serv_2_desc: "Lógica de servidor e sistemas em Python, modelagem e consultas em MySQL, automações e ferramentas de linha de comando.",
        serv_3_title: "Desenvolvimento Web",
        serv_3_desc: "Sites e páginas responsivas com HTML, CSS e JavaScript, além de personalização de temas WordPress e prototipagem no Figma.",
        serv_4_title: "Arquitetura & Máquinas de Estado",
        serv_4_desc: "Organização da estrutura do projeto com orientação a objetos, máquinas de estado e padrões de projeto, para que uma mecânica ou uma tela nova entre sem quebrar o que já estava funcionando.",
        serv_5_title: "Versionamento & Publicação",
        serv_5_desc: "Fluxo de trabalho no GitHub: uma branch por funcionalidade, histórico de commits legível para quem chega depois e publicação do resultado no GitHub Pages ou no itch.io.",
        serv_6_title: "Depuração & Polimento",
        serv_6_desc: "Caçar o bug até a causa em vez de esconder o sintoma e, depois, cuidar do acabamento: tempo de resposta dos controles, feedback visual e os detalhes que fazem o site ou o jogo parecerem prontos.",

        skills_title: "Habilidades",
        work_title: "Meus Projetos",
        filter_all: "Todos",
        filter_games: "Jogos",
        filter_web: "Web",
        filter_backend: "Backend",
        cat_action: "Ação/Aventura",
        cat_platform: "Plataforma/Ação",
        cat_web: "Desenvolvimento Web",
        cat_backend: "Backend",
        proj_1_desc: "Jogo de ação 2D com lógica exclusiva para cada inimigo, mecânicas de combate, sistema de espólios e controle preciso das animações de todas as entidades.",
        proj_2_desc: "Jogo de plataforma 2D em pixel art com mecânicas de combate clássicas e controles responsivos.",
        proj_3_desc: "Sistema de gerenciamento de estoque com cadastro de produtos e usuários, dados salvos em JSON e a lógica de backend ligada a uma interface funcional.",
        proj_4_desc: "Desenvolvimento de um compilador para a linguagem Cirius, das etapas de análise até a geração do resultado.",
        link_play: "Jogar",
        link_code: "Código",
        link_demo: "Ver online",
        btn_more_projects: "Ver mais no GitHub",

        contact_title: "Fale Comigo",
        contact_lead: "Tem um projeto em mente ou quer trocar uma ideia sobre jogos e programação? Me chama!",
        contact_mail_title: "Escreva um e-mail",
        contact_social_title: "Redes Sociais",
        contact_social_sub: "Conecte-se comigo",
        form_name: "Nome",
        form_email: "E-mail",
        form_message: "Mensagem",
        form_send: "Enviar mensagem",
        form_success: "Mensagem enviada com sucesso ✅",
        form_error: "Erro ao enviar. Tente pelo e-mail direto ❌",

        cv_title: "Meu Currículo",
        cv_lead: "Escolha o idioma do currículo e baixe a versão em PDF.",
        cv_download: "Baixar currículo",
        cv_view: "Visualizar no navegador",

        footer_rights: "Todos os direitos reservados.",

        game_hint: "Setas ou WASD para mover, espaco para atirar, ESC para sair",
        quiz_title: "Voce foi atingido!",
        over_survived: "Voce sobreviveu por {s} segundos",
        game_server_alert: "O jogo precisa ser aberto por um servidor (como o GitHub Pages ou o Live Server) para carregar as perguntas.",
        typed_words: ["Desenvolvedor Web", "Desenvolvedor de Jogos"]
    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_skills: "Skills",
        nav_portfolio: "Portfolio",
        nav_contact: "Contact",
        nav_cv: "Resume",

        greeting: "> Hi, I'm",
        btn_projects: "View projects",
        btn_contact_short: "Contact",

        about_title: "About Me",
        bio: "I am a final-year Computer Science student at UNASP and a game and web developer. My main focus is creating experiences that people genuinely enjoy using or playing, always putting efficiency and functionality first.",
        bio_2: "I really enjoy organizing a project's structure before implementation, understanding the purpose behind each decision. I see development as a continuous process: I feel comfortable and eager to revisit systems, simplifying processes and improving features as I learn and grow professionally.",
        bio_3: "Whether I am building a game or a piece of software, my goal is to deliver smart solutions and an excellent user experience.",
        about_loc_label: "Location:",
        about_focus_label: "Focus:",
        about_focus_value: "Web and game development",
        about_lang_label: "Languages:",
        about_lang_value: "Portuguese (native), English (technical), Spanish (basic)",
        btn_contact: "Contact Me",
        btn_cv: "Download CV",

        services_title: "Services",
        serv_1_title: "Game Development",
        serv_1_desc: "2D, 2.5D and 3D game development in the Godot Engine: gameplay mechanics, state machines, combat systems and animation integration.",
        serv_2_title: "Backend & Systems",
        serv_2_desc: "Server logic and systems in Python, MySQL modeling and queries, automations and command-line tools.",
        serv_3_title: "Web Development",
        serv_3_desc: "Responsive websites and pages with HTML, CSS and JavaScript, plus WordPress theme customization and Figma prototyping.",
        serv_4_title: "Architecture & State Machines",
        serv_4_desc: "Structuring a project with object-oriented programming, state machines and design patterns, so a new mechanic or a new screen can be added without breaking what already worked.",
        serv_5_title: "Version Control & Deployment",
        serv_5_desc: "A GitHub workflow: one branch per feature, a commit history that is readable for whoever comes next, and publishing the result on GitHub Pages or itch.io.",
        serv_6_title: "Debugging & Polish",
        serv_6_desc: "Chasing a bug down to its cause instead of hiding the symptom, then taking care of the finish: control response time, visual feedback and the details that make a site or a game feel done.",

        skills_title: "Skills",
        work_title: "My Projects",
        filter_all: "All",
        filter_games: "Games",
        filter_web: "Web",
        filter_backend: "Backend",
        cat_action: "Action/Adventure",
        cat_platform: "Platform/Action",
        cat_web: "Web Dev",
        cat_backend: "Backend",
        proj_1_desc: "2D action game with unique logic for each enemy, combat mechanics, a loot system and precise animation control for every entity.",
        proj_2_desc: "2D pixel art platformer with classic combat mechanics and responsive controls.",
        proj_3_desc: "Inventory management system handling product and user records, data stored in JSON and backend logic wired to a working interface.",
        proj_4_desc: "Development of a compiler for the Cirius language, from the analysis stages to generating the output.",
        link_play: "Play",
        link_code: "Code",
        link_demo: "Live site",
        btn_more_projects: "See more on GitHub",

        contact_title: "Get In Touch",
        contact_lead: "Have a project in mind or want to talk about games and programming? Reach out!",
        contact_mail_title: "Write an email",
        contact_social_title: "Social Media",
        contact_social_sub: "Connect with me",
        form_name: "Name",
        form_email: "Email",
        form_message: "Message",
        form_send: "Send message",
        form_success: "Message sent successfully ✅",
        form_error: "Failed to send. Try emailing me directly ❌",

        cv_title: "My Resume",
        cv_lead: "Pick the language of the resume and download the PDF version.",
        cv_download: "Download resume",
        cv_view: "Open in the browser",

        footer_rights: "All rights reserved.",

        game_hint: "Arrows or WASD to move, space to shoot, ESC to quit",
        quiz_title: "You got hit!",
        over_survived: "You survived for {s} seconds",
        game_server_alert: "The game needs to run from a server (like GitHub Pages or Live Server) to load the questions.",
        typed_words: ["Web Developer", "Game Developer"]
    },
    es: {
        nav_home: "Inicio",
        nav_about: "Sobre",
        nav_services: "Servicios",
        nav_skills: "Habilidades",
        nav_portfolio: "Portafolio",
        nav_contact: "Contacto",
        nav_cv: "Currículum",

        greeting: "> Hola, soy",
        btn_projects: "Ver proyectos",
        btn_contact_short: "Contacto",

        about_title: "Sobre Mí",
        bio: "Soy estudiante del último año de Ciencias de la Computación en UNASP y desarrollador de juegos y web. Mi foco principal es crear experiencias que las personas realmente disfruten usar o jugar, priorizando siempre la eficiencia y la funcionalidad.",
        bio_2: "Me gusta mucho organizar la estructura de los proyectos antes de la implementación, comprendiendo el propósito detrás de cada decisión. Creo en el desarrollo como un proceso continuo: me siento cómodo y con ganas de revisitar sistemas, simplificando procesos y mejorando funcionalidades a medida que aprendo y crezco profesionalmente.",
        bio_3: "Ya sea desarrollando un juego o un software, mi objetivo es entregar soluciones inteligentes y una excelente experiencia de usuario.",
        about_loc_label: "Ubicación:",
        about_focus_label: "Enfoque:",
        about_focus_value: "Desarrollo web y de juegos",
        about_lang_label: "Idiomas:",
        about_lang_value: "Portugués (nativo), Inglés (técnico), Español (básico)",
        btn_contact: "Contáctame",
        btn_cv: "Descargar CV",

        services_title: "Servicios",
        serv_1_title: "Game Development",
        serv_1_desc: "Desarrollo de juegos 2D, 2.5D y 3D en Godot Engine: mecánicas de gameplay, máquinas de estados, sistemas de combate e integración de animaciones.",
        serv_2_title: "Backend & Sistemas",
        serv_2_desc: "Lógica de servidor y sistemas en Python, modelado y consultas en MySQL, automatizaciones y herramientas de línea de comandos.",
        serv_3_title: "Desarrollo Web",
        serv_3_desc: "Sitios y páginas responsivas con HTML, CSS y JavaScript, además de personalización de temas WordPress y prototipado en Figma.",
        serv_4_title: "Arquitectura & Máquinas de Estados",
        serv_4_desc: "Organización de la estructura del proyecto con programación orientada a objetos, máquinas de estados y patrones de diseño, para que una mecánica o una pantalla nueva entre sin romper lo que ya funcionaba.",
        serv_5_title: "Versionado & Publicación",
        serv_5_desc: "Flujo de trabajo en GitHub: una rama por funcionalidad, un historial de commits legible para quien llegue después y publicación del resultado en GitHub Pages o itch.io.",
        serv_6_title: "Depuración & Pulido",
        serv_6_desc: "Perseguir el bug hasta su causa en vez de esconder el síntoma y, después, cuidar el acabado: tiempo de respuesta de los controles, feedback visual y los detalles que hacen que el sitio o el juego se sientan terminados.",

        skills_title: "Habilidades",
        work_title: "Mis Proyectos",
        filter_all: "Todos",
        filter_games: "Juegos",
        filter_web: "Web",
        filter_backend: "Backend",
        cat_action: "Acción/Aventura",
        cat_platform: "Plataforma/Acción",
        cat_web: "Desarrollo Web",
        cat_backend: "Backend",
        proj_1_desc: "Juego de acción 2D con lógica exclusiva para cada enemigo, mecánicas de combate, sistema de botín y control preciso de las animaciones de todas las entidades.",
        proj_2_desc: "Juego de plataformas 2D en pixel art con mecánicas de combate clásicas y controles responsivos.",
        proj_3_desc: "Sistema de gestión de inventario con registro de productos y usuarios, datos guardados en JSON y la lógica de backend conectada a una interfaz funcional.",
        proj_4_desc: "Desarrollo de un compilador para el lenguaje Cirius, desde las etapas de análisis hasta la generación del resultado.",
        link_play: "Jugar",
        link_code: "Código",
        link_demo: "Ver en línea",
        btn_more_projects: "Ver más en GitHub",

        contact_title: "Háblame",
        contact_lead: "¿Tienes un proyecto en mente o quieres hablar sobre juegos y programación? ¡Escríbeme!",
        contact_mail_title: "Escribe un correo",
        contact_social_title: "Redes Sociales",
        contact_social_sub: "Conéctate conmigo",
        form_name: "Nombre",
        form_email: "Correo",
        form_message: "Mensaje",
        form_send: "Enviar mensaje",
        form_success: "Mensaje enviado con éxito ✅",
        form_error: "Error al enviar. Escríbeme directo por correo ❌",

        cv_title: "Mi Currículum",
        cv_lead: "Elige el idioma del currículum y descarga la versión en PDF.",
        cv_download: "Descargar currículum",
        cv_view: "Abrir en el navegador",

        footer_rights: "Todos los derechos reservados.",

        game_hint: "Flechas o WASD para mover, espacio para disparar, ESC para salir",
        quiz_title: "Te golpearon!",
        over_survived: "Sobreviviste {s} segundos",
        game_server_alert: "El juego necesita abrirse desde un servidor (como GitHub Pages o Live Server) para cargar las preguntas.",
        typed_words: ["Desarrollador Web", "Desarrollador de Juegos"]
    }
};

let currentLang = 'pt';
let typedInstance = null;

/* Efeito de digitacao da tela inicial */
function startTyped(lang) {
    // Encerra a animacao anterior antes de comecar no novo idioma
    if (typedInstance) typedInstance.destroy();

    typedInstance = new Typed('#typed', {
        strings: translations[lang].typed_words,
        typeSpeed: 90,
        backSpeed: 45,
        backDelay: 1800,
        loop: true,
        showCursor: false // o cursor pixelado ja e feito no CSS
    });
}

/* Troca o idioma de todos os textos do site */
function changeLanguage(lang) {
    currentLang = lang;

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Destaca o idioma escolhido no seletor
    document.querySelectorAll('.lang-selector span').forEach(span => {
        span.classList.toggle('lang-active', span.getAttribute('data-lang') === lang);
    });

    // Atualiza o idioma do documento, bom para acessibilidade e buscadores
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;

    // Recomeca o efeito de digitacao no idioma escolhido
    startTyped(lang);

    // Ja deixa selecionado o curriculo mais proximo do idioma do site
    // (nao existe versao em espanhol, entao o visitante em ES recebe a inglesa)
    setCvLang(lang === 'pt' ? 'pt' : 'en');
}

/* Secao do curriculo: cada idioma aponta para um arquivo PDF diferente */
const cvFiles = {
    pt: { file: 'assets/cv/curriculo-wesley-silva-pt.pdf', name: 'Curriculo-Wesley-Silva-PT.pdf', badge: 'PT' },
    en: { file: 'assets/cv/resume-wesley-silva-en.pdf', name: 'Resume-Wesley-Silva-EN.pdf', badge: 'EN' }
};

const cvOptions = document.querySelectorAll('.cv__option'),
      cvDownload = document.getElementById('cv-download'),
      cvView = document.getElementById('cv-view'),
      cvBadge = document.getElementById('cv-badge');

/* Aponta os botoes de baixar e visualizar para o arquivo do idioma escolhido */
function setCvLang(lang) {
    const cv = cvFiles[lang];
    if (!cv || !cvDownload) return;

    cvDownload.setAttribute('href', cv.file);
    cvDownload.setAttribute('download', cv.name);
    if (cvView) cvView.setAttribute('href', cv.file);
    if (cvBadge) cvBadge.textContent = cv.badge;

    // Marca visualmente qual das duas opcoes esta ativa
    cvOptions.forEach(option => {
        const isActive = option.getAttribute('data-cv') === lang;
        option.classList.toggle('cv-active', isActive);
        option.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
}

cvOptions.forEach(option => {
    option.addEventListener('click', () => setCvLang(option.getAttribute('data-cv')));
});

/* Alguns navegadores ignoram o atributo download e abrem o PDF no leitor embutido.
   Aqui o arquivo e buscado e salvo pelo proprio site, entao o download acontece de verdade. */
if (cvDownload) {
    cvDownload.addEventListener('click', async (event) => {
        if (location.protocol === 'file:') return;

        event.preventDefault();

        const url = cvDownload.getAttribute('href'),
              fileName = cvDownload.getAttribute('download');

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
        } catch (error) {
            // Se algo der errado, abre o arquivo do jeito antigo para o visitante nao ficar sem nada
            window.location.href = url;
        }
    });
}

/* No celular nao existe passar o mouse, entao um toque troca a foto pela logo.
   No computador o proprio :hover ja faz a troca, por isso o clique nao e ligado la. */
const homeImage = document.getElementById('home-image');

if (homeImage && window.matchMedia('(hover: none)').matches) {
    homeImage.addEventListener('click', () => {
        homeImage.classList.toggle('is-flipped');
    });
}

// O site comeca em portugues
changeLanguage('pt');

/* Abre e fecha o menu no celular */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/* Fecha o menu quando um link e clicado */
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    navMenu.classList.remove('show-menu');
};
navLink.forEach(n => n.addEventListener('click', linkAction));

/* Adiciona uma sombra no cabecalho quando a pagina e rolada */
const scrollHeader = () => {
    const header = document.getElementById('header');
    window.scrollY >= 50 ? header.classList.add('shadow-header')
                         : header.classList.remove('shadow-header');
};
window.addEventListener('scroll', scrollHeader);

/* Destaca no menu o link da secao que esta na tela */
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (!sectionsClass) return; // ignora secoes que nao tem link no menu

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    });
};
window.addEventListener('scroll', scrollActive);

/* Abre e fecha os cartoes de servicos */
const servicesCards = document.querySelectorAll('.services__card');

servicesCards.forEach(card => {
    const header = card.querySelector('.services__header');

    header.addEventListener('click', () => {
        const isOpen = card.classList.contains('services-open');

        // Fecha todos os outros cartoes
        servicesCards.forEach(c => c.classList.remove('services-open'));

        // Abre o cartao clicado se ele estava fechado
        if (!isOpen) card.classList.add('services-open');
    });
});

// O primeiro servico ja comeca aberto
if (servicesCards.length > 0) servicesCards[0].classList.add('services-open');

/* Filtra os projetos por categoria */
const filterButtons = document.querySelectorAll('.projects__filter');
const projectCards = document.querySelectorAll('.projects__card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        // Destaca o botao de filtro escolhido
        filterButtons.forEach(b => b.classList.remove('active-filter'));
        button.classList.add('active-filter');

        // Mostra ou esconde cada projeto conforme o filtro
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            const show = filter === 'all' || category === filter;
            card.classList.toggle('hidden-card', !show);
        });
    });
});

/* Formulario de contato enviado pelo EmailJS.
   Para ativar o envio, crie uma conta gratuita em https://www.emailjs.com/,
   configure um servico de email e um modelo com as variaveis user_name,
   user_email e user_message, e depois preencha os tres valores abaixo. */
const EMAILJS_SERVICE_ID = 'SEU_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'SEU_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'SUA_PUBLIC_KEY';

const contactForm = document.getElementById('contact-form'),
      contactStatus = document.getElementById('contact-status');

const sendEmail = (e) => {
    e.preventDefault();

    // Enquanto o EmailJS nao estiver configurado, abre o aplicativo de email da pessoa
    if (EMAILJS_SERVICE_ID === 'SEU_SERVICE_ID') {
        const name = document.getElementById('contact-name').value;
        const message = document.getElementById('contact-message').value;
        const subject = encodeURIComponent('Contato pelo portfólio - ' + name);
        const body = encodeURIComponent(message);
        window.location.href = `mailto:silva.wes2003@gmail.com?subject=${subject}&body=${body}`;
        return;
    }

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, '#contact-form', EMAILJS_PUBLIC_KEY)
        .then(() => {
            contactStatus.textContent = translations[currentLang].form_success;
            contactStatus.className = 'contact__status success';
            contactForm.reset();
            setTimeout(() => { contactStatus.textContent = ''; }, 5000);
        })
        .catch(() => {
            contactStatus.textContent = translations[currentLang].form_error;
            contactStatus.className = 'contact__status error';
            setTimeout(() => { contactStatus.textContent = ''; }, 5000);
        });
};

if (contactForm) contactForm.addEventListener('submit', sendEmail);

/* Mostra o botao de voltar ao topo depois de rolar um pouco */
const scrollUp = () => {
    const scrollUpBtn = document.getElementById('scroll-up');
    const rocketBtn = document.getElementById('rocket-launch');
    const show = window.scrollY >= 350;
    scrollUpBtn.classList.toggle('show-scroll', show);
    rocketBtn.classList.toggle('show-scroll', show);
};
window.addEventListener('scroll', scrollUp);

/* Atualiza o ano do rodape automaticamente */
const footerYear = document.getElementById('footer-year');
if (footerYear) footerYear.textContent = new Date().getFullYear();

/* Animacoes de entrada dos elementos ao rolar a pagina */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
});

sr.reveal(`.home__data, .footer__container`);
sr.reveal(`.home__info`, { delay: 600, origin: 'right' });
sr.reveal(`.home__image`, { delay: 600, origin: 'bottom' });
sr.reveal(`.services__card`, { origin: 'bottom', interval: 100 });
sr.reveal(`.skills__content:nth-child(1)`, { origin: 'left' });
sr.reveal(`.skills__content:nth-child(2)`, { origin: 'bottom' });
sr.reveal(`.skills__content:nth-child(3)`, { origin: 'right' });
sr.reveal(`.projects__filters`, { origin: 'top' });
sr.reveal(`.projects__card`, { origin: 'bottom', interval: 120 });
sr.reveal(`.about__info`, { origin: 'bottom' });
sr.reveal(`.contact__data-box`, { origin: 'left' });
sr.reveal(`.contact__form`, { origin: 'right' });
sr.reveal(`.cv__card`, { origin: 'bottom' });


/* Mini game de asteroides escondido no foguete.
   O jogador pilota o foguete, desvia e atira nos asteroides.
   O jogo so conta o tempo de sobrevivencia, sem pontuacao.
   Se o foguete for atingido, aparece uma pergunta de programacao
   carregada do arquivo questions.json. Acertou, o jogo continua.
   Errou, e game over e o site volta ao normal. */

const gameOverlay = document.getElementById('game-overlay');
const gameCanvas = document.getElementById('game-canvas');
const gameCtx = gameCanvas.getContext('2d');
const gameTimeEl = document.getElementById('game-time');
const gameHint = document.getElementById('game-hint');
const quizBox = document.getElementById('game-quiz');
const quizQuestionEl = document.getElementById('quiz-question');
const quizOptionsEl = document.getElementById('quiz-options');
const gameOverEl = document.getElementById('game-over');
const gameOverTimeEl = document.getElementById('game-over-time');
/* Imagem da nave usada dentro do jogo */
const shipSprite = new Image();
shipSprite.src = 'assets/images/nave_mini_game.png';

let gameRunning = false;
let gamePaused = false;
let animationId = null;
let startTime = 0;
let pausedTotal = 0;
let pauseStart = 0;

let ship = null;
let asteroids = [];
let bullets = [];
let keys = {};
let lastShot = 0;
let invulnerableUntil = 0;
let lastSpawn = 0;

/* Perguntas carregadas do arquivo json */
let questions = [];
let questionOrder = [];

const loadQuestions = async () => {
    try {
        const res = await fetch('assets/questions.json');
        questions = await res.json();
    } catch (e) {
        /* Se abrir o site direto pelo arquivo, sem servidor, o navegador
           bloqueia a leitura do json. Nesse caso o jogo avisa e nao abre. */
        questions = [];
    }
};
loadQuestions();

/* Embaralha a ordem das perguntas para nao repetir ate acabarem todas */
const shuffleQuestions = () => {
    questionOrder = questions.map((q, i) => i);
    for (let i = questionOrder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questionOrder[i], questionOrder[j]] = [questionOrder[j], questionOrder[i]];
    }
};

const nextQuestion = () => {
    if (questionOrder.length === 0) shuffleQuestions();
    return questions[questionOrder.pop()];
};

/* Ajusta o canvas ao tamanho da tela */
const resizeCanvas = () => {
    gameCanvas.width = window.innerWidth;
    gameCanvas.height = window.innerHeight;
};
window.addEventListener('resize', resizeCanvas);

/* Cria um asteroide em uma borda da tela, longe do foguete */
const createAsteroid = (size) => {
    const w = gameCanvas.width, h = gameCanvas.height;
    let x, y;
    do {
        const edge = Math.floor(Math.random() * 4);
        if (edge === 0) { x = Math.random() * w; y = -60; }
        else if (edge === 1) { x = w + 60; y = Math.random() * h; }
        else if (edge === 2) { x = Math.random() * w; y = h + 60; }
        else { x = -60; y = Math.random() * h; }
    } while (ship && Math.hypot(x - ship.x, y - ship.y) < 250);

    const angle = Math.random() * Math.PI * 2;
    const speed = 0.6 + Math.random() * 1.2;
    const points = [];
    const sides = 9;
    for (let i = 0; i < sides; i++) {
        points.push(0.72 + Math.random() * 0.45);
    }
    return {
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: size,
        rotation: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.02,
        points
    };
};

/* Comeca uma partida do zero */
const startGame = () => {
    /* Tira o foco do botao para o teclado controlar so o jogo */
    document.getElementById('rocket-launch').blur();
    if (questions.length === 0) {
        alert(translations[currentLang].game_server_alert);
        return;
    }
    resizeCanvas();
    shuffleQuestions();

    ship = {
        x: gameCanvas.width / 2,
        y: gameCanvas.height / 2,
        vx: 0, vy: 0,
        angle: -Math.PI / 2,
        radius: 22
    };
    asteroids = [];
    bullets = [];
    keys = {};
    lastShot = 0;
    for (let i = 0; i < 5; i++) asteroids.push(createAsteroid(38 + Math.random() * 18));

    startTime = performance.now();
    pausedTotal = 0;
    lastSpawn = performance.now();
    invulnerableUntil = performance.now() + 2000;

    gameRunning = true;
    gamePaused = false;
    gameOverlay.classList.add('game-active');
    document.body.classList.add('game-open');
    gameHint.classList.remove('hide-hint');
    setTimeout(() => gameHint.classList.add('hide-hint'), 4000);

    animationId = requestAnimationFrame(gameLoop);
};

/* Fecha o jogo e devolve o site ao normal */
const endGame = () => {
    gameRunning = false;
    gamePaused = false;
    cancelAnimationFrame(animationId);
    gameOverlay.classList.remove('game-active');
    quizBox.classList.remove('show-quiz');
    gameOverEl.classList.remove('show-over');
    document.body.classList.remove('game-open');
};

/* Mostra o game over por alguns segundos e volta para o site */
const showGameOver = () => {
    gamePaused = true;
    quizBox.classList.remove('show-quiz');
    const seconds = Math.floor((performance.now() - startTime - pausedTotal) / 1000);
    gameOverTimeEl.textContent = translations[currentLang].over_survived.replace('{s}', seconds);
    gameOverEl.classList.add('show-over');
    setTimeout(endGame, 2600);
};

/* Pausa o jogo e mostra uma pergunta quando o foguete e atingido */
const askQuestion = () => {
    gamePaused = true;
    pauseStart = performance.now();

    const q = nextQuestion();
    quizQuestionEl.textContent = q.pergunta[currentLang];
    quizOptionsEl.innerHTML = '';

    q.alternativas[currentLang].forEach((alt, index) => {
        const btn = document.createElement('button');
        btn.className = 'game-quiz-option';
        btn.textContent = alt;
        btn.addEventListener('click', () => {
            if (index === q.correta) {
                /* Acertou, volta para o jogo com uns segundos de protecao */
                quizBox.classList.remove('show-quiz');
                pausedTotal += performance.now() - pauseStart;
                invulnerableUntil = performance.now() + 2500;

                /* Limpa os asteroides perto do foguete para nao ser atingido de novo na hora */
                asteroids = asteroids.filter(a => Math.hypot(a.x - ship.x, a.y - ship.y) > 220);

                gamePaused = false;
            } else {
                showGameOver();
            }
        });
        quizOptionsEl.appendChild(btn);
    });

    quizBox.classList.add('show-quiz');
};

/* Desenha o foguete usando a mesma imagem do botao */
const drawShip = () => {
    const blinking = performance.now() < invulnerableUntil;
    if (blinking && Math.floor(performance.now() / 150) % 2 === 0) return;

    gameCtx.save();
    gameCtx.translate(ship.x, ship.y);
    gameCtx.rotate(ship.angle + Math.PI / 2);
    /* Mantem a proporcao original da nave, so que maior */
    const shipH = 68;
    const shipW = shipH * (shipSprite.width / shipSprite.height || 0.57);
    gameCtx.drawImage(shipSprite, -shipW / 2, -shipH / 2, shipW, shipH);
    gameCtx.restore();
};

const drawAsteroid = (a) => {
    gameCtx.save();
    gameCtx.translate(a.x, a.y);
    gameCtx.rotate(a.rotation);
    gameCtx.strokeStyle = '#4facfe';
    gameCtx.lineWidth = 2;
    gameCtx.beginPath();
    a.points.forEach((p, i) => {
        const ang = (i / a.points.length) * Math.PI * 2;
        const px = Math.cos(ang) * a.radius * p;
        const py = Math.sin(ang) * a.radius * p;
        i === 0 ? gameCtx.moveTo(px, py) : gameCtx.lineTo(px, py);
    });
    gameCtx.closePath();
    gameCtx.stroke();
    gameCtx.restore();
};

/* Faz os objetos atravessarem as bordas e aparecerem do outro lado */
const wrap = (obj, margin) => {
    const w = gameCanvas.width, h = gameCanvas.height;
    if (obj.x < -margin) obj.x = w + margin;
    if (obj.x > w + margin) obj.x = -margin;
    if (obj.y < -margin) obj.y = h + margin;
    if (obj.y > h + margin) obj.y = -margin;
};

const shoot = () => {
    const now = performance.now();
    if (now - lastShot < 250) return;
    lastShot = now;
    bullets.push({
        x: ship.x + Math.cos(ship.angle) * 24,
        y: ship.y + Math.sin(ship.angle) * 24,
        vx: Math.cos(ship.angle) * 8 + ship.vx,
        vy: Math.sin(ship.angle) * 8 + ship.vy,
        born: now
    });
};

/* Laco principal do jogo, roda a cada quadro */
const gameLoop = () => {
    if (!gameRunning) return;
    animationId = requestAnimationFrame(gameLoop);
    if (gamePaused) return;

    const now = performance.now();
    const w = gameCanvas.width, h = gameCanvas.height;

    /* Atualiza o tempo mostrado no topo */
    const seconds = Math.floor((now - startTime - pausedTotal) / 1000);
    gameTimeEl.textContent = seconds + 's';

    /* Controles do foguete */
    if (keys['ArrowLeft'] || keys['a']) ship.angle -= 0.05;
    if (keys['ArrowRight'] || keys['d']) ship.angle += 0.05;
    if (keys['ArrowUp'] || keys['w']) {
        ship.vx += Math.cos(ship.angle) * 0.09;
        ship.vy += Math.sin(ship.angle) * 0.09;
    }
    if (keys['ArrowDown'] || keys['s']) {
        ship.vx *= 0.95;
        ship.vy *= 0.95;
    }
    if (keys[' ']) shoot();

    /* Atrito leve e limite de velocidade */
    ship.vx *= 0.97;
    ship.vy *= 0.97;
    const speed = Math.hypot(ship.vx, ship.vy);
    if (speed > 6) { ship.vx *= 6 / speed; ship.vy *= 6 / speed; }
    ship.x += ship.vx;
    ship.y += ship.vy;
    wrap(ship, 30);

    /* Novos asteroides vao surgindo com o tempo, ate um limite */
    if (now - lastSpawn > 3500 && asteroids.length < 12) {
        asteroids.push(createAsteroid(38 + Math.random() * 18));
        lastSpawn = now;
    }

    asteroids.forEach(a => {
        a.x += a.vx;
        a.y += a.vy;
        a.rotation += a.spin;
        wrap(a, 70);
    });

    bullets = bullets.filter(b => now - b.born < 1400);
    bullets.forEach(b => {
        b.x += b.vx;
        b.y += b.vy;
        wrap(b, 10);
    });

    /* Tiro acertando asteroide: os grandes se dividem em dois menores */
    for (let i = asteroids.length - 1; i >= 0; i--) {
        const a = asteroids[i];
        for (let j = bullets.length - 1; j >= 0; j--) {
            const b = bullets[j];
            if (Math.hypot(a.x - b.x, a.y - b.y) < a.radius) {
                bullets.splice(j, 1);
                asteroids.splice(i, 1);
                if (a.radius > 24) {
                    for (let k = 0; k < 2; k++) {
                        const child = createAsteroid(a.radius * 0.55);
                        child.x = a.x;
                        child.y = a.y;
                        asteroids.push(child);
                    }
                }
                break;
            }
        }
    }

    /* Asteroide acertando o foguete: hora da pergunta */
    if (now > invulnerableUntil) {
        for (const a of asteroids) {
            if (Math.hypot(a.x - ship.x, a.y - ship.y) < a.radius + ship.radius) {
                askQuestion();
                break;
            }
        }
    }

    /* Desenho da cena */
    gameCtx.fillStyle = '#000521';
    gameCtx.fillRect(0, 0, w, h);

    gameCtx.fillStyle = '#ffffff';
    bullets.forEach(b => {
        gameCtx.beginPath();
        gameCtx.arc(b.x, b.y, 3, 0, Math.PI * 2);
        gameCtx.fill();
    });

    asteroids.forEach(drawAsteroid);
    drawShip();
};

/* Teclado */
window.addEventListener('keydown', (e) => {
    if (!gameRunning) return;
    if ([' ', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) e.preventDefault();
    if (e.key === 'Escape') { endGame(); return; }
    keys[e.key.length === 1 ? e.key.toLowerCase() : e.key] = true;
});
window.addEventListener('keyup', (e) => {
    keys[e.key.length === 1 ? e.key.toLowerCase() : e.key] = false;
});

/* Botoes de toque para jogar no celular */
document.querySelectorAll('.game-touch-btn').forEach(btn => {
    const map = { left: 'ArrowLeft', right: 'ArrowRight', thrust: 'ArrowUp', fire: ' ' };
    const key = map[btn.getAttribute('data-touch')];
    const press = (e) => { e.preventDefault(); keys[key] = true; };
    const release = (e) => { e.preventDefault(); keys[key] = false; };
    btn.addEventListener('pointerdown', press);
    btn.addEventListener('pointerup', release);
    btn.addEventListener('pointerleave', release);
    btn.addEventListener('pointercancel', release);
});

/* Abre o jogo ao clicar no foguete e fecha no botao de sair */
document.getElementById('rocket-launch').addEventListener('click', startGame);
document.getElementById('game-quit').addEventListener('click', endGame);
