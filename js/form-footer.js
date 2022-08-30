let form = document.querySelector(".footer-subscribe__form");
let formInput = document.querySelector(".footer-subscribe__input");

function validateMail(mail) {
  let symbol =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return symbol.test(String(mail).toLowerCase());
}

form.onsubmit = function () {
  let inputValue = formInput.value;

  if (inputValue === "") {
    console.log("Поле не заповнено!");
    formInput.classList.add("error");
    return false;
  } else {
    formInput.classList.remove("error");
  }

  if (!validateMail(inputValue)) {
    console.log("Поле заповнено не вірно!");
    formInput.classList.add("error");
    return false;
  } else {
    formInput.classList.remove("error");
  }
};
