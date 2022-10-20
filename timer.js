// let current = localStorage.getItem("current");
// let value = current;

const run = function () {
  let TIME_LIMIT = 10;
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;

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
      if (timeLeft === 0) {
        clearInterval(timerInterval);
        // currentQuestion++;
        goToNextPage();
      }
    }, 1000);
  }

  startTimer();
  // value++;
};

// run();
// console.log(current);

// let TIME_LIMIT = 30;
// let timePassed = 0;
// let timeLeft = TIME_LIMIT;

// const remainingTime = document.querySelector("#timernumber");
// remainingTime.innerText = TIME_LIMIT;

// let timerInterval = null;

// function startTimer() {
//   const nextButton = document.querySelector(".nextbutton");
//   timerInterval = setInterval(() => {
//     // The amount of time passed increments by one
//     timePassed = timePassed += 1;
//     timeLeft = TIME_LIMIT - timePassed;

//     // The time left label is updated
//     remainingTime.innerText = timeLeft;
//     if (timeLeft === 0) {
//       clearInterval(timerInterval);
//       currentQuestion++;
//       goToNextPage();
//     }
//   }, 1000);
// }

// startTimer();
