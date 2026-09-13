/* Perguntas do mini game, aparecem quando a nave e atingida.
   Cada pergunta tem o texto e as alternativas nos tres idiomas, e c e a posicao
   da alternativa correta, comecando em 0. Mantenha a mesma ordem nos tres idiomas. */
const QUESTIONS = [
  {
    q: {pt: "O que significa a sigla HTML?",
        en: "What does HTML stand for?",
        es: "¿Qué significa la sigla HTML?"},
    a: {pt: ["HyperText Markup Language", "HighTech Modern Language", "HyperTool Multi Language", "HomeTool Markup Language"],
        en: ["HyperText Markup Language", "HighTech Modern Language", "HyperTool Multi Language", "HomeTool Markup Language"],
        es: ["HyperText Markup Language", "HighTech Modern Language", "HyperTool Multi Language", "HomeTool Markup Language"]},
    c: 0
  },
  {
    q: {pt: "Para que serve o CSS em um site?",
        en: "What is CSS used for on a website?",
        es: "¿Para qué sirve el CSS en un sitio web?"},
    a: {pt: ["Guardar os dados dos usuários", "Definir a aparência e o estilo da página", "Conectar o site ao banco de dados", "Criar as funções do site"],
        en: ["Storing user data", "Defining the look and style of the page", "Connecting the site to a database", "Creating the site functions"],
        es: ["Guardar los datos de los usuarios", "Definir la apariencia y el estilo de la página", "Conectar el sitio a la base de datos", "Crear las funciones del sitio"]},
    c: 1
  },
  {
    q: {pt: "O que é uma variável na programação?",
        en: "What is a variable in programming?",
        es: "¿Qué es una variable en programación?"},
    a: {pt: ["Um erro no código", "Um tipo de computador", "Um espaço que guarda um valor", "Um programa antivírus"],
        en: ["An error in the code", "A type of computer", "A space that stores a value", "An antivirus program"],
        es: ["Un error en el código", "Un tipo de computadora", "Un espacio que guarda un valor", "Un programa antivirus"]},
    c: 2
  },
  {
    q: {pt: "Qual comando mostra um texto na tela em Python?",
        en: "Which command displays text on the screen in Python?",
        es: "¿Qué comando muestra un texto en pantalla en Python?"},
    a: {pt: ["show()", "echo()", "write()", "print()"],
        en: ["show()", "echo()", "write()", "print()"],
        es: ["show()", "echo()", "write()", "print()"]},
    c: 3
  },
  {
    q: {pt: "Como é chamado um erro em um programa?",
        en: "What is an error in a program commonly called?",
        es: "¿Cómo se llama comúnmente un error en un programa?"},
    a: {pt: ["Bug", "Byte", "Loop", "Chip"],
        en: ["Bug", "Byte", "Loop", "Chip"],
        es: ["Bug", "Byte", "Loop", "Chip"]},
    c: 0
  },
  {
    q: {pt: "Qual destes é uma linguagem de programação?",
        en: "Which of these is a programming language?",
        es: "¿Cuál de estos es un lenguaje de programación?"},
    a: {pt: ["Photoshop", "Python", "Windows", "Google"],
        en: ["Photoshop", "Python", "Windows", "Google"],
        es: ["Photoshop", "Python", "Windows", "Google"]},
    c: 1
  },
  {
    q: {pt: "O que um laço de repetição faz?",
        en: "What does a loop do?",
        es: "¿Qué hace un bucle (loop)?"},
    a: {pt: ["Apaga o código", "Repete um bloco de código várias vezes", "Desliga o computador", "Traduz o código para inglês"],
        en: ["Deletes the code", "Repeats a block of code several times", "Turns off the computer", "Translates the code into English"],
        es: ["Borra el código", "Repite un bloque de código varias veces", "Apaga la computadora", "Traduce el código al inglés"]},
    c: 1
  },
  {
    q: {pt: "Qual símbolo cria um comentário de uma linha em Python?",
        en: "Which symbol creates a single line comment in Python?",
        es: "¿Qué símbolo crea un comentario de una línea en Python?"},
    a: {pt: ["//", "#", "<!--", "**"],
        en: ["//", "#", "<!--", "**"],
        es: ["//", "#", "<!--", "**"]},
    c: 1
  },
  {
    q: {pt: "Que tipo de valor guarda apenas verdadeiro ou falso?",
        en: "Which type of value stores only true or false?",
        es: "¿Qué tipo de valor guarda solo verdadero o falso?"},
    a: {pt: ["Texto (string)", "Inteiro (int)", "Booleano (bool)", "Decimal (float)"],
        en: ["Text (string)", "Integer (int)", "Boolean (bool)", "Decimal (float)"],
        es: ["Texto (string)", "Entero (int)", "Booleano (bool)", "Decimal (float)"]},
    c: 2
  },
  {
    q: {pt: "O que é um algoritmo?",
        en: "What is an algorithm?",
        es: "¿Qué es un algoritmo?"},
    a: {pt: ["Uma marca de computador", "Uma sequência de passos para resolver um problema", "Um tipo de vírus", "Uma rede social"],
        en: ["A computer brand", "A sequence of steps to solve a problem", "A type of virus", "A social network"],
        es: ["Una marca de computadora", "Una secuencia de pasos para resolver un problema", "Un tipo de virus", "Una red social"]},
    c: 1
  },
  {
    q: {pt: "Qual é a extensão de um arquivo JavaScript?",
        en: "What is the file extension of a JavaScript file?",
        es: "¿Cuál es la extensión de un archivo JavaScript?"},
    a: {pt: [".java", ".js", ".jsc", ".script"],
        en: [".java", ".js", ".jsc", ".script"],
        es: [".java", ".js", ".jsc", ".script"]},
    c: 1
  },
  {
    q: {pt: "Qual operador é usado para somar dois números?",
        en: "Which operator is used to add two numbers?",
        es: "¿Qué operador se usa para sumar dos números?"},
    a: {pt: ["-", "*", "+", "/"],
        en: ["-", "*", "+", "/"],
        es: ["-", "*", "+", "/"]},
    c: 2
  },
  {
    q: {pt: "O que é a Godot Engine?",
        en: "What is the Godot Engine?",
        es: "¿Qué es Godot Engine?"},
    a: {pt: ["Um editor de vídeo", "Um motor para criar jogos", "Um navegador de internet", "Um banco de dados"],
        en: ["A video editor", "An engine for creating games", "A web browser", "A database"],
        es: ["Un editor de video", "Un motor para crear juegos", "Un navegador de internet", "Una base de datos"]},
    c: 1
  },
  {
    q: {pt: "Para que serve o GitHub?",
        en: "What is GitHub used for?",
        es: "¿Para qué sirve GitHub?"},
    a: {pt: ["Editar fotos online", "Guardar e compartilhar código de projetos", "Assistir vídeos", "Enviar e-mails"],
        en: ["Editing photos online", "Storing and sharing project code", "Watching videos", "Sending emails"],
        es: ["Editar fotos en línea", "Guardar y compartir código de proyectos", "Ver videos", "Enviar correos"]},
    c: 1
  },
  {
    q: {pt: "Qual tag do HTML cria um link?",
        en: "Which HTML tag creates a link?",
        es: "¿Qué etiqueta de HTML crea un enlace?"},
    a: {pt: ["<p>", "<img>", "<a>", "<div>"],
        en: ["<p>", "<img>", "<a>", "<div>"],
        es: ["<p>", "<img>", "<a>", "<div>"]},
    c: 2
  }
];
