let length = +prompt("Please, enter the number quantity");
while (true) {
  if (length < 5 || length > 20) {
    alert("Type a number from 5 to 20!");
    length = +prompt("Please, enter the number quantity");
  } else if (Number.isNaN(length)) {
    alert("Type a number from 5 to 20!");
    length = +prompt("Please, enter the number quantity");
  } else {
    break;
  }
}
function fillArray(length) {
  let value = [];
  for (i = 0; i < length; i++) {
    do {
      value[i] = +prompt(`Put the number`);
    } while (Number.isNaN(value[i]));
  }
  return value;
}

function sortArray(value) {
  for (let i = 0; i < value.length - 1; i++) {
    for (let j = 0; j < value.length - 1 - i; j++) {
      if (value[j + 1] < value[j]) {
        let t = value[j + 1];
        value[j + 1] = value[j];
        value[j] = t;
      }
    }
  }
  return value;
}

function printArray(value) {
  let result = "";
  for (i = 0; i < value.length; i++) {
    result += `${value[i]} `;
  }
  alert(result);
}

let newArray = fillArray(length);
newArray = sortArray(newArray);
printArray(newArray);
