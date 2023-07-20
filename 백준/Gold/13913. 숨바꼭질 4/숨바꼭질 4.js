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

const [start, end] = input()
  .trim()
  .split(" ")
  .map((v) => Number(v));
const visited = Array(100001).fill(false);

const queue = [[start, 0]];
visited[start] = 1;
const answer = bfs(queue);

console.log(answer[1]);
let idx = answer[0];
const path = [end]

for (let i = 0; i < answer[1]; i++) {
	path.push(idx);
	idx = visited[idx]
}

console.log(path.reverse().join(" "));

function bfs(que) {
  while (que.length) {
    const [curr, idx] = que.shift();
    if (curr === end) return [visited[curr], idx];

    for (const next of [curr * 2, curr + 1, curr - 1]) {
      if (next >= 0 && next < 100001 && visited[next] === false) {
        visited[next] = curr;
        que.push([next, idx + 1]);
      }
    }
  }
}