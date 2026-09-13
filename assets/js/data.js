/* Dados do site. Para adicionar ou editar um projeto, habilidade ou curriculo, mexa so aqui,
   o projects.js le estas listas e monta o HTML sozinho. Textos que mudam com o idioma
   ficam com as versoes pt, en e es, e nomes iguais em todo idioma podem ser texto simples. */

/* Projetos com cor e conteudo tirados de cada repositorio. color e a cor do projeto,
   text e a cor do texto em cima dela e cats sao os filtros onde o projeto aparece. */
const PROJECTS = [
  {
    id: 'singra',
    logo: 'https://raw.githubusercontent.com/Well-2003/Singra_Finance/main/frontend/public/favicon.svg',
    cats: ['web', 'backend'],
    title: 'Singra', color: '#9CAF88', text: '#14120F',
    kind: {
      pt: 'Finanças pessoais',
      en: 'Personal finance',
      es: 'Finanzas personales'
    },
    fields: [
      {
        label: {pt: 'O problema', en: 'The problem', es: 'El problema'},
        text: {
          pt: 'Quem ganha o suficiente e mesmo assim chega ao fim do mês sem saber para onde o dinheiro foi já tentou planilha e desistiu na segunda semana. A planilha não falha por matemática, falha por atrito. E o app do banco mostra extrato, não decisão: diz quanto saiu, não quanto ainda dá para gastar.',
          en: "People who earn enough and still reach the end of the month without knowing where the money went have already tried a spreadsheet and given up by the second week. The spreadsheet doesn't fail because of math, it fails because of friction. And the bank app shows a statement, not a decision: it tells you how much went out, not how much you can still spend.",
          es: 'Quien gana lo suficiente y aun así llega a fin de mes sin saber adónde se fue el dinero ya probó una hoja de cálculo y la abandonó en la segunda semana. La hoja de cálculo no falla por las matemáticas, falla por la fricción. Y la app del banco muestra un extracto, no una decisión: dice cuánto salió, no cuánto todavía se puede gastar.'
        }
      },
      {
        label: {pt: 'A solução', en: 'The solution', es: 'La solución'},
        text: {
          pt: 'Um site que responde a uma pergunta só, e responde bem: quanto eu ainda posso gastar este mês. Todo o resto existe para sustentar essa resposta. Critério de sucesso: se registrar um gasto der mais trabalho do que anotar num papel, o sistema falhou.',
          en: 'A site that answers one question only, and answers it well: how much can I still spend this month. Everything else exists to support that answer. Success criterion: if logging an expense takes more effort than jotting it down on paper, the system failed.',
          es: 'Un sitio que responde una sola pregunta, y la responde bien: cuánto puedo gastar todavía este mes. Todo lo demás existe para sostener esa respuesta. Criterio de éxito: si registrar un gasto cuesta más trabajo que anotarlo en un papel, el sistema falló.'
        }
      },
      {
        label: {pt: 'Decisões que sustentam isso', en: 'Decisions that back it up', es: 'Decisiones que lo sostienen'},
        list: {
          pt: [
            'Registro em três toques: valor, categoria, confirmar. Teclado numérico próprio que forma R$ 45,90 enquanto a pessoa digita 4590.',
            'O mês é o da pessoa, não o do calendário: quem recebe no dia 5 configura o dia 5 e todos os cálculos seguem esse ciclo.',
            'Painel que abre com um número grande, em vez de uma lista de lançamentos.',
            'Planejamento por categoria com sugestão automática pela regra 50/30/20 e cópia do mês anterior.',
            'Metas com círculo de progresso, meta especial de investimento e calendário de contas projetado meses à frente.',
            'Sete gráficos, cada um com título em forma de pergunta e uma frase respondendo o que ele mostra.',
            'Senhas com hash bcrypt, sessão por token assinado e recuperação por link com validade.',
            'Tradução em português, inglês e espanhol, e exportação de tudo em CSV.'
          ],
          en: [
            'Logging in three taps: amount, category, confirm. A custom number pad that builds R$ 45,90 as the person types 4590.',
            "The month is the person's, not the calendar's: whoever gets paid on the 5th sets the 5th, and every calculation follows that cycle.",
            'A dashboard that opens with one big number instead of a list of transactions.',
            'Per-category planning with automatic suggestions based on the 50/30/20 rule and copying from the previous month.',
            'Goals with a progress ring, a special investment goal and a bills calendar projected months ahead.',
            'Seven charts, each with a title phrased as a question and a sentence answering what it shows.',
            'Passwords hashed with bcrypt, sessions via signed tokens and recovery through a time-limited link.',
            'Translation into Portuguese, English and Spanish, and export of everything to CSV.'
          ],
          es: [
            'Registro en tres toques: valor, categoría, confirmar. Un teclado numérico propio que forma R$ 45,90 mientras la persona escribe 4590.',
            'El mes es el de la persona, no el del calendario: quien cobra el día 5 configura el día 5 y todos los cálculos siguen ese ciclo.',
            'Un panel que abre con un número grande, en lugar de una lista de movimientos.',
            'Planificación por categoría con sugerencia automática según la regla 50/30/20 y copia del mes anterior.',
            'Metas con círculo de progreso, meta especial de inversión y calendario de cuentas proyectado meses adelante.',
            'Siete gráficos, cada uno con un título en forma de pregunta y una frase que responde lo que muestra.',
            'Contraseñas con hash bcrypt, sesión mediante token firmado y recuperación por enlace con fecha de expiración.',
            'Traducción al portugués, inglés y español, y exportación de todo a CSV.'
          ]
        }
      },
      {
        label: {pt: 'Nota', en: 'Note', es: 'Nota'},
        text: {
          pt: 'Projeto de estudo: a história, a equipe e os números da página “Sobre nós” são fictícios.',
          en: 'Study project: the story, the team and the numbers on the “About us” page are fictional.',
          es: 'Proyecto de estudio: la historia, el equipo y los números de la página “Sobre nosotros” son ficticios.'
        }
      }
    ],
    stack: ['Python', 'Flask', 'MySQL', 'JavaScript', 'GitHub Pages'],
    links: [
      {label: {pt: 'Ver online', en: 'Live site', es: 'Ver en línea'}, url: 'https://well-2003.github.io/Singra_Finance/', icon: 'ri-external-link-line', solid: true},
      {label: {pt: 'Repositório', en: 'Repository', es: 'Repositorio'}, url: 'https://github.com/Well-2003/Singra_Finance', icon: 'ri-github-line'}
    ]
  },

  {
    id: 'simpstock',
    logo: 'https://raw.githubusercontent.com/Well-2003/SimpStock_2.0/main/src/imagens/logo%20simpstock.png',
    cats: ['web', 'backend'],
    title: 'SimpStock', color: '#0077B6', text: '#FFFFFF',
    kind: {
      pt: 'Controle de estoque',
      en: 'Inventory control',
      es: 'Control de inventario'
    },
    fields: [
      {
        label: {pt: 'O problema', en: 'The problem', es: 'El problema'},
        text: {
          pt: 'Pequenos lojistas controlam estoque em caderno e planilha porque os sistemas disponíveis foram feitos para operadores treinados: telas densas, menus profundos, dezenas de campos obrigatórios. Quem trabalha sozinho na loja não tem uma semana para aprender uma ferramenta. O resultado é produto que acaba sem ninguém perceber, mercadoria vencida na prateleira e contagem que nunca bate.',
          en: "Small shop owners track stock in notebooks and spreadsheets because the available systems were made for trained operators: dense screens, deep menus, dozens of required fields. Someone working alone in the shop doesn't have a week to learn a tool. The result is products running out without anyone noticing, expired goods on the shelf and counts that never add up.",
          es: 'Los pequeños comerciantes controlan el inventario en cuadernos y hojas de cálculo porque los sistemas disponibles fueron hechos para operadores capacitados: pantallas densas, menús profundos, decenas de campos obligatorios. Quien trabaja solo en la tienda no tiene una semana para aprender una herramienta. El resultado es producto que se agota sin que nadie lo note, mercancía vencida en el estante y conteos que nunca cuadran.'
        }
      },
      {
        label: {pt: 'A solução', en: 'The solution', es: 'La solución'},
        text: {
          pt: 'Um sistema de controle de estoque simples de manusear, que reúne só o que importa sobre o inventário. Critério de sucesso: se o lojista precisa de treinamento para cadastrar um produto, o sistema falhou.',
          en: 'An inventory control system that is simple to use and brings together only what matters about the stock. Success criterion: if the shop owner needs training to register a product, the system failed.',
          es: 'Un sistema de control de inventario fácil de manejar, que reúne solo lo que importa sobre el inventario. Criterio de éxito: si el comerciante necesita capacitación para registrar un producto, el sistema falló.'
        }
      },
      {
        label: {pt: 'O que entrega', en: 'What it delivers', es: 'Lo que ofrece'},
        list: {
          pt: [
            'Cadastro de produtos com nome, marca, validade, código, quantidade, referência e localização.',
            'Listagem com ordenação por qualquer coluna, busca, filtros por situação e edição ou exclusão em massa.',
            'Painel com total de produtos, itens sem estoque, estoque baixo e itens vencidos ou próximos do vencimento.',
            'Cadastro e login com validação de senha em tempo real, hash, sessão por token assinado e painel administrativo.',
            'Site institucional com central de ajuda, perguntas frequentes e boas práticas de controle de estoque.'
          ],
          en: [
            'Product registration with name, brand, expiry date, code, quantity, reference and location.',
            'A listing sortable by any column, with search, status filters and bulk editing or deletion.',
            'A dashboard with total products, out-of-stock items, low stock and items expired or close to expiring.',
            'Sign-up and login with real-time password validation, hashing, signed-token sessions and an admin panel.',
            'An institutional site with a help center, FAQ and inventory control best practices.'
          ],
          es: [
            'Registro de productos con nombre, marca, fecha de vencimiento, código, cantidad, referencia y ubicación.',
            'Listado con ordenación por cualquier columna, búsqueda, filtros por estado y edición o eliminación masiva.',
            'Panel con total de productos, artículos sin stock, stock bajo y artículos vencidos o próximos a vencer.',
            'Registro e inicio de sesión con validación de contraseña en tiempo real, hash, sesión por token firmado y panel administrativo.',
            'Sitio institucional con centro de ayuda, preguntas frecuentes y buenas prácticas de control de inventario.'
          ]
        }
      },
      {
        label: {pt: 'Nota', en: 'Note', es: 'Nota'},
        text: {
          pt: 'Projeto de estudo: a história, a equipe e os números da página “Sobre nós” são fictícios.',
          en: 'Study project: the story, the team and the numbers on the “About us” page are fictional.',
          es: 'Proyecto de estudio: la historia, el equipo y los números de la página “Sobre nosotros” son ficticios.'
        }
      }
    ],
    stack: ['Python', 'Flask', 'HTML5', 'CSS3', 'JavaScript'],
    links: [
      {label: {pt: 'Ver online', en: 'Live site', es: 'Ver en línea'}, url: 'https://simpstock.pythonanywhere.com/', icon: 'ri-external-link-line', solid: true},
      {label: {pt: 'Repositório', en: 'Repository', es: 'Repositorio'}, url: 'https://github.com/Well-2003/SimpStock_2.0', icon: 'ri-github-line'}
    ]
  },

  {
    id: 'cirius',
    icon: 'ri-terminal-box-line',
    cats: ['backend'],
    title: 'Cirius', color: '#E3B65C', text: '#14120F',
    kind: {
      pt: 'Compilador',
      en: 'Compiler',
      es: 'Compilador'
    },
    fields: [
      {
        label: {pt: 'O desafio', en: 'The challenge', es: 'El desafío'},
        text: {
          pt: 'Projeto final da disciplina de Projeto e Implementação de Compiladores, na UNASP: criar uma linguagem e percorrer o caminho inteiro até a execução, sem pular etapa. Cirius é uma linguagem imperativa de propósito geral, com sintaxe inspirada em C e tipagem implícita. O nome combina C com Sirius.',
          en: 'Final project for the Compiler Design and Implementation course at UNASP: create a language and go all the way to execution, without skipping a step. Cirius is a general-purpose imperative language with C-inspired syntax and implicit typing. The name blends C with Sirius.',
          es: 'Proyecto final de la asignatura de Diseño e Implementación de Compiladores, en la UNASP: crear un lenguaje y recorrer todo el camino hasta la ejecución, sin saltarse etapas. Cirius es un lenguaje imperativo de propósito general, con sintaxis inspirada en C y tipado implícito. El nombre combina C con Sirius.'
        }
      },
      {
        label: {pt: 'O que foi construído', en: 'What was built', es: 'Lo que se construyó'},
        text: {
          pt: 'O pipeline completo em Python puro, sem dependências externas: análise léxica, sintática e semântica, geração de código intermediário, otimização e transpilação para C. E também um interpretador, que executa os programas direto.',
          en: 'The full pipeline in pure Python, with no external dependencies: lexical, syntactic and semantic analysis, intermediate code generation, optimization and transpilation to C. Plus an interpreter that runs programs directly.',
          es: 'El pipeline completo en Python puro, sin dependencias externas: análisis léxico, sintáctico y semántico, generación de código intermedio, optimización y transpilación a C. Y también un intérprete, que ejecuta los programas directamente.'
        }
      },
      {
        label: {pt: 'A linguagem tem', en: 'The language has', es: 'El lenguaje tiene'},
        list: {
          pt: [
            'Tipos inteiro, ponto flutuante, texto e booleano, inferidos pelo uso.',
            'if / elif / else, while, for sobre intervalos, break e continue.',
            'Funções com parâmetros, retorno, recursão e chamada de função declarada mais adiante no arquivo.',
            'Operadores aritméticos, relacionais, lógicos e bit a bit, mais atribuições compostas.',
            'Semântica documentada nos detalhes: divisão inteira trunca em direção a zero, resto leva o sinal do dividendo, and e or avaliam o lado direito só quando ele muda o resultado.',
            'Gramática completa publicada em EBNF junto com o código.'
          ],
          en: [
            'Integer, floating-point, string and boolean types, inferred from usage.',
            'if / elif / else, while, for over ranges, break and continue.',
            'Functions with parameters, return values, recursion and calls to functions declared later in the file.',
            'Arithmetic, relational, logical and bitwise operators, plus compound assignments.',
            'Semantics documented down to the details: integer division truncates toward zero, the remainder takes the sign of the dividend, and and or evaluate the right side only when it changes the result.',
            'Full grammar published in EBNF alongside the code.'
          ],
          es: [
            'Tipos entero, punto flotante, texto y booleano, inferidos por el uso.',
            'if / elif / else, while, for sobre intervalos, break y continue.',
            'Funciones con parámetros, retorno, recursión y llamada a funciones declaradas más adelante en el archivo.',
            'Operadores aritméticos, relacionales, lógicos y bit a bit, además de asignaciones compuestas.',
            'Semántica documentada en detalle: la división entera trunca hacia cero, el resto lleva el signo del dividendo, and y or evalúan el lado derecho solo cuando cambia el resultado.',
            'Gramática completa publicada en EBNF junto con el código.'
          ]
        }
      }
    ],
    stack: ['Python 3.8+', 'EBNF', {pt: 'Transpilação para C', en: 'Transpiling to C', es: 'Transpilación a C'}],
    links: [
      {label: {pt: 'Repositório', en: 'Repository', es: 'Repositorio'}, url: 'https://github.com/Well-2003/Compilador_Cirius', icon: 'ri-github-line', solid: true}
    ]
  },

  {
    id: 'sabedoria',
    icon: 'ri-dice-line',
    cats: ['jogo', 'web'],
    title: 'Desafio da Sabedoria', color: '#A78BFA', text: '#14120F',
    kind: {
      pt: 'Jogo de tabuleiro no navegador',
      en: 'Browser board game',
      es: 'Juego de mesa en el navegador'
    },
    fields: [
      {
        label: {pt: 'A ideia', en: 'The idea', es: 'La idea'},
        text: {
          pt: 'O projeto nasceu de uma história de usuário: como jogador, quero competir com outras pessoas respondendo perguntas de conhecimentos gerais e avançando no tabuleiro até a última casa. Tudo foi desenvolvido a partir de critérios de aceitação escritos antes do código.',
          en: 'The project was born from a user story: as a player, I want to compete with other people by answering general knowledge questions and moving across the board to the last square. Everything was built from acceptance criteria written before the code.',
          es: 'El proyecto nació de una historia de usuario: como jugador, quiero competir con otras personas respondiendo preguntas de cultura general y avanzando en el tablero hasta la última casilla. Todo se desarrolló a partir de criterios de aceptación escritos antes del código.'
        }
      },
      {
        label: {pt: 'Como funciona', en: 'How it works', es: 'Cómo funciona'},
        text: {
          pt: 'Até quatro jogadores, um tabuleiro de 50 casas e uma roleta de 1 a 8. A cada rodada o jogador gira a roleta e precisa acertar uma pergunta sorteada para andar. Errou, volta o mesmo número de casas que tirou.',
          en: 'Up to four players, a 50-square board and a spinner from 1 to 8. Each round, the player spins and must answer a random question correctly to move. Get it wrong and you move back the same number of squares you rolled.',
          es: 'Hasta cuatro jugadores, un tablero de 50 casillas y una ruleta del 1 al 8. En cada ronda el jugador gira la ruleta y debe acertar una pregunta sorteada para avanzar. Si falla, retrocede el mismo número de casillas que sacó.'
        }
      },
      {
        label: {pt: 'As regras que dão graça ao jogo', en: 'The rules that make it fun', es: 'Las reglas que le dan gracia al juego'},
        list: {
          pt: [
            'Quatro níveis de dificuldade: verde fácil, amarelo médio, vermelho difícil e roxo especial.',
            'Trinta perguntas diferentes em cada nível, com quatro alternativas e só uma correta.',
            'A dificuldade da pergunta é sorteada independentemente do resultado da roleta.',
            'Acertar uma pergunta roxa faz o jogador andar o dobro das casas sorteadas.'
          ],
          en: [
            'Four difficulty levels: green easy, yellow medium, red hard and purple special.',
            'Thirty different questions at each level, with four options and only one correct.',
            "The question's difficulty is drawn independently of the spinner result.",
            'Answering a purple question correctly moves the player twice the number of squares rolled.'
          ],
          es: [
            'Cuatro niveles de dificultad: verde fácil, amarillo medio, rojo difícil y morado especial.',
            'Treinta preguntas diferentes en cada nivel, con cuatro alternativas y solo una correcta.',
            'La dificultad de la pregunta se sortea independientemente del resultado de la ruleta.',
            'Acertar una pregunta morada hace que el jugador avance el doble de casillas sorteadas.'
          ]
        }
      }
    ],
    stack: ['JavaScript', 'HTML5', 'CSS3', 'Game design'],
    links: [
      {label: {pt: 'Jogar agora', en: 'Play now', es: 'Jugar ahora'}, url: 'https://well-2003.github.io/Projeto_Desafio-da-Sabedoria/', icon: 'ri-play-circle-line', solid: true},
      {label: {pt: 'Repositório', en: 'Repository', es: 'Repositorio'}, url: 'https://github.com/Well-2003/Projeto_Desafio-da-Sabedoria', icon: 'ri-github-line'}
    ]
  },

  {
    id: 'ronin',
    logo: 'assets/images/projects/crimson-ronin-icon.png',
    logoFill: true, // icone redondo que ocupa o quadrado inteiro, sem fundo branco
    cats: ['jogo'],
    title: 'Crimson Ronin', color: '#B4332F', text: '#FFFFFF',
    image: 'https://img.itch.zone/aW1nLzI2MDYxMzgwLnBuZw==/original/mZSQst.png',
    kind: 'Metroidvania · Godot', // igual nos tres idiomas
    fields: [
      {
        label: {pt: 'O jogo', en: 'The game', es: 'El juego'},
        text: {
          pt: 'Jogo de ação 2D em pixel art, publicado na itch.io. O combate é o centro de tudo: cada inimigo tem comportamento próprio, e o jogador coleta espólios ao longo do caminho.',
          en: 'A 2D pixel art action game published on itch.io. Combat is at the center of everything: each enemy has its own behavior, and the player collects loot along the way.',
          es: 'Juego de acción 2D en pixel art, publicado en itch.io. El combate es el centro de todo: cada enemigo tiene comportamiento propio, y el jugador recoge botín a lo largo del camino.'
        }
      },
      {
        label: {pt: 'O trabalho técnico', en: 'The technical work', es: 'El trabajo técnico'},
        text: {
          pt: 'Lógica exclusiva para cada inimigo em vez de um único comportamento reaproveitado, máquinas de estado para as entidades, sistema de combate, sistema de espólios e controle preciso das animações de todas as entidades.',
          en: 'Unique logic for each enemy instead of a single reused behavior, state machines for the entities, a combat system, a loot system and precise animation control for every entity.',
          es: 'Lógica exclusiva para cada enemigo en lugar de un único comportamiento reutilizado, máquinas de estados para las entidades, sistema de combate, sistema de botín y control preciso de las animaciones de todas las entidades.'
        }
      }
    ],
    stack: ['Godot Engine', 'GDScript', 'Pixel art'],
    links: [
      {label: {pt: 'Jogar na itch.io', en: 'Play on itch.io', es: 'Jugar en itch.io'}, url: 'https://wel-2003.itch.io/crimson-ronin', icon: 'ri-gamepad-line', solid: true}
    ]
  },

  {
    id: 'knight',
    logo: 'assets/images/projects/knight-icon.png',
    cats: ['jogo'],
    title: 'Knight Game Pixel2D', color: '#3E6B8A', text: '#FFFFFF',
    image: 'https://img.itch.zone/aW1nLzI1NDM5MzI3LnBuZw==/original/akKVQS.png',
    imageMax: '420px', // essa imagem e so o logotipo escrito, entao fica menor que as capturas de jogo
    kind: {pt: 'Plataforma 2D · Godot', en: '2D platformer · Godot', es: 'Plataformas 2D · Godot'},
    fields: [
      {
        label: {pt: 'O jogo', en: 'The game', es: 'El juego'},
        text: {
          pt: 'Jogo de plataforma 2D em pixel art com mecânicas de combate clássicas, publicado na itch.io.',
          en: 'A 2D pixel art platformer with classic combat mechanics, published on itch.io.',
          es: 'Juego de plataformas 2D en pixel art con mecánicas de combate clásicas, publicado en itch.io.'
        }
      },
      {
        label: {pt: 'O foco', en: 'The focus', es: 'El enfoque'},
        text: {
          pt: 'Controles responsivos. Em jogo de plataforma, a diferença entre travado e gostoso de jogar está no tempo de resposta do pulo e do golpe, então foi aí que fui mexer.',
          en: "Responsive controls. In a platformer, the difference between clunky and fun to play lies in how fast the jump and the attack respond, so that's where I focused.",
          es: 'Controles responsivos. En un juego de plataformas, la diferencia entre torpe y agradable de jugar está en el tiempo de respuesta del salto y del golpe, así que ahí fue donde trabajé.'
        }
      }
    ],
    stack: ['Godot Engine', 'GDScript', 'Pixel art'],
    links: [
      {label: {pt: 'Jogar na itch.io', en: 'Play on itch.io', es: 'Jugar en itch.io'}, url: 'https://wel-2003.itch.io/knight-game-pixel-2d', icon: 'ri-gamepad-line', solid: true}
    ]
  }
];

/* Habilidades com o caminho do icone no devicon. dark marca os icones pretos,
   que precisam ser invertidos no tema escuro. */
const SKILLS = [
  {title: {pt: 'Engine', en: 'Engine', es: 'Motor'}, icon: 'ri-gamepad-line', items: [
    {n: 'Godot Engine', i: 'godot/godot-original'}
  ]},
  {title: 'Backend', icon: 'ri-server-line', items: [
    {n: 'Python', i: 'python/python-original'},
    {n: 'MySQL', i: 'mysql/mysql-original'}
  ]},
  {title: 'Front-end', icon: 'ri-window-line', items: [
    {n: 'HTML5', i: 'html5/html5-original'},
    {n: 'CSS3', i: 'css3/css3-original'},
    {n: 'JavaScript', i: 'javascript/javascript-original'}
  ]},
  {title: {pt: 'Ferramentas', en: 'Tools', es: 'Herramientas'}, icon: 'ri-tools-line', items: [
    {n: 'GitHub', i: 'github/github-original', dark: true},
    {n: 'Figma', i: 'figma/figma-original'},
    {n: 'Canva', i: 'canva/canva-original'},
    {n: 'WordPress', i: 'wordpress/wordpress-plain'}
  ]}
];

/* Curriculos em PDF da propria pasta do site. Troque o numero do ?v= sempre que
   trocar um PDF, senao quem ja abriu o curriculo continua recebendo a copia antiga. */
const CV = {
  pt: {url: 'assets/cv/curriculo-wesley-silva-pt.pdf?v=20260912-7', file: 'Curriculo-Wesley-Silva-PT.pdf'},
  en: {url: 'assets/cv/resume-wesley-silva-en.pdf?v=20260912-7', file: 'Resume-Wesley-Silva-EN.pdf'}
};
