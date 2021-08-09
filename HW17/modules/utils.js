let history = [];

const pushToHistory = (func, args, result) => {
  history.push(
    `[${new Date().toTimeString()}] [${func}] with args ${args.join(
      ","
    )} and had result ${result}`
  );
};

const reverseString = (str) => {
  return str.split("").reverse().join("");
};

/*------------------*/

const nTimes = (str) => {
  return str.repeat(3);
};

/*------------------*/
const removeDuplicates = (str) => {
  const arr = new Set(str.toLowerCase());
  const result = [...arr];
  pushToHistory("removeDuplicates", [str], result);
  return result;
};
/*------------------*/
const getPart = (str) => {
  return str
    .split("")
    .slice(Math.floor(str.length / 2))
    .join("");
};
/*------------------*/

const getHistory = () => {
  return history;
};

export { reverseString, nTimes, removeDuplicates, getPart, getHistory };
