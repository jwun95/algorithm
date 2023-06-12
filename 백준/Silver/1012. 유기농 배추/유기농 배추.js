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

const T = parseInt(input());
for (let i = 0; i < T; i++) {
  const [M, N, K] = input()
    .trim()
    .split(" ")
    .map((v) => parseInt(v));
  const land = Array.from(Array(N), () => Array(M).fill(0));

  for (let i = 0; i < K; i++) {
    const [a, b] = input()
      .trim()
      .split(" ")
      .map((v) => parseInt(v));
    land[b][a] = 1;
  }

  let count = 0;
  const direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function dfs(y, x) {
    if (land[y][x] === 0) return;
    land[y][x] = 0;
    for (let i = 0; i < 4; i++) {
      const nx = x + direction[i][0];
      const ny = y + direction[i][1];

      if (nx >= 0 && nx < M && ny >= 0 && ny < N) {
        dfs(ny, nx);
      }
    }
  }

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (land[y][x] === 1) {
        dfs(y, x);
        count++;
      }
    }
  }

  console.log(count);
}