/* Dados do site. Para adicionar ou editar um projeto, habilidade ou curriculo, mexa so aqui,
   o projects.js le estas listas e monta o HTML sozinho. Textos que mudam com o idioma
   ficam com as versoes pt, en e es, e nomes iguais em todo idioma podem ser texto simples. */

/* Projetos com cor e conteudo tirados de cada repositorio. color e a cor do projeto,
   text e a cor do texto em cima dela e cats sao os filtros onde o projeto aparece. */
const PROJECTS = [
  {
    id: 'singra',
    images: [
      {src: 'assets/images/projects/singra/inicio.jpg', cap: {pt: 'A página inicial', en: 'The landing page', es: 'La página de inicio'}},
      {src: 'assets/images/projects/singra/painel.jpg', cap: {pt: 'O painel, depois de entrar', en: 'The dashboard, after signing in', es: 'El panel, después de entrar'}},
      {src: 'assets/images/projects/singra/graficos.jpg', cap: {pt: 'Onde o dinheiro foi', en: 'Where the money went', es: 'Adónde se fue el dinero'}}
    ],
    logo: 'assets/images/projects/singra/logo.svg',
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
            'O mês é o da pessoa, não o do calendário: quem recebe no dia 5 configura o dia 5 e todos os cálculos seguem esse ciclo. O dia escolhido vai até 28, senão o mês não existiria em fevereiro.',
            'Painel que abre com um número grande, em vez de uma lista de lançamentos.',
            'Todo dinheiro é decimal exato, no código e no banco. Com número de ponto flutuante, 0,1 mais 0,2 não dá 0,3, e o centavo que sobra vira erro no total de quem confiou no app.',
            'Uma compra parcelada vira um lançamento por mês, e o resto da divisão fica na última parcela. Sem isso, 100 em 3 vezes seria 33,33 três vezes e um centavo sumiria.',
            'Planejamento por categoria com sugestão automática pela regra 50/30/20 e cópia do mês anterior.',
            'Metas com círculo de progresso, meta especial de investimento e calendário de contas projetado meses à frente.',
            'Sete gráficos, cada um com título em forma de pergunta e uma frase respondendo o que ele mostra.',
            'Senhas com hash bcrypt, sessão por token assinado e recuperação por link com validade.',
            'Tradução em português, inglês e espanhol, e exportação de tudo em CSV.'
          ],
          en: [
            'Logging in three taps: amount, category, confirm. A custom number pad that builds R$ 45,90 as the person types 4590.',
            "The month is the person's, not the calendar's: whoever gets paid on the 5th sets the 5th, and every calculation follows that cycle. The chosen day goes up to 28, otherwise the month would not exist in February.",
            'A dashboard that opens with one big number instead of a list of transactions.',
            'Every amount is an exact decimal, in the code and in the database. With floating point, 0.1 plus 0.2 is not 0.3, and the leftover cent becomes an error in the total of someone who trusted the app.',
            'A purchase in instalments becomes one entry per month, and the remainder of the division goes into the last one. Without that, 100 in 3 would be 33.33 three times and a cent would vanish.',
            'Per-category planning with automatic suggestions based on the 50/30/20 rule and copying from the previous month.',
            'Goals with a progress ring, a special investment goal and a bills calendar projected months ahead.',
            'Seven charts, each with a title phrased as a question and a sentence answering what it shows.',
            'Passwords hashed with bcrypt, sessions via signed tokens and recovery through a time-limited link.',
            'Translation into Portuguese, English and Spanish, and export of everything to CSV.'
          ],
          es: [
            'Registro en tres toques: valor, categoría, confirmar. Un teclado numérico propio que forma R$ 45,90 mientras la persona escribe 4590.',
            'El mes es el de la persona, no el del calendario: quien cobra el día 5 configura el día 5 y todos los cálculos siguen ese ciclo. El día elegido llega hasta el 28, si no el mes no existiría en febrero.',
            'Un panel que abre con un número grande, en lugar de una lista de movimientos.',
            'Todo el dinero es decimal exacto, en el código y en la base. Con punto flotante, 0,1 más 0,2 no da 0,3, y el centavo que sobra se vuelve error en el total de quien confió en la app.',
            'Una compra en cuotas se vuelve un registro por mes, y el resto de la división queda en la última cuota. Sin eso, 100 en 3 sería 33,33 tres veces y un centavo desaparecería.',
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
    images: [
      {src: 'assets/images/projects/simpstock/inicio.jpg', cap: {pt: 'A página inicial', en: 'The landing page', es: 'La página de inicio'}},
      {src: 'assets/images/projects/simpstock/painel.jpg', cap: {pt: 'O painel, depois de entrar', en: 'The dashboard, after signing in', es: 'El panel, después de entrar'}},
      {src: 'assets/images/projects/simpstock/estoque.jpg', cap: {pt: 'A lista de estoque', en: 'The stock list', es: 'La lista de inventario'}}
    ],
    logo: 'assets/images/projects/simpstock/logo.png',
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
        label: {pt: 'Decisões que sustentam isso', en: 'Decisions that back it up', es: 'Decisiones que lo sostienen'},
        list: {
          pt: [
            'Cadastro só com o que um lojista realmente anota: nome, marca, validade, código, quantidade, referência e localização.',
            'Painel que abre mostrando o que pede atenção: total de produtos, itens sem estoque, estoque baixo e vencidos ou perto de vencer.',
            'Lista com ordenação por qualquer coluna, busca e filtros por situação, e edição ou exclusão de vários produtos de uma vez.',
            'Cadastro e login com validação de senha em tempo real, hash, sessão por token assinado e painel administrativo.',
            'Central de ajuda, perguntas frequentes e boas práticas de estoque dentro do próprio site, para ninguém precisar de treinamento.'
          ],
          en: [
            'Registration with only what a shop owner actually writes down: name, brand, expiry date, code, quantity, reference and location.',
            'A dashboard that opens with what needs attention: total products, out-of-stock items, low stock and items expired or close to expiring.',
            'A list sortable by any column, with search and status filters, and editing or deleting several products at once.',
            'Sign-up and login with real-time password validation, hashing, signed-token sessions and an admin panel.',
            'A help center, FAQ and stock best practices inside the site itself, so nobody needs training.'
          ],
          es: [
            'Registro solo con lo que un comerciante realmente anota: nombre, marca, fecha de vencimiento, código, cantidad, referencia y ubicación.',
            'Un panel que abre mostrando lo que requiere atención: total de productos, artículos sin stock, stock bajo y vencidos o próximos a vencer.',
            'Lista con ordenación por cualquier columna, búsqueda y filtros por estado, y edición o eliminación de varios productos a la vez.',
            'Registro e inicio de sesión con validación de contraseña en tiempo real, hash, sesión por token firmado y panel administrativo.',
            'Centro de ayuda, preguntas frecuentes y buenas prácticas de inventario dentro del propio sitio, para que nadie necesite capacitación.'
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
      },
      {
        label: {pt: 'A linguagem, e o C que ela vira', en: 'The language, and the C it becomes', es: 'El lenguaje, y el C en que se convierte'},
        // Exemplo real: sai do tests/funcoes.cir do repositorio e passa pelo compilador de verdade
        code: {
          left: {name: 'fatorial.cir', body: `func fatorial(n) {
    if n <= 1 {
        return 1;
    }
    return n * fatorial(n - 1);
}`},
          right: {name: 'fatorial.c', body: `long fatorial(long n) {
    long t1 = 0, t2 = 0, t3 = 0, t4 = 0;

    t1 = (n <= 1);
    if (!((t1) != 0)) goto END_IF1;
    return 1;
END_IF1:;
    t3 = n - 1;
    t2 = fatorial(t3);
    t4 = n * t2;
    return t4;
}`}
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
    images: [
      {src: 'assets/images/projects/desafio_da_sabedoria/tabuleiro.png', cap: {pt: 'O tabuleiro em partida', en: 'The board mid-game', es: 'El tablero en partida'}},
      {src: 'assets/images/projects/desafio_da_sabedoria/roleta.png', cap: {pt: 'A roleta de 1 a 8', en: 'The 1-to-8 spinner', es: 'La ruleta del 1 al 8'}},
      {src: 'assets/images/projects/desafio_da_sabedoria/pergunta.png', cap: {pt: 'A pergunta sorteada', en: 'The drawn question', es: 'La pregunta sorteada'}}
    ],
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
    logo: 'assets/images/projects/crimson_ronin/icone.png',
    logoFill: true, // icone redondo que ocupa o quadrado inteiro, sem fundo branco
    cats: ['jogo'],
    title: 'Crimson Ronin', color: '#B4332F', text: '#FFFFFF',
    images: [
      {src: 'assets/images/projects/crimson_ronin/capa.png', cap: {pt: 'A capa do jogo na itch.io', en: 'The game cover on itch.io', es: 'La portada del juego en itch.io'}},
      {src: 'assets/images/projects/crimson_ronin/chefe-demonio.png', cap: {pt: 'O chefe demônio', en: 'The demon boss', es: 'El jefe demonio'}},
      {src: 'assets/images/projects/crimson_ronin/floresta-torii.png', cap: {pt: 'A floresta e os torii', en: 'The forest and the torii gates', es: 'El bosque y los torii'}},
      {src: 'assets/images/projects/crimson_ronin/kage-demon-samurai.png', cap: {pt: 'Luta contra o Kage Demon Samurai', en: 'Fighting the Kage Demon Samurai', es: 'Lucha contra el Kage Demon Samurai'}}
    ],
    kind: 'Metroidvania · Godot', // igual nos tres idiomas
    fields: [
      {
        label: {pt: 'Do que se trata', en: 'What it is about', es: 'De qué se trata'},
        wide: true,
        text: {
          pt: 'Crimson Ronin: Pixel Gaiden é um jogo de ação 2D em pixel art ambientado num Japão feudal sombrio, tomado por demônios. Você assume um ronin de armadura vermelha e atravessa florestas de outono, portões torii e plataformas suspensas com a espada em punho, abrindo caminho entre os inimigos até chegar aos chefes que guardam cada trecho.',
          en: 'Crimson Ronin: Pixel Gaiden is a 2D pixel art action game set in a dark feudal Japan overrun by demons. You play a red-armored ronin crossing autumn forests, torii gates and floating platforms with your sword drawn, cutting a path through enemies until you reach the bosses guarding each stretch.',
          es: 'Crimson Ronin: Pixel Gaiden es un juego de acción 2D en pixel art ambientado en un Japón feudal oscuro, tomado por demonios. Controlas a un ronin de armadura roja que atraviesa bosques de otoño, puertas torii y plataformas suspendidas con la espada en mano, abriéndose paso entre los enemigos hasta llegar a los jefes que custodian cada tramo.'
        }
      },
      {
        label: {pt: 'O que esperar', en: 'What to expect', es: 'Qué esperar'},
        list: {
          pt: [
            'Combate de espada em que cada inimigo tem um jeito próprio de lutar, então vale observar antes de avançar.',
            'Chefes como o Kage Demon Samurai, com barra de vida própria e lutas que pedem atenção do começo ao fim.',
            'Espólios espalhados pelo caminho para recolher enquanto você explora.',
            'Vida e energia sempre à vista, e uma pontuação que se acumula ao longo da partida.',
            'Animações caprichadas em todos os personagens, do golpe à queda.',
            'Joga direto no navegador, pela itch.io, sem instalar nada.'
          ],
          en: [
            'Sword combat where every enemy has its own way of fighting, so it pays to watch before you push forward.',
            'Bosses like the Kage Demon Samurai, with their own health bar and fights that demand attention from start to finish.',
            'Loot scattered along the way to collect as you explore.',
            'Health and energy always in view, and a score that builds up throughout the run.',
            'Carefully crafted animations on every character, from the strike to the fall.',
            'Plays right in the browser on itch.io, nothing to install.'
          ],
          es: [
            'Combate con espada en el que cada enemigo tiene su propia forma de pelear, así que vale la pena observar antes de avanzar.',
            'Jefes como el Kage Demon Samurai, con su propia barra de vida y peleas que exigen atención de principio a fin.',
            'Botín repartido por el camino para recoger mientras exploras.',
            'Vida y energía siempre a la vista, y una puntuación que se acumula a lo largo de la partida.',
            'Animaciones cuidadas en todos los personajes, del golpe a la caída.',
            'Se juega directo en el navegador, en itch.io, sin instalar nada.'
          ]
        }
      }
    ],
    stack: ['Godot Engine', 'GDScript', 'Pixel art'],
    links: [
      {label: {pt: 'Jogar na itch.io', en: 'Play on itch.io', es: 'Jugar en itch.io'}, url: 'https://wel-2003.itch.io/crimson-ronin', icon: 'ri-gamepad-line', solid: true},
      {label: {pt: 'Repositório', en: 'Repository', es: 'Repositorio'}, url: 'https://github.com/Well-2003/Crimson-Ronin', icon: 'ri-github-line'}
    ]
  },

  {
    id: 'knight',
    logo: 'assets/images/projects/knight/icone.png',
    cats: ['jogo'],
    title: 'Knight Game Pixel2D', color: '#3E6B8A', text: '#FFFFFF',
    images: [
      {src: 'assets/images/projects/knight/capa.png', cap: {pt: 'O logotipo do jogo', en: 'The game logo', es: 'El logotipo del juego'}},
      {src: 'assets/images/projects/knight/cemiterio-luar.png', cap: {pt: 'O cemitério ao luar', en: 'The graveyard by moonlight', es: 'El cementerio a la luz de la luna'}},
      {src: 'assets/images/projects/knight/estatuas.png', cap: {pt: 'As estátuas na entrada do cemitério', en: 'The statues at the graveyard entrance', es: 'Las estatuas en la entrada del cementerio'}},
      {src: 'assets/images/projects/knight/esqueletos.png', cap: {pt: 'Os esqueletos do segundo trecho', en: 'The skeletons of the second stretch', es: 'Los esqueletos del segundo tramo'}}
    ],
    kind: {pt: 'Plataforma 2D · Godot', en: '2D platformer · Godot', es: 'Plataformas 2D · Godot'},
    fields: [
      {
        label: {pt: 'Do que se trata', en: 'What it is about', es: 'De qué se trata'},
        wide: true,
        text: {
          pt: 'Knight é um jogo de plataforma 2D em pixel art em que um pequeno cavaleiro atravessa um cemitério gótico à luz da lua. Entre lápides, estátuas encapuzadas e mausoléus, ele pula de plataforma em plataforma e enfrenta os esqueletos que guardam o lugar, tentando ir o mais longe possível sem perder todas as vidas.',
          en: 'Knight is a 2D pixel art platformer where a small knight crosses a gothic graveyard by moonlight. Among tombstones, hooded statues and mausoleums, he leaps from platform to platform and faces the skeletons guarding the place, trying to get as far as he can without losing every life.',
          es: 'Knight es un juego de plataformas 2D en pixel art en el que un pequeño caballero atraviesa un cementerio gótico a la luz de la luna. Entre lápidas, estatuas encapuchadas y mausoleos, salta de plataforma en plataforma y enfrenta a los esqueletos que custodian el lugar, intentando llegar lo más lejos posible sin perder todas sus vidas.'
        }
      },
      {
        label: {pt: 'O que esperar', en: 'What to expect', es: 'Qué esperar'},
        list: {
          pt: [
            'Controles rápidos e precisos: o pulo e o golpe respondem na hora, do jeito que um bom jogo de plataforma pede.',
            'Esqueletos espalhados pelas plataformas e combate corpo a corpo clássico.',
            'Cenário noturno cheio de detalhe, com lua cheia, estátuas e casarões ao fundo.',
            'Vidas contadas, pontos para juntar e um recorde para tentar bater a cada partida.',
            'Joga direto no navegador, pela itch.io, sem instalar nada.'
          ],
          en: [
            'Fast, precise controls: the jump and the attack respond instantly, the way a good platformer should.',
            'Skeletons scattered across the platforms and classic melee combat.',
            'A detailed night setting, with a full moon, statues and old houses in the background.',
            'Limited lives, points to collect and a record to beat on every run.',
            'Plays right in the browser on itch.io, nothing to install.'
          ],
          es: [
            'Controles rápidos y precisos: el salto y el golpe responden al instante, como pide un buen juego de plataformas.',
            'Esqueletos repartidos por las plataformas y combate cuerpo a cuerpo clásico.',
            'Un escenario nocturno lleno de detalle, con luna llena, estatuas y casonas al fondo.',
            'Vidas contadas, puntos para juntar y un récord que superar en cada partida.',
            'Se juega directo en el navegador, en itch.io, sin instalar nada.'
          ]
        }
      }
    ],
    stack: ['Godot Engine', 'GDScript', 'Pixel art'],
    links: [
      {label: {pt: 'Jogar na itch.io', en: 'Play on itch.io', es: 'Jugar en itch.io'}, url: 'https://wel-2003.itch.io/knight-game-pixel-2d', icon: 'ri-gamepad-line', solid: true},
      {label: {pt: 'Repositório', en: 'Repository', es: 'Repositorio'}, url: 'https://github.com/Well-2003/Knight_Pixel2D_game', icon: 'ri-github-line'}
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
  pt: {url: 'assets/cv/curriculo-wesley-silva-pt.pdf?v=20261002-1', file: 'Curriculo-Wesley-Silva-PT.pdf'},
  en: {url: 'assets/cv/resume-wesley-silva-en.pdf?v=20261002-1', file: 'Resume-Wesley-Silva-EN.pdf'}
};

/* Projetos que ainda estao sendo construidos, mostrados na secao "Em andamento".
   Sao paineis que abrem e fecham igual aos casos, entao reaproveitam as classes case__*.
   O texto aqui descreve o jogo e o que esperar dele, nao o que ja foi codado: quem le e
   visitante do portfolio, nao revisor do repositorio. Conteudo tirado do GDD de cada um.
   live liga o ponto que pisca no selo e locked marca o repositorio que ainda esta privado. */
const WIP = [
  {
    id: 'shadows',
    logo: 'assets/images/projects/shadows_of_the_crypt/icone.jpg',
    logoFill: true, // arte do icone com fundo escuro proprio, ocupa o quadrado inteiro
    images: [
      {src: 'assets/images/projects/shadows_of_the_crypt/herois.jpg', cap: {pt: 'Os heróis e as armas, do pacote Adventurers da KayKit', en: 'The heroes and weapons, from the KayKit Adventurers pack', es: 'Los héroes y las armas, del paquete Adventurers de KayKit'}},
      {src: 'assets/images/projects/shadows_of_the_crypt/esqueletos.jpg', cap: {pt: 'Os esqueletos inimigos, do pacote Skeletons da KayKit', en: 'The enemy skeletons, from the KayKit Skeletons pack', es: 'Los esqueletos enemigos, del paquete Skeletons de KayKit'}},
      {src: 'assets/images/projects/shadows_of_the_crypt/masmorra.jpg', cap: {pt: 'A masmorra, com o Dungeon Asset Pack da KayKit', en: 'The dungeon, built with the KayKit Dungeon Asset Pack', es: 'La mazmorra, con el Dungeon Asset Pack de KayKit'}},
      {src: 'assets/images/projects/shadows_of_the_crypt/pecas.jpg', cap: {pt: 'As peças de cenário do mesmo pacote', en: 'The set pieces from the same pack', es: 'Las piezas de escenario del mismo paquete'}}
    ],
    title: 'Shadows of the Crypt', color: '#5B4B8A', text: '#FFFFFF',
    kind: {
      pt: 'Action/RPG de masmorra · Godot',
      en: 'Dungeon-crawling action RPG · Godot',
      es: 'Action/RPG de mazmorra · Godot'
    },
    live: true, // ponto piscando: e o projeto que recebe commit toda semana
    status: {pt: 'Em desenvolvimento', en: 'In development', es: 'En desarrollo'},
    summary: {
      pt: 'Shadows of the Crypt é um Action/RPG de masmorra em fantasia medieval. Escolha um entre cinco heróis, desça por uma cripta de quatro níveis infestada de esqueletos e chegue até o chefe final, montando o seu personagem a cada andar. Lute em primeira pessoa ou por cima do ombro e troque de visão quando quiser.',
      en: 'Shadows of the Crypt is a dungeon-crawling action RPG in medieval fantasy. Pick one of five heroes, descend through a four-level crypt overrun by skeletons and reach the final boss, building your character on every floor. Fight in first person or over the shoulder and switch views whenever you like.',
      es: 'Shadows of the Crypt es un Action/RPG de mazmorra en fantasía medieval. Elige uno de cinco héroes, desciende por una cripta de cuatro niveles infestada de esqueletos y llega hasta el jefe final, armando tu personaje en cada piso. Pelea en primera persona o por encima del hombro y cambia de vista cuando quieras.'
    },
    fields: [
      {
        label: {pt: 'Como se joga', en: 'How it plays', es: 'Cómo se juega'},
        text: {
          pt: 'Cada descida é um ciclo de luta e recompensa: derrote inimigos, abra baús, junte XP e moedas, suba de nível e distribua pontos entre cinco atributos. Os inimigos avisam antes de atacar, então vence quem lê o combate, não quem tem sorte.',
          en: 'Every descent is a loop of fighting and reward: defeat enemies, open chests, gather XP and coins, level up and spread points across five attributes. Enemies signal before they strike, so the fight is won by reading it, not by luck.',
          es: 'Cada descenso es un ciclo de pelea y recompensa: derrota enemigos, abre cofres, junta XP y monedas, sube de nivel y reparte puntos entre cinco atributos. Los enemigos avisan antes de atacar, así que gana quien lee el combate, no quien tiene suerte.'
        }
      },
      {
        label: {pt: 'O que esperar', en: 'What to expect', es: 'Qué esperar'},
        list: {
          pt: [
            'Cinco heróis com estilos bem diferentes: o Cavaleiro que segura a linha de frente, o Bárbaro que troca defesa por dano, a Patrulheira que controla a distância, o Ladino, o mais rápido do jogo, e o Mago, que derrete quem chega perto.',
            'Três níveis de exploração e uma arena fechada para o chefe final.',
            'Quatro tipos de esqueleto que não lutam igual: um caça em grupo, outro é lento mas não se abala com golpe fraco, outro recua quando você avança e outro cura os aliados de longe.',
            'Armas em quatro níveis de raridade, que você reconhece pelo próprio modelo da arma.',
            'Barra rápida de cinco espaços, loja com armas de todas as classes e baús, barris e caixas para quebrar pelo caminho.',
            'Primeira ou terceira pessoa com o mesmo dano, alcance e velocidade: escolha pelo gosto, não pela vantagem.',
            'Textos em português e inglês, progresso salvo e versão para PC na itch.io.'
          ],
          en: [
            'Five heroes with very different styles: the Knight who holds the front line, the Barbarian who trades defense for damage, the Ranger who controls the distance, the Rogue, the fastest in the game, and the Mage, who melts anyone who gets close.',
            'Three levels of exploration and a closed arena for the final boss.',
            'Four kinds of skeleton that do not fight alike: one hunts in packs, one is slow but unfazed by light hits, one backs away as you advance and one heals its allies from afar.',
            'Weapons in four rarity tiers, recognizable by the weapon model itself.',
            'A five-slot hotbar, a shop with weapons from every class, and chests, barrels and crates to break along the way.',
            'First or third person with the same damage, range and speed: choose by taste, not by advantage.',
            'Portuguese and English text, saved progress and a PC version on itch.io.'
          ],
          es: [
            'Cinco héroes con estilos muy distintos: el Caballero que aguanta la primera línea, el Bárbaro que cambia defensa por daño, la Exploradora que controla la distancia, el Pícaro, el más rápido del juego, y el Mago, que derrite a quien se acerque.',
            'Tres niveles de exploración y una arena cerrada para el jefe final.',
            'Cuatro tipos de esqueleto que no pelean igual: uno caza en grupo, otro es lento pero no se inmuta con golpes débiles, otro retrocede cuando avanzas y otro cura a sus aliados desde lejos.',
            'Armas en cuatro niveles de rareza, que reconoces por el propio modelo del arma.',
            'Barra rápida de cinco espacios, tienda con armas de todas las clases y cofres, barriles y cajas para romper por el camino.',
            'Primera o tercera persona con el mismo daño, alcance y velocidad: elige por gusto, no por ventaja.',
            'Textos en portugués e inglés, progreso guardado y versión para PC en itch.io.'
          ]
        }
      }
    ],
    stack: ['Godot', 'GDScript', '3D'],
    links: [
      {label: {pt: 'Repositório', en: 'Repository', es: 'Repositorio'}, url: 'https://github.com/Well-2003/Shadows_of_the_Crypt', icon: 'ri-github-line', solid: true}
    ]
  },

  {
    id: 'flipper',
    logo: 'assets/images/projects/the_wandering/icone.jpg',
    logoFill: true, // arte do icone com fundo proprio, ocupa o quadrado inteiro
    images: [
      {src: 'assets/images/projects/the_wandering/personagens.png', cap: {pt: 'O pinguim e os três inimigos: a fada, o esqueleto e a laranja', en: 'The penguin and the three enemies: the fairy, the skeleton and the orange', es: 'El pingüino y los tres enemigos: el hada, el esqueleto y la naranja'}},
      {src: 'assets/images/projects/the_wandering/floresta.png', cap: {pt: 'A floresta', en: 'The forest', es: 'El bosque'}},
      {src: 'assets/images/projects/the_wandering/montanhas-gelo.png', cap: {pt: 'As montanhas de gelo', en: 'The ice mountains', es: 'Las montañas de hielo'}}
    ],
    title: 'The Wandering Flipper', color: '#2A9D8F', text: '#FFFFFF',
    kind: {
      pt: 'Plataforma 2D · Godot',
      en: '2D platformer · Godot',
      es: 'Plataformas 2D · Godot'
    },
    status: {pt: 'Em desenvolvimento', en: 'In development', es: 'En desarrollo'},
    summary: {
      pt: 'The Wandering Flipper é um jogo de plataforma 2D no espírito dos clássicos do Mario, estrelado por um pinguim viajante. São quatro fases em biomas diferentes, cheias de moedas para juntar e inimigos para driblar, e cada uma termina com uma nota de zero a cinco estrelas.',
      en: 'The Wandering Flipper is a 2D platformer in the spirit of the Mario classics, starring a wandering penguin. Four stages across different biomes, packed with coins to collect and enemies to dodge, each one ending with a zero-to-five star grade.',
      es: 'The Wandering Flipper es un juego de plataformas 2D en el espíritu de los clásicos de Mario, protagonizado por un pingüino viajero. Cuatro fases en biomas distintos, llenas de monedas para juntar y enemigos que esquivar, y cada una termina con una nota de cero a cinco estrellas.'
    },
    fields: [
      {
        label: {pt: 'Como se joga', en: 'How it plays', es: 'Cómo se juega'},
        text: {
          pt: 'O pinguim não anda, ele corre, e é aí que mora a graça: depois de uma corrida longa ele não para na hora, escorrega. O deslize é arriscado e também é arma, porque rebate projéteis e derruba quem estiver no caminho. Some a isso pulo duplo, agachada para desviar de tiros, pisão na cabeça dos inimigos, bolas de neve contadas e nado livre nas áreas de água.',
          en: "The penguin does not walk, he runs, and that is where the fun lives: after a long run he does not stop right away, he slides. The slide is risky and also a weapon, because it bats back projectiles and knocks down whatever is in the way. Add a double jump, a crouch to dodge shots, a stomp on enemies' heads, a limited supply of snowballs and free swimming in the water.",
          es: 'El pingüino no camina, corre, y ahí está la gracia: después de una carrera larga no se detiene en seco, resbala. El deslizamiento es arriesgado y también es un arma, porque devuelve proyectiles y derriba a quien esté en el camino. Súmale salto doble, agacharse para esquivar disparos, pisotón en la cabeza de los enemigos, bolas de nieve contadas y nado libre en las zonas de agua.'
        }
      },
      {
        label: {pt: 'O que esperar', en: 'What to expect', es: 'Qué esperar'},
        list: {
          pt: [
            'Quatro fases em biomas diferentes, praia, floresta, montanhas de gelo e trópicos, cada uma com uma mecânica nova.',
            'Três inimigos com truques próprios: a fada que ataca com magia lá do alto, o esqueleto que arremessa ossos e levanta de novo trinta segundos depois de cair, e a laranja que rola cada vez mais rápido e fica tonta quando bate na parede.',
            'Bolas de neve limitadas de propósito, duas para começar e no máximo doze, então muitas vezes o pulo vale mais que o tiro.',
            'Água clara para nadar e água escura que marca o limite do mapa, fatal até com a invencibilidade ativa.',
            'Caixas que só abrem com duas cabeçadas por baixo, plataformas que desabam e voltam, e checkpoint no meio da fase.',
            'Nota de zero a cinco estrelas no fim de cada fase, pelas moedas, inimigos derrotados e vida restante.',
            'Em português, inglês e espanhol.'
          ],
          en: [
            'Four stages in different biomes, beach, forest, ice mountains and tropics, each with a new mechanic.',
            'Three enemies with tricks of their own: the fairy that attacks with magic from above, the skeleton that throws bones and gets back up thirty seconds after falling, and the orange that rolls faster and faster and gets dizzy when it hits a wall.',
            'Snowballs kept scarce on purpose, two to start and twelve at most, so the jump is often worth more than the shot.',
            'Clear water to swim in and dark water marking the edge of the map, deadly even with invincibility on.',
            'Boxes that only open after two headbutts from below, platforms that collapse and come back, and a checkpoint halfway through the stage.',
            'A zero-to-five star grade at the end of each stage, based on coins, enemies defeated and health left.',
            'In Portuguese, English and Spanish.'
          ],
          es: [
            'Cuatro fases en biomas distintos, playa, bosque, montañas de hielo y trópicos, cada una con una mecánica nueva.',
            'Tres enemigos con trucos propios: el hada que ataca con magia desde lo alto, el esqueleto que lanza huesos y se levanta de nuevo treinta segundos después de caer, y la naranja que rueda cada vez más rápido y se marea cuando choca con la pared.',
            'Bolas de nieve limitadas a propósito, dos para empezar y doce como máximo, así que muchas veces el salto vale más que el disparo.',
            'Agua clara para nadar y agua oscura que marca el límite del mapa, mortal incluso con la invencibilidad activa.',
            'Cajas que solo se abren con dos cabezazos desde abajo, plataformas que se derrumban y vuelven, y un checkpoint a mitad de la fase.',
            'Nota de cero a cinco estrellas al final de cada fase, según las monedas, los enemigos derrotados y la vida restante.',
            'En portugués, inglés y español.'
          ]
        }
      }
    ],
    stack: ['Godot', 'GDScript', '2D', 'Pixel art'],
    links: [
      // locked: o repositorio ainda e privado, entao vira um selo em vez de um link que daria 404
      {label: {pt: 'Repositório privado', en: 'Private repository', es: 'Repositorio privado'}, url: 'https://github.com/Well-2003/The_Wandering_Flipper', icon: 'ri-lock-line', locked: true}
    ]
  }
];
