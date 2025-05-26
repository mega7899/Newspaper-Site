/** @format */

const validEmail = document.getElementById("invalid__message");
const emailInput = document.getElementById("news__inputs--email");
const submitBtn = document.getElementById("news__Btn");
const newPic = document.getElementById("news__pic");
const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

if (window.matchMedia("(min-width: 1000px)").matches) {
  newPic.src =
    "https://i.ibb.co/6Rp31v9y/illustration-sign-up-desktop.png";
}

submitBtn.addEventListener("click", () => {
  if (emailInput.value.match(validRegex)) {
    emailInput.value = "";
    window.location.href = "https://newspaper-site-finished.vercel.app/"
  } else {
    emailInput.value = "";
    changeColor();
  }
});

function changeColor() {
  document.getElementById("invalid__message").style.color = "hsl(4, 100%, 67%)";
  document.getElementById("invalid__message").textContent =
    "Valid email required";
  document.getElementById("news__inputs--email").style.borderColor =
    "hsl(4, 100%, 67%)";
  document.getElementById("news__inputs--email").style.backgroundColor =
    "hsl(4, 83.60%, 76.10%)";
  document.getElementById("news__inputs--email").style.placeholder.color =
    "hsl(4, 100%, 67%)";
}
