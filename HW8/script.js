function calc(value) {
  const initValue = value;

  function foo() {
    return {
      add() {
        return initValue + value;
      },
      subtract() {
        return initValue - value;
      },
      multiplay() {
        return initValue * value;
      },
      division() {
        return initValue / value;
      },
      getInitialValue() {
        return initValue;
      },
    };
  }
  return foo();
}

const result = calc(5);
console.log(result);

console.log("summ: ", result.add());

console.log("subtract: ", result.subtract());

console.log("multi: ", result.multiplay());

console.log("division: ", result.division());

console.log("origin: ", result.getInitialValue());
