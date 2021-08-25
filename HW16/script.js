const inputLoginFieldEl = document.getElementById("login");
const inputPasswordFieldEl = document.getElementById("password");
const buttonEl = document.getElementById("btn");
const errorEl = document.getElementById("alert-notification");
const itemTemplate = document.getElementById("item-template").innerHTML;
const list = document.getElementById("welcome");

const render = (template, dataObject) => {
  for (let key in dataObject) {
    template = template.replaceAll(`{{${key}}}`, dataObject[key]);
  }
  return template;
};

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

const checkUserCredentials = (login, password, onSuccess, onFail) => {
  let requestBody = JSON.stringify({
    email: login,
    password: password,
  });

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://reqres.in/api/login");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.send(requestBody);

  xhr.onload = (e) => {
    const status = e.target.status;
    if (status >= 200 && status < 400) {
      onSuccess(JSON.parse(e.target.response));
    } else {
      onFail(JSON.parse(e.target.response));
    }
  };
};

async function getResponse() {
  const response = await fetch("https://reqres.in/api/users?page=1");
  const content = await response.json();
  let newContent = content.data;

  let person;
  for (person in newContent) {
    list.innerHTML += render(itemTemplate, {
      name: newContent[person].first_name,
      lname: newContent[person].last_name,
      email: newContent[person].email,
      avatar: newContent[person].avatar,
    });
    console.log(newContent[person]);
  }
}

getResponse();

buttonEl.addEventListener("click", () => {
  const login = inputLoginFieldEl.value;
  const password = inputPasswordFieldEl.value;

  checkUserCredentials(
    login,
    password,
    (e) => {
      document.getElementById("login-form").remove();
      document.getElementById("welcome").classList.remove("hidden");
    },
    (e) => {
      errorEl.classList.remove("hidden");
    }
  );
});
