const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : fs.readFileSync("./input.txt").toString()
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const n = parseInt(input());

const inputValue = [];

for (let i = 0; i < n; i++) {
  inputValue.push(
    input()
      .trim()
      .split(" ")
      .map((v) => parseInt(v))
  );
}

let count = 0;
const stack = [];

for (const value of inputValue) {
  while (stack.length && stack[stack.length - 1] > value[1]) {
    stack.pop();
  }
  if (value[1] && (stack.length === 0 || stack[stack.length - 1] < value[1])) {
    stack.push(value[1]);
    count++;
  }
}

console.log(count);
