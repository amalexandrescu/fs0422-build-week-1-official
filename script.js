let questions = [
  {
    question: "In HTML, onclick and onfocus are:",
    correct: "Event attributes",
    incorrects: ["None of the mentioned", "HTML elements", "Style attributes"],
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
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    correct: "alert('Hello World');",
    incorrects: [
      "msgBox('Hello World');",
      "msg('Hello World');",
      "alertBox('Hello World');",
    ],
  },
  {
    question:
      "What is the result of document.querySelectorAll('.test') when there aren't elements with class test in the DOM?",
    correct: "[]",
    incorrects: ["null", "error", "undefined"],
  },
  {
    question: "How can we create a new DOM element in JavaScript?",
    correct: "Using the createElement method",
    incorrects: [
      "Using the createDocument method",
      "Using the insertBefore method",
      "Using the querySelector method",
    ],
  },
];

let obj = {
  question: "How can we create a new DOM element in JavaScript?",
  correct: "Using the createElement method",
  incorrects: [
    "Using the createDocument method",
    "Using the insertBefore method",
    "Using the querySelector method",
  ],
};

let score = 0;

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

// console.log(randomiseNumbersUnique(4));

const createQuestions = function (obj) {
  const parentNode = document.getElementsByClassName("bodycontent")[0];
  const correctAnswer = obj.correct;
  let arrOfQuestions = [];
  let incorrectArray = [];
  incorrectArray = obj.incorrects;
  // console.log(incorrectArray);
  arrOfQuestions = incorrectArray.slice();
  arrOfQuestions.push(correctAnswer);
  // console.log("array of questions:", arrOfQuestions);

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
    // parentNode.appendChild(option);
  }
};

// createQuestions(obj);

// const nextButton = document.querySelector(".nextbutton");
// nextButton.addEventListener("click", () => {
//   console.log("button works");
// });

// const checkCorrectAnswer = function (obj) {
//   const nextButton = document.querySelector(".nextbutton");
//   const radioButtons = document.querySelectorAll('input[name="radioname"]');
//   let selectedAnswer = "";

const nextButton = document.querySelector(".nextbutton");

// const checkAnswer = function () {
//   const radioButtons = document.querySelectorAll('input[name="radioname"]');
//   for (const radioButton of radioButtons) {
//     if (radioButton.checked) {
//       if (radioButton.value === obj.correct) score++;
//       // break;
//     }
//   }
//   console.log("current score:", score);
//   nextButton.addEventListener("click", goToNextPage);

// };

// checkAnswer(obj);

let currentQuestion = 0;

let totalQuestions = questions.length;

const actualQuestion = document.querySelector("#total_question");

const goToResultsPage = function () {
  const nextButton = document.querySelector(".nextbutton");

  location.href = "./results.html";
};

// nextButton.addEventListener("click", checkAnswer);

const goToNextPage = function () {
  const parentNode = document.getElementsByClassName("bodycontent")[0];
  parentNode.innerHTML = "";
  currentQuestion++;
  createQuestions(questions[currentQuestion]);
  actualQuestion.innerText = `QUESTION ${currentQuestion + 1}/${
    questions.length
  }`;

  if (currentQuestion >= totalQuestions) {
    nextButton.addEventListener("click", goToResultsPage);
  }

  nextButton.addEventListener("click", checkAnswer);

  // nextButton.addEventListener("click", goToNextPage);

  // console.log("current question:", currentQuestion);
  // if (currentQuestion == totalQuestions) {
  //   nextButton.addEventListener("click", goToResultsPage);
  // }
  // nextButton.addEventListener("click", checkAnswer);
};

const checkAnswer = function () {
  const radioButtons = document.querySelectorAll('input[name="radioname"]');
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      if (radioButton.value === obj.correct) score++;
      // break;
    }
  }
  console.log("current score:", score);
  // nextButton.addEventListener("click", goToNextPage);
};

const startQuiz = function () {
  score = 0;
  currentQuestion = 0;

  createQuestions(questions[currentQuestion]);
  actualQuestion.innerText = `QUESTION ${currentQuestion + 1}/${
    questions.length
  }`;

  nextButton.addEventListener("click", checkAnswer);

  // nextButton.addEventListener("click", goToNextPage);
};

window.onload = function () {
  startQuiz();
};

// nextButton.addEventListener("click", goToNextPage);

// startQuiz();
console.log("question:", questions);
console.log("first question:", questions[0]);

// const StartQuiz = function () {
//   createQuestions(questions[currentQuestion]);
//   // currentQuestion++;
//   nextButton.addEventListener("click", checkAnswer);
//   nextButton.addEventListener("click", goToNextPage);

//   // goToNextPage();
// };

// StartQuiz();

// nextButton.addEventListener("click", () => {
//   const radioButtons = document.querySelectorAll('input[name="radioname"]');
//   for (const radioButton of radioButtons) {
//     // let selectedAnswer;
//     if (radioButton.checked) {
//       // selectedAnswer = radioButton.value;
//       // return selectedAnswer;
//       return radioButton.value;
//       break;
//     }
//   }
// });
// };

// function goFurther() {
//   if (checkboxanswer.checked == true)
//     Document.getElementById("proceedbtn").disabled = true;
//   else Document.getElementById("proceedbtn").disabled = false;
// }

//you can select the stars and make them brighter
// const rating = function (grade) {
//   let starsMaindiv = document.getElementById("stars-div");
//   starsMaindiv.innerHTML = "";
//   for (let i = 0; i <= 10; i++) {
//     let spanStar = document.createElement("span");
//     let image = document.createElement("img");
//     image.setAttribute("src", "/assets/star.svg");
//     if (i <= grade) {
//       spanStar.classList.add("single-star2");
//     } else {
//       spanStar.classList.add("no-selected");
//     }

//     spanStar.addEventListener("click", () => rating(i));
//     starsMaindiv.appendChild(spanStar);
//     spanStar.appendChild(image);
//   }
// };

//creates the stars
// const createStars = function () {
//   let starsMaindiv = document.getElementById("stars-div");
//   for (let i = 0; i <= 10; i++) {
//     let spanStar = document.createElement("span");
//     let image = document.createElement("img");
//     image.setAttribute("src", "/assets/star.svg");
//     spanStar.classList.add("single-star");
//     spanStar.addEventListener("click", () => rating(i));
//     starsMaindiv.appendChild(spanStar);
//     spanStar.appendChild(image);
//   }
// };

// window.onload = function () {
//   // createStars();
// };

// const clearTextArea = function () {
//   let text = (document.getElementById("text-area").value = "");
// };

// let rateUsButton = document.getElementById("rate-us-button");

// const rateUs = function () {
//   rateUsButton = document.getElementById("rate-us-button");
//   location.href = "./review.html";
// };

// rateUsButton.addEventListener("click", rateUs);

// let circularProgressNode = document.querySelector(".circular-progress");

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
