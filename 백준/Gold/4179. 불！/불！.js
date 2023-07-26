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

const direction = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const [R, C] = input()
  .trim()
  .split(" ")
  .map((v) => Number(v));

const graph = [];

for (let i = 0; i < R; i++) {
  graph.push(input().trim().split(""));
}

const J = [0, 0, 1];
const queue = [];

for (let r = 0; r < R; r++) {
  for (let c = 0; c < C; c++) {
    if (graph[r][c] === "J") {
      J[0] = r;
      J[1] = c;
    } else if (graph[r][c] === "F") {
      queue.push([r, c, 0]);
    }
  }
}
queue.push(J);

console.log(bfs(queue));

function bfs(queue) {
  let count = 0;
  while (queue.length > count) {
    const [r, c, s] = queue[count];

    for (const d of direction) {
      const nR = r + d[0];
      const nC = c + d[1];

      if (s !== 0 && (nR === R || nC === C || nC === -1 || nR === -1)) return s;

      if (nR >= 0 && nR < R && nC >= 0 && nC < C && graph[nR][nC] === ".") {
        graph[nR][nC] = "F";

        if (s === 0) queue.push([nR, nC, 0]);
        else queue.push([nR, nC, s + 1]);
      }
    }
    count++;
  }
  return "IMPOSSIBLE";
}