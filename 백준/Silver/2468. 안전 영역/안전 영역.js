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

const N = Number(input().trim());
const area = [];

for (let i = 0; i < N; i++) {
  area.push(
    input()
      .split(" ")
      .map((v) => parseInt(v))
  );
}

const numList = [];
const direction = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const heightList = [];

for (let i = 0; i < N; i++) {
  for (let k = 0; k < N; k++) {
    heightList.push(area[i][k]);
  }
}

function dfs(y, x, h, visited) {
  for (const d of direction) {
    if (
      y + d[0] >= 0 &&
      y + d[0] < N &&
      x + d[1] >= 0 &&
      x + d[1] < N &&
      !visited[d[0] + y][d[1] + x] &&
      area[d[0] + y][d[1] + x] > h
    ) {
      visited[d[0] + y][d[1] + x] = true;
      dfs(d[0] + y, d[1] + x, h, visited);
    }
  }
}

for (let l = 0; l < Math.max(...heightList); l++) {
  let answer = 0;
  const visited = Array.from(Array(N), () => Array(N).fill(false));
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (!visited[y][x] && area[y][x] > l) {
        visited[y][x] = true;
        dfs(y, x, l, visited);
        answer++;
      }
    }
  }
  numList.push(answer);
}
console.log(Math.max(...numList));