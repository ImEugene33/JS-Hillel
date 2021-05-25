let inputField = document.querySelector(".tape-text");
let button = document.querySelector(".button");
let newLine = document.querySelector(".new-line");

button.onclick = function () {
  let enteredText = inputField.value;
  if (!enteredText) return;

  let newItem = document.createElement("li");
  newItem.innerText = inputField.value;

  newLine.append(newItem);
  inputField.value = "";
};
