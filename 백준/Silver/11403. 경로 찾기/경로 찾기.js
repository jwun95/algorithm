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
const route = [];

const visited = Array.from(Array(N), () => Array(N).fill(false));

for (let i = 0; i < N; i++) {
  route.push(
    input()
      .split(" ")
      .map((v) => parseInt(v))
  );
}

function dfs(start, x) {
  for (let k = 0; k < N; k++) {
    if (route[x][k] === 1 && visited[start][k] === false) {
			route[start][k] = 1;
			visited[start][k] = true;
      dfs(start, k);
    }
  }
}

for (let row = 0; row < N; row++) {
  for (let column = 0; column < N; column++) {
		if (route[row][column] === 1 && visited[row][column] === false) {
			visited[row][column] = true;
      dfs(row, column);
    }
  }
}

console.log(route.map((v) => v.join(" ")).join("\n"));