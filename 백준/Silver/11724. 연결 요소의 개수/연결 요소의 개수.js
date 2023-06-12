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

const [N, M] = input()
  .trim()
  .split(" ")
  .map((v) => parseInt(v));

const visited = new Array(N + 1).fill(false);
const arr = [];
for (let i = 0; i < M; i++) {
  arr.push(
    input()
      .trim()
      .split(" ")
      .map((v) => parseInt(v))
  );
}

let count = 0;

const graph = {};

for (let i = 1; i < N + 1; i++) {
  graph[i] = [];
}

arr.forEach((v) => {
  graph[v[0]].push(v[1]);
  graph[v[1]].push(v[0]);
});

function dfs(index) {
  if (visited[index] || visited[index].length === 0) return;
  visited[index] = true;
  graph[index].forEach((v) => {
    dfs(v);
  });
  return true;
}

for (let i = 1; i < N + 1; i++) {
  if (visited[i] === false) {
    const response = dfs(i);
    if (response) count++;
  }
}

console.log(count);