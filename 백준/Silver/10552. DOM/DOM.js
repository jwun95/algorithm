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

const [N, M, P] = input()
  .trim()
  .split(" ")
  .map((v) => parseInt(v));

const loveChannels = [];
const hateChannels = {};

for (let h = 1; h < M + 1; h++) {
  hateChannels[h] = [];
}

for (let i = 1; i < N + 1; i++) {
  const [love, hate] = input()
    .trim()
    .split(" ")
    .map((v) => parseInt(v));
  loveChannels.push(love);
  hateChannels[hate].push(i);
}

let count = 0;

function dfs(node) {
  if (count > N) {
    count = -1;
    return;
  }

  if (hateChannels[node].length >= 1) {
    count += 1;
    return dfs(loveChannels[hateChannels[node][0] - 1]);
  }
}

dfs(P);
console.log(count);