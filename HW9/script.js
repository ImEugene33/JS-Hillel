let inputFieldEl = document.querySelector(".tape-text");
let buttonEl = document.querySelector(".button");
let newLineEl = document.querySelector(".new-line");
let currentDate = new Date().toLocaleTimeString();

buttonEl.onclick = function () {
  let enteredText = inputFieldEl.value;
  if (!enteredText) return;

  let newItem = document.createElement("li");
  newItem.innerText = inputFieldEl.value;

  newLineEl.append(newItem);
  inputFieldEl.value = "";
};
