const proceedButton = document.querySelector("#proceedbtn");

const goToQuestionsPage = function () {
  location.href = "./questions.html";
};

proceedButton.addEventListener("click", goToQuestionsPage);

function accepted(acceptedCheckBox) {
  //If the checkbox has been checked
  if (acceptedCheckBox.checked) {
    //Set the disabled property to FALSE and enable the button.
    document.getElementById("proceedbtn").disabled = false;
    proceedButton.addEventListener("mouseover", () => {
      proceedButton.classList.add("hoverProceedButton");
    });
    proceedButton.addEventListener("mouseout", () => {
      proceedButton.classList.remove("hoverProceedButton");
    });
  } else {
    //Otherwise, disable the submit button.
    document.getElementById("proceedbtn").disabled = true;
  }
}

accepted();
