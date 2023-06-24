const { dir } = require("console");
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : fs.readFileSync("../input.txt").toString()
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const N = parseInt(input());
const visited = Array.from(Array(N), () => Array(N).fill(false));
const visited2 = Array.from(Array(N), () => Array(N).fill(false));

const direction = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const area = [];

for (let i = 0; i < N; i++) {
  area.push(input().trim().split(""));
}

// y + d[0] >= 0 && y + d[0] < N && x + d[1] >= 0 && x + d[1] < M;

function dfs(y, x, color, v) {
  for (const d of direction) {
    if (
      y + d[0] >= 0 &&
      y + d[0] < N &&
      x + d[1] >= 0 &&
      x + d[1] < N &&
      !v[y + d[0]][x + d[1]] &&
      color.includes(area[y + d[0]][x + d[1]])
    ) {
      v[y + d[0]][x + d[1]] = true;
      dfs(y + d[0], x + d[1], color, v);
    }
  }
}

const answer = [0, 0];

for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    if (!visited[y][x]) {
      visited[y][x] = true;
      answer[0] += 1;
      if (area[y][x] === "R") {
        dfs(y, x, ["R"], visited);
      } else if (area[y][x] === "B") {
        dfs(y, x, ["B"], visited);
      } else {
        dfs(y, x, ["G"], visited);
      }
    }
  }
}

for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    if (!visited2[y][x]) {
      visited2[y][x] = true;
      answer[1] += 1;
      if (area[y][x] === "B") {
        dfs(y, x, ["B"], visited2);
      } else {
        dfs(y, x, ["R", "G"], visited2);
      }
    }
  }
}

console.log(answer.join(" "));