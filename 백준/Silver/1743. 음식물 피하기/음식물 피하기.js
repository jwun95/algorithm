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

const [N, M, K] = input()
  .trim()
  .split(" ")
  .map((v) => parseInt(v));

const trash = [];

for (let i = 0; i < K; i++) {
  trash.push(
    input()
      .trim()
      .split(" ")
      .map((v) => parseInt(v))
  );
}

const area = Array.from(Array(N), () => Array(M).fill(false));
const visited = Array.from(Array(N), () => Array(M).fill(false));

const direction = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

for (const t of trash) {
  area[t[0] - 1][t[1] - 1] = true;
}

function dfs(y, x, originY, originX) {
  for (const d of direction) {
    if (
      y + d[0] >= 0 &&
      y + d[0] < N &&
      x + d[1] >= 0 &&
      x + d[1] < M &&
      !visited[y + d[0]][x + d[1]] &&
      area[y + d[0]][x + d[1]]
    ) {
      visited[y + d[0]][x + d[1]] = true;
      area[originY][originX] += 1;
      dfs(y + d[0], x + d[1], originY, originX);
    }
  }
}

const answerList = [];

for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    if (!visited[y][x] && area[y][x]) {
      visited[y][x] = true;
      area[y][x] = 1;
      dfs(y, x, y, x);
      answerList.push(area[y][x]);
    }
  }
}

console.log(Math.max(...answerList));
