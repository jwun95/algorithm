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

const [N, M, K] = input()
  .trim()
  .split(" ")
  .map((v) => Number(v));

const graph = Array.from(Array(N), () => Array(M).fill(false));
const visited = Array.from(Array(N), () => Array(M).fill(false));
const trash = [];

for (let i = 0; i < K; i++) {
  const [x, y] = input()
    .trim()
    .split(" ")
    .map((v) => Number(v));

  trash.push([x - 1, y - 1]);
  graph[x - 1][y - 1] = true;
}

function bfs(queue) {
  const direction = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let count = 1;
  while (queue.length) {
    const [x, y] = queue.shift();

    for (const d of direction) {
      const nextX = x + d[0];
      const nextY = y + d[1];

      if (
        nextX >= 0 &&
        nextX < N &&
        nextY >= 0 &&
        nextY < M &&
        !visited[nextX][nextY] &&
        graph[nextX][nextY]
      ) {
        visited[nextX][nextY] = true;
        count += 1;
        queue.push([nextX, nextY]);
      }
    }
  }
  return count;
}

const answer = [];

for (const t of trash) {
  if (!visited[t[0]][t[1]]) {
    visited[t[0]][t[1]] = true;
    const result = bfs([t]);
    answer.push(result);
  }
}

console.log(Math.max(...answer));