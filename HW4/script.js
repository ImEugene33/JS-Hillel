/*С помощью prompt, confirm, alert и console.log, ветвлений и циклов реализовать следующий сценарий:

Просим пользователя выбрать операцию (на 90 баллов: +,-,/,*; на 100 баллов: cos, sin, pow)
Просим в зависимости от операции ввести операнды и выполняем проверку на NaN - если введенное значение является NaN, просим пользователя повторить операцию ввода (проверка должна быть для каждого операнда).
Выводим результат выполнения операции в виде alert или console.log
Спрашиваем у пользователя хочет ли он повторить, если да - выполняем сценарий еще раз.*/

alert("Get ready for advanced math!");

const operator = prompt("Please, choose what do you want to calculate");
let num1 = +prompt("Type the first number!");

let result, num2;

while (true) {
  if (Number.isNaN(num1)) {
    alert("Type correct symbol!");
    num1 = +prompt("Type the first number!");
  } else {
    break;
  }
}

if (
  operator == "pow" ||
  operator == "+" ||
  operator == "-" ||
  operator == "/" ||
  operator == "*"
) {
  num2 = +prompt("Type the second number");
}

while (true) {
  if (Number.isNaN(num2)) {
    alert("Type correct symbol!");
    num2 = +prompt("Type the second number!");
  } else {
    break;
  }
}

switch (operator) {
  case "cos":
    result = Math.cos(num1 * (Math.PI / 180));
    break;
  case "sin":
    result = Math.sin(num1 * (Math.PI / 180));
    break;
  case "pow":
    result = Math.pow(num1, num2);
    break;
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num1 / num2;
    break;
}
const answer = `Result of operation ${operator} is ${result}`;
alert(answer);

let questsion = confirm("Do you want calculate something else?");
if (questsion) {
  location.reload();
} else {
  alert("Bye Bye!");
}
