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
const [N, G, D] = input()
  .trim()
  .split(" ")
  .map((v) => parseInt(v));

function solution(n, g, d) {
  const gap = n + 1 - g - d;
  if (gap < 0) return -1;

  const answer = [];
  for (let i = 0; i < gap; i++) {
    answer.push(1);
  }

  const standard = Math.max(g, d);

  const dahee = [];
  const gahee = [];

  for (let i = 1; i < g; i++) {
    gahee.push(i);
  }

  for (let i = 1; i < d; i++) {
    dahee.push(i);
  }

  if (g > 1)
    return [...answer, ...gahee, standard, ...dahee.reverse()].join(" ");
  else return [standard, ...answer, ...dahee.reverse()].join(" ");
}

console.log(solution(N, G, D));