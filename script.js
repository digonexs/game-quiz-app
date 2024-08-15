const questions = [
  {
    question: "Qual é a capital da França?",
    options: ["Londres", "Paris", "Roma", "Madri"],
    answer: 1,
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
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 10;

function showQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById("question").innerText = question.question;
  const options = document.querySelectorAll(".option");
  options.forEach((option, index) => {
    option.innerText = question.options[index];
    option.disabled = false;
    option.classList.remove("correct", "wrong");
  });
  document.getElementById("next-btn").style.display = "none";
  resetTimer();
}

function selectOption(selectedOptionIndex) {
  const question = questions[currentQuestionIndex];
  const options = document.querySelectorAll(".option");
  options.forEach((option) => (option.disabled = true));
  if (selectedOptionIndex === question.answer) {
    score++;
    options[selectedOptionIndex].classList.add("correct");
  } else {
    options[selectedOptionIndex].classList.add("wrong");
    options[question.answer].classList.add("correct");
  }
  document.getElementById("next-btn").style.display = "block";
  clearInterval(timer);
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  document.querySelector(".quiz-container").classList.add("hide");
  document.getElementById("result-container").classList.remove("hide");
  document.getElementById("score").innerText = score;
  document.getElementById("total").innerText = questions.length;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("result-container").classList.add("hide");
  document.querySelector(".quiz-container").classList.remove("hide");
  showQuestion();
}

function resetTimer() {
  timeLeft = 10;
  document.getElementById("time").innerText = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").innerText = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      selectOption(-1); // Se o tempo acabar, selecione uma opção inválida para mostrar a resposta correta
    }
  }, 1000);
}

// Iniciar o quiz ao carregar a página
window.onload = showQuestion;
