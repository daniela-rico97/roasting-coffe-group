const form = document.getElementById("form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

function setError(element, message) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
}

function setSuccess(element) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
}

function isValidEmail(email) {
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return re.test(String(email).toLowerCase());
}

function isValidPhone(phone) {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;
  return re.test(String(phone).toLowerCase());
}

function validateInputs() {
  const nameValue = username.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();

  if (nameValue === "") {
    setError(username, "El nombre es requerido.");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "El email es requerido.");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "El email es inválido");
  } else {
    setSuccess(email);
  }

  if (phoneValue === "") {
    setError(phone, "El número de teléfono es requerido.");
  } else if (!isValidPhone(phoneValue)) {
    setError(phone, "El número de teléfono es inválido");
  } else {
    setSuccess(phone);
  }
}
