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

// const direction = [
//   [-1, 0],
//   [1, 0],
//   [0, -1],
//   [0, 1],
// ];

// function solution() {

// }

// console.log(solution())
const N = parseInt(input());
const info = [];
let sum = 0;

for (let i = 0; i < N; i++) {
  const [vilige, people] = input()
    .trim()
    .split(" ")
    .map((v) => parseInt(v));

  sum += people;

  info.push([vilige, people]);
}
let result = 0;
info.sort((x, y) => x[0] - y[0]);

function solution() {
  for (let i = 0; i < N; i++) {
    result += info[i][1];
    if (result >= sum / 2) {
      return info[i][0];
    }
  }
}

console.log(solution());