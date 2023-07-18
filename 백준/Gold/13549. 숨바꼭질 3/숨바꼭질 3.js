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
const visited = Array(100001).fill(false);
visited[start] = true;

console.log(bfs([start]));

function bfs(q) {
  if (start === end) return 0;
  while (q.length) {
    const limit = q.length;

    for (let i = 0; i < limit; i++) {
      const curr = q.shift();
      const next = [curr * 2, curr + 1, curr - 1];
      for (let k = 0; k < 3; k++) {
        if (next[k] >= 0 && next[k] < 100001) {
          if (!visited[next[k]]) {
            visited[next[k]] = true;
            if (k === 0) {
              graph[next[k]] = graph[curr];
            } else {
              graph[next[k]] = graph[curr] + 1;
						}
						q.push(next[k]);
          } else {
            if (k === 0) {
              graph[next[k]] = Math.min(graph[curr], graph[next[k]]);
            } else {
              graph[next[k]] = Math.min(graph[curr] + 1, graph[next[k]]);
            }
          }
        }
      }
    }
	}
	return graph[end]
}