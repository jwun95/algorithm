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

const [M, N, K] = input()
  .trim()
  .split(" ")
  .map((v) => Number(v));

const area = Array.from(Array(M), () => Array(N).fill(true));
const visited = Array.from(Array(M), () => Array(N).fill(false));

const direction = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const rangeList = [];

for (let i = 0; i < K; i++) {
  rangeList.push(
    input()
      .trim()
      .split(" ")
      .map((v) => parseInt(v))
  );
}

for (const r of rangeList) {
  for (let y = r[1]; y < r[3]; y++) {
    for (let x = r[0]; x < r[2]; x++) {
      area[y][x] = false;
    }
  }
}

// y + d[0] >= 0 && y + d[0] < N && x + d[1] >= 0 && x + d[1] < M;

function dfs(y, x, originY, originX) {
  for (const d of direction) {
    if (
      y + d[0] >= 0 &&
      y + d[0] < M &&
      x + d[1] >= 0 &&
      x + d[1] < N &&
      !visited[y + d[0]][x + d[1]] &&
      area[y + d[0]][x + d[1]]
    ) {
      visited[y + d[0]][x + d[1]] = true;
      area[originY][originX] += 1;
      dfs(y + d[0], x + d[1], originY, originX);
    }
  }
}

const answer = [];

for (let y = 0; y < M; y++) {
  for (let x = 0; x < N; x++) {
    if (area[y][x] && !visited[y][x]) {
      area[y][x] = 1;
      visited[y][x] = true;
      dfs(y, x, y, x);
      answer.push(area[y][x]);
    }
  }
}

console.log(answer.length);
answer.sort((x, y) => x - y);
console.log(answer.join(" "));