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

const [N, K] = input()
  .trim()
  .split(" ")
  .map((v) => Number(v));

const num = input().trim().split("");
let count = K;
const stack = [];

for (let i = 0; i < N; i++) {
  const curr = num[i];

  while (stack.length && stack[stack.length - 1] < curr && count) {
    stack.pop();
    count--;
  }
  stack.push(num[i]);
}

for (let c = 0; c < count; c++) {
  stack.pop();
}

console.log(stack.join(""));