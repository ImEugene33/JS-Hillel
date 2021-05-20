/*С помощью prompt, alert и console.log и ветвлений реализовать следующий сценарий:

Просим пользователя выбрать операцию (на 90 баллов: +,-,/,*; на 100 баллов: cos, sin, pow)
Просим в зависимости от операции ввести операнды
Выводим результат выполнения операции в виде alert или console.log*/
alert("Get ready for advanced math!");
const operator = prompt("Please, choose what do you want to calculate");
let num1 = +prompt("Type the first number!");
let result, num2;
if (
  operator == "pow" ||
  operator == "+" ||
  operator == "-" ||
  operator == "/" ||
  operator == "*"
) {
  num2 = +prompt("Type the second number");
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
