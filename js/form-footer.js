let form = document.querySelector(".footer-subscribe__form");
let formInput = document.querySelectorAll(".footer-subscribe__input");

form.onsubmit = function () {
  let inputValue = formInput.value;

  if (inputValue === "") {
    formInput.classList.add("error!");
    return false;
  } else {
    formInput.classList.remove("error!");
  }
};
