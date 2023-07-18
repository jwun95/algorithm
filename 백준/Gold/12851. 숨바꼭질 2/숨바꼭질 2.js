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

const [start, end] = input()
  .trim()
  .split(" ")
  .map((v) => Number(v));

const graph = Array(100001).fill(0);
const count = Array(100001).fill(0);
graph[start] = 1;
count[start] = 1;

for (const b of bfs([start])) console.log(b);

function bfs(q) {
  if (start === end) return [0, 1];
  while (q.length) {
    const limit = q.length;

    for (let i = 0; i < limit; i++) {
      const curr = q.shift();
      for (const next of [curr + 1, curr * 2, curr - 1]) {
        if (next >= 0 && next <= 100000) {
          if (graph[next] === 0) {
            graph[next] = graph[curr] + 1;
            count[next] += count[curr];
            q.push(next);
          } else if (graph[next] === graph[curr] + 1) {
            count[next] += count[curr];
          }
        }
      }
    }
  }
  return [graph[end] - 1, count[end]];
}