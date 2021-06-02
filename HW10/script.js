// input.onblur = function () {
//   pass = document.getElementById("login").value;
//   console.log(pass);
//   document.getElementById("btn").disabled = pass !== "admin";
// };
// activateBtn();

const inputLoginFieldEl = document.getElementById("login");
const inputPasswordFieldEl = document.getElementById("password");
const buttonEl = document.getElementById("btn");

const validateInput = () => {
  if (!!inputLoginFieldEl.value && !!inputPasswordFieldEl.value) {
    buttonEl.removeAttribute("disabled");
  } else {
    buttonEl.setAttribute("disabled", "disabled");
  }
};

const validateLogin = () => {
  if (!inputLoginFieldEl.value) {
    inputLoginFieldEl.classList.add("invalid");
  } else {
    inputLoginFieldEl.classList.remove("invalid");
  }
  validateInput();
};

inputLoginFieldEl.addEventListener("blur", validateLogin);
inputLoginFieldEl.addEventListener("change", validateLogin);

const validatePassword = () => {
  if (!inputPasswordFieldEl.value) {
    inputPasswordFieldEl.classList.add("invalid");
  } else {
    inputPasswordFieldEl.classList.remove("invalid");
  }
  validateInput();
};

inputPasswordFieldEl.addEventListener("blur", validatePassword);
inputPasswordFieldEl.addEventListener("change", validatePassword);
