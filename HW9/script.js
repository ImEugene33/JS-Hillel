let inputField = document.querySelector(`.tape-text`);
let button = document.querySelector(`.button`);
let newLine = document.querySelector(`.new-line`);

button.onclick = function () {
  let a = inputField.value;
  //   console.log(a);
  let b = document.createElement("li");
  b.appendChild(document.createTextNode(a));
  newLine.appendChild(b);
  inputField.value = "";
};
