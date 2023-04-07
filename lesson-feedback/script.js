const container = document.querySelector(".container");
const options = document.querySelectorAll(".option");
const optionsBlock = document.querySelector(".options");
const feedback = document.querySelector(".feedback");
const feedbackInput = document.querySelector(".feedback input");
const submitBtn = document.querySelector(".feedback button");
const thanksMsg = document.querySelector(".thanks-msg");

options.forEach((option) => {
  option.addEventListener("click", () => {
    optionsBlock.classList.add("hide");
    feedback.classList.remove("hide");
    if (option.classList.contains("sad")) {
      feedbackInput.placeholder = "Tell us, what went wrong?";
    } else if (option.classList.contains("ok")) {
      feedbackInput.placeholder = "Tell us, what we could improve?";
    } else {
      feedbackInput.placeholder = "Anything to add?";
    }
  });
});

submitBtn.addEventListener("click", () => {
  if (feedbackInput.value === "") {
    alert("Please enter some feedback");
    return;
  } else {
    container.classList.add("hide");
    thanksMsg.classList.remove("hide");
  }
});
