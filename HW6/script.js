//Итерация

function factorial(x) {
  if (x > 1) {
    return x * factorial(x - 1);
  }
  return 1;
}
alert(factorial(5));

//Рекурсия

function factorial(x) {
  let value = 1;
  while (x > 1) {
    value *= x;
    x--;
  }
  return value;
}
alert(factorial(6));
//-------------------------------//
function comp(array, num) {
  for (let i = 0; i < array.length; i++) {
    if (num > array[i]) return true;
  }
  return false;
}
function replacement(arr, num) {
  if (comp(arr, num)) {
    arr.shift();
    arr.push(num);
  } else {
    arr.pop();
    arr.unshift(num);
  }
  return arr;
}

console.log(replacement([25, 67, 136, 567, 2020], 1000));
