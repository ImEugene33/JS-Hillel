let inputFieldEl = document.querySelector(".tape-text");
let buttonEl = document.querySelector(".button");
let newLineEl = document.querySelector(".new-line");
// let currentDateEl = new Date().toLocaleTimeString();
const itemTemplate = document.getElementById("item-template").innerHTML;
const elem = document.querySelector(".container-items");

const render = (template, dataObject) => {
  for (let key in dataObject) {
    template = template.replaceAll(`{{${key}}}`, dataObject[key]);
  }
  return template;
};

const onItemDelete = (evt) => {
  if (evt.target.dataset["action"] === "delete") {
    evt.target.parentElement.remove();
  }
};
newLineEl.addEventListener("click", onItemDelete);

/////////copy////////////

const onItemCopy = (evt) => {
  if (evt.target.dataset["action"] === "copy") {
    let copy = newLineEl.cloneNode(true);
    elem.append(copy);
  }
};
newLineEl.addEventListener("click", onItemCopy);

///////////copy//////////////

buttonEl.onclick = () => {
  const enteredText = inputFieldEl.value;

  if (!enteredText) return;

  const newItem = document.createElement("li");

  newItem.innerHTML = render(itemTemplate, {
    label: enteredText,
    date: new Date().toISOString(),
  });

  newLineEl.append(newItem);
  inputFieldEl.value = "";
};
