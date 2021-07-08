function calc(value) {
  let initValue = value;

  return {
    add: (value2) => (initValue += value2),

    subtract: (value2) => (initValue -= value2),

    multiplay: (value2) => (initValue *= value2),
    division: (value2) => (initValue /= value2),
    getInitialValue: () => initValue,
    printResult: () => {
      console.log(initValue);
    },
  };
}

const result = calc(15);

result.add(3);

result.subtract(4);

result.multiplay(2);

result.division(7);

result.printResult();
