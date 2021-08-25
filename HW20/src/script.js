let USERS = [
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
