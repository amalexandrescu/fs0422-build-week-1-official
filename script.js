let questions = [
  {
    question: "In HTML, onclick and onfocus are:",
    correct: "Event attributes",
    incorrects: ["None of the mentioned", "HTML elements", "Style attributes"],
    difficulty: "easy",
  },
  {
    question:
      "Consider there is an object declared: const person ={} . Which is the WRONG way to add a property 'name' to an object?",
    correct: "person['name']='John';",
    incorrects: [
      "person.name='John';",
      "const key = 'name'; person[key]='John';",
      "person.push({name:'John'});",
    ],
    difficulty: "easy",
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    correct: "alert('Hello World');",
    incorrects: [
      "msgBox('Hello World');",
      "msg('Hello World');",
      "alertBox('Hello World');",
    ],
    difficulty: "medium",
  },
  {
    question:
      "What is the result of document.querySelectorAll('.test') when there aren't elements with class test in the DOM?",
    correct: "[ ]",
    incorrects: ["null", "error", "undefined"],
    difficulty: "hard",
  },
  {
    question: "How can we create a new DOM element in JavaScript?",
    correct: "Using the createElement method",
    incorrects: [
      "Using the createDocument method",
      "Using the insertBefore method",
      "Using the querySelector method",
    ],
    difficulty: "hard",
  },
  {
    question: "What does CPU stand for?",
    correct: "Central Processing Unit",
    incorrects: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
    difficulty: "easy",
  },
  {
    question: "The logo for Snapchat is a Bell.",
    correct: "False",
    incorrects: ["True"],
    difficulty: "easy",
  },
  {
    question: "On Twitter, what is the character limit for a Tweet?",
    correct: "140",
    incorrects: ["120", "160", "100"],
    difficulty: "medium",
  },
  {
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct: "Java",
    incorrects: ["Python", "C", "Jakarta"],
    difficulty: "easy",
  },
  {
    question: "In web design, what does CSS stand for?",
    correct: "Cascading Style Sheet",
    incorrects: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
    difficulty: "medium",
  },
];

let score = 0;
let currentQuestion = 0;
let totalQuestions = questions.length;
const actualQuestion = document.querySelector("#white-number");
const otherQuestion = document.querySelector("#pink-number");

//a function that returns an array of randomised numbers from 0 to num - 1
const randomiseNumbersUnique = function (num) {
  const allNumbers = [];
  for (let i = 0; i < num; i++) {
    allNumbers.push(i);
  }

  const result = [];

  for (let i = num; i >= 1; i--) {
    const randomPosition = Math.ceil(Math.random() * i);
    result.push(allNumbers[randomPosition - 1]);
    allNumbers.splice(randomPosition - 1, 1);
  }

  return result;
};

//a function that generates the HTML tags for the question and answers
const createQuestions = function (obj) {
  if (!obj) {
    goToResultsPage();
  }
  const parentNode = document.getElementsByClassName("bodycontent")[0];
  const correctAnswer = obj.correct;
  let arrOfQuestions = [];
  let incorrectArray = [];
  incorrectArray = obj.incorrects;
  arrOfQuestions = incorrectArray.slice();
  arrOfQuestions.push(correctAnswer);

  const randomIndexesArray = randomiseNumbersUnique(arrOfQuestions.length);

  const question = document.createElement("div");
  question.innerText = obj.question;
  question.classList.add("questiontext");
  parentNode.appendChild(question);

  for (let i = 0; i < arrOfQuestions.length; i++) {
    const label = document.createElement("label");
    label.classList.add("labl");
    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("name", "radioname");
    label.appendChild(input);
    parentNode.appendChild(label);

    const option = document.createElement("h4");
    option.classList.add("question-font");
    option.innerText = arrOfQuestions[randomIndexesArray[i]];
    option.classList.add("answerbutton");
    input.setAttribute("value", `${option.innerText}`);
    label.appendChild(option);
  }
};

//a function that goes to the results.html page
const goToResultsPage = function () {
  location.href = "./results.html";
  currentQuestion++;
};

//a function that returns the score
const checkAnswer = function (obj) {
  const radioButtons = document.querySelectorAll('input[name="radioname"]');
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      if (radioButton.value === obj.correct) {
        score++;
      }
    }
  }
  return score;
};

const run = function () {
  let difficulty = localStorage.getItem("difficulty");

  let circularProgressNode = document.querySelector(".timer-progress");

  if (difficulty === "easy") TIME_LIMIT = 30;
  else if (difficulty === "medium") TIME_LIMIT = 60;
  else if (difficulty === "hard") TIME_LIMIT = 90;

  let timePassed = 0;
  let timeLeft = TIME_LIMIT;

  let progressStartValue = 0;
  let progressEndValue = TIME_LIMIT;

  const remainingTime = document.querySelector("#timernumber");
  remainingTime.innerText = TIME_LIMIT;

  let timerInterval = null;

  function startTimer() {
    const timerQuestion = currentQuestion;
    const nextButton = document.querySelector(".nextbutton");
    timerInterval = setInterval(() => {
      //check if we're still on this question
      if (currentQuestion != timerQuestion) {
        clearInterval(timerInterval);
        return;
      }

      // The amount of time passed increments by one
      timePassed = timePassed += 1;
      timeLeft = TIME_LIMIT - timePassed;

      // The time left label is updated
      remainingTime.innerText = timeLeft;

      progressStartValue += 1;
      circularProgressNode.style.background = `conic-gradient(#876192 ${
        (progressStartValue * 360) / TIME_LIMIT
      }deg, #00feff 0deg)`;

      if (timeLeft === 0) {
        clearInterval(timerInterval);
        goToNextPage();
      }
    }, 1000);
  }
  startTimer();
};

//a function that goes to the next page
const goToNextPage = function () {
  const parentNode = document.getElementsByClassName("bodycontent")[0];
  parentNode.innerHTML = "";
  currentQuestion++;
  createQuestions(questions[currentQuestion]);

  let difficulty = questions[currentQuestion].difficulty;
  if (difficulty === "easy") TIME_LIMIT = 30;
  else if (difficulty === "medium") TIME_LIMIT = 60;
  else if (difficulty === "hard") TIME_LIMIT = 90;

  actualQuestion.innerText = `QUESTION ${currentQuestion + 1} `;
  otherQuestion.innerText = `/ ${totalQuestions}`;

  const nextButton = document.querySelector(".nextbutton");

  localStorage.setItem("currentScore", score);

  localStorage.setItem("current", currentQuestion);

  localStorage.setItem("questions", questions.length);

  localStorage.setItem("difficulty", difficulty);

  if (currentQuestion >= totalQuestions) {
    nextButton.addEventListener("click", goToResultsPage);
  }
  nextButton.addEventListener("click", checkAnswer);
  run();
};

//a function that starts the quiz (creates the first page and activates the next button)
const startQuiz = function () {
  score = 0;
  currentQuestion = 0;

  createQuestions(questions[currentQuestion]);
  localStorage.setItem("current", currentQuestion);

  let difficulty = questions[currentQuestion].difficulty;
  if (difficulty === "easy") TIME_LIMIT = 30;
  else if (difficulty === "medium") TIME_LIMIT = 60;
  else if (difficulty === "hard") TIME_LIMIT = 90;

  localStorage.setItem("difficulty", difficulty);

  actualQuestion.innerText = `QUESTION ${currentQuestion + 1}`;
  otherQuestion.innerText = ` / ${totalQuestions}`;

  if (currentQuestion >= totalQuestions - 1) {
    nextButton.addEventListener("click", goToResultsPage);
  }

  const nextButton = document.querySelector(".nextbutton");

  nextButton.addEventListener("click", () =>
    checkAnswer(questions[currentQuestion])
  );

  nextButton.addEventListener("click", goToNextPage);
  run();
};

window.onload = function () {
  startQuiz();
};

//1. welcome page - call function click checkbox and proceed
//2.
//3.  color the timer
//4.
// 5.
