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
    correct: "[]",
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
];

let score = 0;
let currentQuestion = 0;
let totalQuestions = questions.length;
const actualQuestion = document.querySelector("#total_question");

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

  const question = document.createElement("h3");
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
    option.innerText = arrOfQuestions[randomIndexesArray[i]];
    option.classList.add("answerbutton");
    input.setAttribute("value", `${option.innerText}`);
    label.appendChild(option);
  }

  // let TIME_LIMIT = 30;
  // let timePassed = 0;
  // let timeLeft = TIME_LIMIT;

  // console.log("timepassed", timePassed);
  // console.log("timeleft", timeLeft);

  // const remainingTime = document.querySelector("#timernumber");
  // remainingTime.innerText = TIME_LIMIT;

  // let timerInterval = null;

  // startTimer();
};

const goToResultsPage = function () {
  // let updatedScore = checkAnswer(questions[currentQuestion - 1]);
  const nextButton = document.querySelector(".nextbutton");
  location.href = "./results.html";
  currentQuestion++;
};

const checkAnswer = function (obj) {
  const radioButtons = document.querySelectorAll('input[name="radioname"]');
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      if (radioButton.value === obj.correct) {
        score++;
      }
    }
  }
  // console.log("current score:", score);
  return score;
};

const goToNextPage = function () {
  const parentNode = document.getElementsByClassName("bodycontent")[0];
  parentNode.innerHTML = "";
  currentQuestion++;
  createQuestions(questions[currentQuestion]);

  actualQuestion.innerText = `QUESTION ${
    currentQuestion + 1
  }/${totalQuestions}`;

  const nextButton = document.querySelector(".nextbutton");

  localStorage.setItem("currentScore", score);

  localStorage.setItem("current", currentQuestion);

  if (currentQuestion >= totalQuestions) {
    nextButton.addEventListener("click", goToResultsPage);
  }
  nextButton.addEventListener("click", checkAnswer);
  run();
};

const startQuiz = function () {
  score = 0;
  currentQuestion = 0;

  createQuestions(questions[currentQuestion]);
  localStorage.setItem("current", currentQuestion);

  // let difficulty = questions[currentQuestion].difficulty;
  // if (difficulty === "easy") TIME_LIMIT = 30;
  // else if (difficulty === "medium") TIME_LIMIT = 60;
  // else if (difficulty === "hard") TIME_LIMIT = 90;

  // console.log("difficulty", difficulty);

  actualQuestion.innerText = `QUESTION ${currentQuestion + 1}/${
    questions.length
  }`;

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

// window.onload = function () {
//   startQuiz();
// };

// function goFurther() {
//   if (checkboxanswer.checked == true)
//     Document.getElementById("proceedbtn").disabled = true;
//   else Document.getElementById("proceedbtn").disabled = false;
// }

//you can select the stars and make them brighter
const rating = function (grade) {
  let starsMaindiv = document.getElementById("stars-div");
  starsMaindiv.innerHTML = "";
  for (let i = 0; i <= 10; i++) {
    let spanStar = document.createElement("span");
    let image = document.createElement("img");
    image.setAttribute("src", "./assets/star.svg");
    if (i <= grade) {
      spanStar.classList.add("single-star2");
    } else {
      spanStar.classList.add("no-selected");
    }

    spanStar.addEventListener("click", () => rating(i));
    starsMaindiv.appendChild(spanStar);
    spanStar.appendChild(image);
  }
};

//creates the stars
const createStars = function () {
  let starsMaindiv = document.getElementById("stars-div");
  for (let i = 0; i <= 10; i++) {
    let spanStar = document.createElement("span");
    let image = document.createElement("img");
    image.setAttribute("src", "./assets/star.svg");
    image.classList.add("star-image");
    spanStar.classList.add("single-star");
    spanStar.addEventListener("click", () => rating(i));
    starsMaindiv.appendChild(spanStar);
    spanStar.appendChild(image);
  }
};

window.onload = function () {
  startQuiz();

  createStars();
};

const clearTextArea = function () {
  let text = (document.getElementById("text-area").value = "");
};

let rateUsButton = document.getElementById("rate-us-button");

const rateUs = function () {
  rateUsButton = document.getElementById("rate-us-button");
  location.href = "./review.html";
};

rateUsButton.addEventListener("click", rateUs);

// let circularProgressNode = document.querySelector(".circular-progress");

// const percentages = document.querySelector(".percentages");

// let progressStartValue = 0;
// let progressEndValue = 33.3;
// let speed = 20;

// let progress = setInterval(() => {
//   progressStartValue += 1;
//   circularProgressNode.style.background = `conic-gradient(#d20094 ${
//     progressStartValue * 3.6
//   }deg, #00feff 0deg)`;

//   if (
//     progressStartValue - progressEndValue >= 0 &&
//     progressStartValue - progressEndValue < 1
//   ) {
//     while (progressStartValue < progressEndValue) {
//       circularProgressNode.style.background = `conic-gradient(#d20094 ${
//         (progressStartValue - progressEndValue) * 3.6
//       }deg, #00feff 0deg)`;
//     }

//     clearInterval(progress);
//   }

//   // if (progressStartValue === progressEndValue) {
//   //   clearInterval(progress);
//   // }
// }, speed);

//for difficulty = easy : 30 sec
//for difficulty = medium : 60 sec
//for difficulty = easy : 90 sec

// const TIME_LIMIT = 10;
// let timePassed = 0;
// let timeLeft = TIME_LIMIT;

// const remainingTime = document.querySelector("#timernumber");
// remainingTime.innerText = TIME_LIMIT;

// let timerInterval = null;

// function startTimer() {
//   timerInterval = setInterval(() => {
//     // The amount of time passed increments by one
//     timePassed = timePassed += 1;
//     timeLeft = TIME_LIMIT - timePassed;

//     // The time left label is updated
//     remainingTime.innerText = timeLeft;
//     if (timeLeft === 0) {
//       clearInterval(timerInterval);
//     }
//   }, 1000);
// }

// startTimer();

//1. welcome page - call function click checkbox and proceed
//2.
//3.  color the timer
//4.
// 5.
