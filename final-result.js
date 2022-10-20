const showResults = function () {
  let score = localStorage.getItem("currentScore");
  const correct = document.querySelector("#correctPercentage");
  correct.innerText = `${(score * 100) / questions.length}%`;
  const incorrect = document.querySelector("#incorrectPercentage");
  incorrect.innerText = `${
    ((questions.length - score) * 100) / questions.length
  }%`;

  const correctQuestions = document.querySelector("#correctQuestions");
  correctQuestions.innerText = `${score}/${questions.length}`;
  const incorrectQuestions = document.querySelector("#incorrectQuestions");
  incorrectQuestions.innerText = `${questions.length - score}/${
    questions.length
  }`;
  return score;
};

let x = parseInt(showResults());

let progressStartValue = 0;
let progressEndValue = ((questions.length - x) * 100) / questions.length;
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

  // if (progressStartValue === progressEndValue) {
  //   clearInterval(progress);
  // }
}, speed);

showResults();
progress();
