// Используя функции и методы массивов реализовать следующий сценарий:
// 1. Попросить пользователя ввести массив через пробел в prompt (массив более чем 3 элемента)
// 2. Сделать из введенного массив чисел -(методом split преобразуем в число и фильтруем пробелы filter(Number))
// 3. Дать список операций над массивом
//   1 - отсортировать по возрастанию/убыванию(.sort((a, b) => b - a))
//   2 - вывести все четные/нечетные
//   3 - вывести сумму всех чисел, среднее арифметическое число, наибольшее/наименьшее
// 4. Спросить у пользователя разделитель (опционально для некоторых операций)
// 5. Выводим сообщение alert и console.log
// 6. Спрашиваем хочет ли он повторить, если хочет:
//   - повторить со тарым массивом
//   - или создать новый
let numbers = [];
let value = prompt("Введите минимум три числа через пробел");
do {
  function numInput(numbers) {
    numbers = value.split("").filter(Number);

    console.log(numbers);

    const operation = prompt(
      `Select the operation:\n increase \n decrease \n even \n odd \n sum \n average \n max \n min`
    );
    let answer;
    switch (operation) {
      case "increase":
        answer = numbers.sort((a, b) => b - a);
        break;
      case "decrease":
        answer = numbers.sort((a, b) => a - b);
        break;
      case "even":
        answer = numbers.filter((elem) => elem % 2 == 0);
        break;
      case "odd":
        answer = numbers.filter((elem) => elem % 2 != 0);
        break;
      case "sum":
        answer = numbers.reduce((a, b) => parseInt(a) + parseInt(b));
        break;
      case "average":
        answer =
          numbers.reduce((a, b) => parseInt(a) + parseInt(b)) / numbers.length;
        break;
      case "max":
        answer = numbers.reduce((a, b) => (a > b ? a : b));
        break;
      case "min":
        answer = numbers.reduce((a, b) => (a < b ? a : b));
        break;
    }
    console.log(answer);
    //return numInput;
  }
  numInput(numbers);
} while (
  confirm("Вы желаете повторить операцию?")
    ? confirm("Использовать старый массив?")
      ? numInput()
      : location.reload()
    : alert("Good bye!")
);
