const questions = [
  {
    question: "Qual é a principal função do hipocampo no cérebro?",
    options: [
      "Processamento emocional",
      "Coordenação motora",
      "Regulação hormonal",
      "Memória e aprendizado",
    ],
    answer: 3,
  },
  {
    question: "Quem desenvolveu a Teoria da Relatividade?",
    options: [
      "Isaac Newton",
      "Nikola Tesla",
      "Albert Einstein",
      "Galileu Galilei",
    ],
    answer: 2,
  },
  {
    question: "Qual é o maior planeta do Sistema Solar?",
    options: ["Terra", "Marte", "Júpiter", "Saturno"],
    answer: 2,
  },
  {
    question: "Quem pintou a Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Michelangelo",
    ],
    answer: 2,
  },
  {
    question: "Qual é a capital da Austrália?",
    options: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
    answer: 3,
  },
  {
    question: "Qual o elemento químico com símbolo 'O'?",
    options: ["Ouro", "Oxigênio", "Osmium", "Ozônio"],
    answer: 1,
  },
  {
    question: "Qual é o menor país do mundo?",
    options: ["Mônaco", "Vaticano", "San Marino", "Liechtenstein"],
    answer: 1,
  },
  {
    question: "Quem é o autor de 'Dom Quixote'?",
    options: [
      "Gabriel Garcia Marquez",
      "Jorge Luis Borges",
      "Miguel de Cervantes",
      "Federico García Lorca",
    ],
    answer: 2,
  },
  {
    question: "Qual é o rio mais longo do mundo?",
    options: ["Amazonas", "Nilo", "Yangtzé", "Mississipi"],
    answer: 1,
  },
  {
    question: "Qual é a moeda oficial do Japão?",
    options: ["Iene", "Won", "Yuan", "Rupia"],
    answer: 0,
  },
  {
    question: "Qual é o maior oceano da Terra?",
    options: [
      "Oceano Atlântico",
      "Oceano Índico",
      "Oceano Pacífico",
      "Oceano Ártico",
    ],
    answer: 2,
  },
  {
    question: "Quem escreveu 'Romeu e Julieta'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Jane Austen",
      "Mark Twain",
    ],
    answer: 1,
  },
  {
    question: "Qual é o planeta mais próximo do Sol?",
    options: ["Terra", "Vênus", "Marte", "Mercúrio"],
    answer: 3,
  },
  {
    question: "Qual foi o primeiro homem a pisar na Lua?",
    options: [
      "Neil Armstrong",
      "Buzz Aldrin",
      "Yuri Gagarin",
      "Michael Collins",
    ],
    answer: 0,
  },
  {
    question: "Qual é a principal fonte de energia do Sol?",
    options: [
      "Fissão nuclear",
      "Fusão nuclear",
      "Queima de hidrogênio",
      "Combustão de carbono",
    ],
    answer: 1,
  },
  {
    question: "Quem foi o primeiro presidente dos Estados Unidos?",
    options: [
      "Thomas Jefferson",
      "George Washington",
      "John Adams",
      "James Madison",
    ],
    answer: 1,
  },
  {
    question: "Qual é o maior deserto do mundo?",
    options: ["Saara", "Gobi", "Antártida", "Atacama"],
    answer: 2,
  },
  {
    question: "Qual é o maior mamífero terrestre?",
    options: ["Elefante africano", "Girafa", "Rinoceronte", "Hipopótamo"],
    answer: 0,
  },
  {
    question: "Qual é a capital da França?",
    options: ["Londres", "Paris", "Roma", "Berlim"],
    answer: 1,
  },
];

let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = questions.length;
let answeredQuestions = 0;

const questionElement = document.getElementById("question");
const optionsElements = document.querySelectorAll(".option");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const scoreElement = document.getElementById("score");
const totalElement = document.getElementById("total");
const unansweredQuestionsElement = document.getElementById(
  "unanswered-questions"
);
const progressElement = document.querySelector(".progress");
const timerElement = document.getElementById("time");
const currentQuestionElement = document.getElementById("current-question");
const totalQuestionsElement = document.getElementById("total-questions");

let timer;
let timeLeft = 10;

function startQuiz() {
  nextButton.style.display = "none";
  loadQuestion();
  startTimer();
}

function loadQuestion() {
  const question = questions[currentQuestionIndex];
  questionElement.textContent = question.question;
  optionsElements.forEach((btn, index) => {
    btn.textContent = question.options[index];
    btn.className = "option"; // Remove qualquer classe anterior
  });
  currentQuestionElement.textContent = currentQuestionIndex + 1;
  totalQuestionsElement.textContent = totalQuestions;
}

function selectOption(selectedIndex) {
  const correctIndex = questions[currentQuestionIndex].answer;
  optionsElements.forEach((btn, index) => {
    if (index === selectedIndex) {
      btn.classList.add(index === correctIndex ? "correct" : "wrong");
    } else if (index === correctIndex) {
      btn.classList.add("correct");
    }
  });

  if (selectedIndex === correctIndex) {
    score++;
  }

  answeredQuestions++;
  nextButton.style.display = "inline-block";
  stopTimer();
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
    nextButton.style.display = "none";
    startTimer();
  } else {
    showResult();
  }
}

function showResult() {
  document.querySelector(".quiz-container").style.display = "none";
  resultContainer.style.display = "block";
  scoreElement.textContent = score;
  totalElement.textContent = totalQuestions;
  unansweredQuestionsElement.textContent = totalQuestions - answeredQuestions;

  // Atualizar a barra de progresso
  const progress = (score / totalQuestions) * 100;
  progressElement.style.width = `${progress}%`;
}

function startTimer() {
  timeLeft = 10;
  timerElement.textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft <= 0) {
      stopTimer();
      nextQuestion();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  answeredQuestions = 0;
  document.querySelector(".quiz-container").style.display = "block";
  resultContainer.style.display = "none";
  startQuiz();
}

startQuiz();
