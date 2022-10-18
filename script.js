function goFurther() {
  if (checkboxanswer.checked == true)
    Document.getElementById("proceedbtn").disabled = true;
  else Document.getElementById("proceedbtn").disabled = false;
}

console.log("test");
const rating = function (grade) {
  let starsMaindiv = document.getElementById("stars-div");
  starsMaindiv.innerHTML = "";
  for (let i = 0; i <= 10; i++) {
    let spanStar = document.createElement("span");
    let image = document.createElement("img");
    image.setAttribute("src", "/assets/star.svg");
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

const createStars = function () {
  let starsMaindiv = document.getElementById("stars-div");
  for (let i = 0; i <= 10; i++) {
    let spanStar = document.createElement("span");
    let image = document.createElement("img");
    image.setAttribute("src", "/assets/star.svg");
    spanStar.classList.add("single-star");
    spanStar.addEventListener("click", () => rating(i));
    starsMaindiv.appendChild(spanStar);
    spanStar.appendChild(image);
  }
};

window.onload = function () {
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

let circularProgressNode = document.querySelector(".circular-progress");

let progressStartValue = 0;
let progressEndValue = 33.3;
let speed = 20;

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
