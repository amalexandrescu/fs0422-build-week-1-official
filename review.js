//you can select the stars and make them brighter

const rating = function (grade) {
  let starsMaindiv = document.getElementById("stars-div");
  starsMaindiv.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
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
  for (let i = 1; i <= 10; i++) {
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

const clearTextArea = function () {
  let text = (document.getElementById("text-area").value = "");
};
window.onload = function () {
  createStars();
};
