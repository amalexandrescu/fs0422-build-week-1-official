let length = parseInt(localStorage.getItem("questions"));
const firstMessage = document.querySelector("#congrats");
const secondMessage = document.querySelector("#passed");
const thirdMessage = document.querySelector("#certificate");
const fourthMessage = document.querySelector("#checkEmail");

const showResults = function () {
  let score = localStorage.getItem("currentScore");
  const correct = document.querySelector("#correctPercentage");
  correct.innerText = `${(score * 100) / length}%`;
  const incorrect = document.querySelector("#incorrectPercentage");
  incorrect.innerText = `${((length - score) * 100) / length}%`;

  const correctQuestions = document.querySelector("#correctQuestions");
  correctQuestions.innerText = `${score}/${length} questions`;
  const incorrectQuestions = document.querySelector("#incorrectQuestions");
  incorrectQuestions.innerText = `${length - score}/${length} questions`;

  if (parseInt(score) >= 5) {
    firstMessage.innerText = "Congratulations!";
    secondMessage.innerText = "You passed the exam.";
    thirdMessage.innerText = "We'll send you the certificate in few minutes.";
    fourthMessage.innerText =
      "Check your email (including promotions / spam folder).";
  } else if (parseInt(score) < 5) {
    firstMessage.innerText = "Sorry!";
    secondMessage.innerText = "You did not pass the exam.";
    thirdMessage.innerText = "No certificate for you this time.";
    fourthMessage.innerText = "Prepare for assessment.";
  }

  return score;
};

let x = parseInt(showResults());

let progressStartValue = 0;
let progressEndValue = ((length - x) * 100) / length;
let speed = 20;
let circularProgressNode = document.querySelector(".circular-progress");

let progress = setInterval(() => {
  progressStartValue += 1;
  circularProgressNode.style.background = `conic-gradient(#d20094 ${
    progressStartValue * 3.6
  }deg, #00feff 0deg)`;

  if (
    progressStartValue - progressEndValue >= 0 &&
    progressStartValue - progressEndValue < 1
  ) {
    while (progressStartValue < progressEndValue) {
      circularProgressNode.style.background = `conic-gradient(#d20094 ${
        (progressStartValue - progressEndValue) * 3.6
      }deg, #00feff 0deg)`;
    }

    clearInterval(progress);
  }
}, speed);

showResults();
