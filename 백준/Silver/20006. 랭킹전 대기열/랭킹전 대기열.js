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

const [p, m] = input()
  .trim()
  .split(" ")
  .map((v) => parseInt(v));

const levels = [];
for (let i = 0; i < p; i++) {
  levels.push(input().trim().split(" "));
}

function solution(p, m, levels) {
  const rooms = Array.from(Array(p), () => Array());

  for (let i = 0; i < p; i++) {
    let idx = 0;
    const l = parseInt(levels[i][0]);
    while (idx < p) {
      if (!rooms[idx].length) {
        rooms[idx].push(levels[i]);
        break;
      } else if (
        parseInt(rooms[idx][0][0]) - 10 <= l &&
        parseInt(rooms[idx][0][0]) + 10 >= l &&
        rooms[idx].length < m
      ) {
        rooms[idx].push(levels[i]);
        break;
      } else {
        idx++;
      }
    }
  }
  return rooms;
}

const result = solution(p, m, levels);

for (const r of result) {
  if (!r.length) break;
  if (r.length < m) {
    console.log("Waiting!");
  } else {
    console.log("Started!");
  }
  r.sort((x, y) => (x[1] > y[1] ? 1 : -1));
  for (const a of r) {
    console.log(a.join(" "));
  }
}