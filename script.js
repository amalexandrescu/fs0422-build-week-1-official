
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

