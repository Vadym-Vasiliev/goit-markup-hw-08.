let form = document.querySelector(".modal-form");
let formInputs = document.querySelectorAll(".modal-form__input");
let formInputPhone = document.querySelector(".modal-form__input-phone");
let formInputMail = document.querySelector(".modal-form__input-mail");
let formInputCheckbox = document.querySelector(".form-checkbox__input");

function validatePhone(phone) {
  let symbols = /^[0-9\s]*$/;
  return symbols.test(String(phone));
}

function validateMail(mail) {
  let symbols =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return symbols.test(String(mail).toLowerCase());
}

form.onsubmit = function () {
  let phoneValue = formInputPhone.value;
  let mailValue = formInputMail.value;

  let inputsEmpty = Array.from(formInputs).filter(
    (input) => input.value === ""
  );

  formInputs.forEach((input) => {
    if (input.value === "") {
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  });

  if (inputsEmpty.length !== 0) {
    console.log("Поля не заповнені!");
    return false;
  }

  if (!validatePhone(phoneValue)) {
    console.log("Поле з телефоном не заповнено!");
    formInputPhone.classList.add("error");
    return false;
  } else {
    formInputPhone.classList.remove("error");
  }

  if (!validateMail(mailValue)) {
    console.log("Поле з поштою не заповнено!");
    formInputMail.classList.add("error");
    return false;
  } else {
    formInputMail.classList.remove("error");
  }

  if (!formInputCheckbox.checked) {
    console.log("Дайте згоду на розсилку та прийміть умови!");
    formInputCheckbox.classList.add("error");
    return false;
  } else {
    formInputCheckbox.classList.remove("error");
  }
};
