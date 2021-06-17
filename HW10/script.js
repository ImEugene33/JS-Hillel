const USERS = [
  { login: "admin", password: "pass" },
  { login: "admin2", password: "qaz123" },
  { login: "user", password: "12345" },
];

const inputLoginFieldEl = document.getElementById("login");
const inputPasswordFieldEl = document.getElementById("password");
const buttonEl = document.getElementById("btn");
const errorEl = document.getElementById("alert-notification");

const validateInput = () => {
  if (!!inputLoginFieldEl.value && !!inputPasswordFieldEl.value) {
    buttonEl.removeAttribute("disabled");
  } else {
    buttonEl.setAttribute("disabled", "disabled");
  }
};

const validateAllInputs = (inputEl) => {
  return () => {
    errorEl.classList.add("hidden");
    if (!inputEl.value) {
      inputEl.classList.add("invalid");
    } else {
      inputEl.classList.remove("invalid");
    }
    validateInput();
  };
};

inputLoginFieldEl.addEventListener(
  "blur",
  validateAllInputs(inputLoginFieldEl)
);
inputLoginFieldEl.addEventListener(
  "input",
  validateAllInputs(inputLoginFieldEl)
);

inputPasswordFieldEl.addEventListener(
  "blur",
  validateAllInputs(inputPasswordFieldEl)
);
inputPasswordFieldEl.addEventListener(
  "input",
  validateAllInputs(inputPasswordFieldEl)
);

const checkUserCredentials = (login, password) => {
  return !!USERS.find((e) => e.login === login && e.password === password);
};

buttonEl.addEventListener("click", () => {
  const login = inputLoginFieldEl.value;
  const password = inputPasswordFieldEl.value;

  if (checkUserCredentials(login, password)) {
    document.getElementById("login-form").remove();
    document.getElementById("welcome").classList.remove("hidden");
  } else {
    errorEl.classList.remove("hidden");
  }
});
