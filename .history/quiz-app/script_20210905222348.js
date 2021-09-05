const quizData = [
  {
    question: "How old is Kate?",
    a: "10",
    b: "17",
    c: "21",
    d: "20",
    correct: "c",
  },
  {
    question: "What is the best programming language?",
    a: "Javascript",
    b: "Python",
    c: "C++",
    d: "PHP",
    correct: "a",
  },
  {
    question: "Who is the president of US?",
    a: "Kate Le",
    b: "Donald Trump",
    c: "Barack Obama",
    d: "Bill Clinton",
    correct: "a",
  },
  {
    question: "Kate is the best girl in the world",
    a: "Damn true",
    b: "This is a correct answer",
    c: "Aboslutely",
    d: "Dont need to ask this stupid question",
    correct: "a",
  },
  {
    question: "What year was Javascript launch",
    a: "2020",
    b: "2019",
    c: "1995",
    d: "None of the above",
    correct: "c",
  },
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

submitBtn.addEventListener("click", () => {
  currentQuiz++;
  // Todo: show result
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    alert("You finished! Good Job");
  }
});
