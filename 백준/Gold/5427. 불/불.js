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

const N = Number(input().trim());

for (let i = 0; i < N; i++) {
  const graph = [];
  const [column, row] = input()
    .trim()
    .split(" ")
    .map((v) => parseInt(v));

  for (let r = 0; r < row; r++) {
    graph.push(input().trim().split(""));
  }

  const queue = [];
  const start = [0, 0, 1];

  for (let r = 0; r < row; r++) {
    for (let c = 0; c < column; c++) {
      if (graph[r][c] === "@") {
        start[0] = r;
        start[1] = c;
      } else if (graph[r][c] === "*") queue.push([r, c, 0]);
    }
  }

  queue.push(start);
  console.log(bfs(queue, graph, row, column));
}

function bfs(queue, graph, row, column) {
  const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let count = 0;
  while (queue.length > count) {
    const [r, c, s] = queue[count];

    for (const d of direction) {
      const nextR = r + d[0];
      const nextC = c + d[1];

      if (
        s !== 0 &&
        (nextR === row || nextC === column || nextR === -1 || nextC === -1)
      ) {
        return s;
      }

      if (
        nextR >= 0 &&
        nextR < row &&
        nextC >= 0 &&
        nextC < column &&
        graph[nextR][nextC] === "."
      ) {
        graph[nextR][nextC] = "*";
        if (s === 0) {
          queue.push([nextR, nextC, 0]);
        } else {
          queue.push([nextR, nextC, s + 1]);
        }
      }
    }
    count++;
  }
  return "IMPOSSIBLE";
}
