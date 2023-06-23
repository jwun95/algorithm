const { dir } = require("console");
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

//const area = Array.from(Array(N), () => Array(N).fill(false));
const visited = Array.from(Array(N), () => Array(N).fill(false));

const direction = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const area = [];

for (let i = 0; i < N; i++) {
  area.push(
    input()
      .trim()
      .split("")
      .map((v) => parseInt(v))
  );
}

// y + d[0] >= 0 && y + d[0] < N && x + d[1] >= 0 && x + d[1] < M;

function dfs(y, x, originY, originX) {
  for (const d of direction) {
    if (
      y + d[0] >= 0 &&
      y + d[0] < N &&
      x + d[1] >= 0 &&
      x + d[1] < N &&
      !visited[y + d[0]][x + d[1]] &&
      area[y + d[0]][x + d[1]]
		) {
			visited[y + d[0]][x + d[1]] = true;
			area[originY][originX] += 1;
			dfs(y + d[0], x + d[1], originY, originX);
    }
  }
}

const answer = [];

for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    if (!visited[y][x] && area[y][x]) {
      visited[y][x] = true;
			dfs(y, x, y, x);
			answer.push(area[y][x]);
    }
  }
}

answer.sort((x, y) => x - y);
console.log(answer.length);
for (const a of answer) {
	console.log(a);
}