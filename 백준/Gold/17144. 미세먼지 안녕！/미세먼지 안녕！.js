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

const [R, C, T] = input()
  .trim()
  .split(" ")
  .map((v) => Number(v));

const routes = [];

for (let r = 0; r < R; r++) {
  routes.push(
    input()
      .trim()
      .split(" ")
      .map((v) => Number(v))
  );
}

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

const airClear = [];

for (let i = 0; i < R; i++) {
  if (routes[i][0] === -1) airClear.push(i);
}

function diffusion(queue) {
  const temp = [];
  while (queue.length) {
    const [r, c] = queue.shift();
    let count = 0;
    for (const d of directions) {
      const nextR = r + d[0];
      const nextC = c + d[1];

      if (
        nextR >= 0 &&
        nextR < R &&
        nextC >= 0 &&
        nextC < C &&
        routes[nextR][nextC] !== -1
      ) {
        count++;
        const num = Math.floor(routes[r][c] / 5);
        temp.push([nextR, nextC, num]);
      }
    }
    routes[r][c] = routes[r][c] - Math.floor(routes[r][c] / 5) * count;
  }

  while (temp.length) {
    const [x, y, n] = temp.shift();
    routes[x][y] += n;
  }
}

function airBlowing() {
  //위
  let condition = 0;
  for (let y = 1; y < C; y++) {
    const temp = routes[airClear[0]][y];
    routes[airClear[0]][y] = condition;
    condition = temp;
  }
  for (let x = airClear[0] - 1; x >= 0; x--) {
    const temp = routes[x][C - 1];
    routes[x][C - 1] = condition;
    condition = temp;
  }
  for (let y = C - 2; y >= 0; y--) {
    const temp = routes[0][y];
    routes[0][y] = condition;
    condition = temp;
  }
  for (let x = 1; x < airClear[0]; x++) {
    const temp = routes[x][0];
    routes[x][0] = condition;
    condition = temp;
  }
  // 아래
  condition = 0;
  for (let y = 1; y < C; y++) {
    const temp = routes[airClear[1]][y];
    routes[airClear[1]][y] = condition;
    condition = temp;
  }
  for (let x = airClear[1] + 1; x < R; x++) {
    const temp = routes[x][C - 1];
    routes[x][C - 1] = condition;
    condition = temp;
  }
  for (let y = C - 2; y >= 0; y--) {
    const temp = routes[R - 1][y];
    routes[R - 1][y] = condition;
    condition = temp;
  }
  for (let x = R - 2; x > airClear[1]; x--) {
    const temp = routes[x][0];
    routes[x][0] = condition;
    condition = temp;
  }
}

let count = 0;

while (count < T) {
  const queue = [];
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (routes[r][c] > 0) queue.push([r, c]);
    }
  }
  diffusion(queue);
  airBlowing();
  count++;
}

let answer = 0;

for (let x = 0; x < R; x++) {
  for (let y = 0; y < C; y++) {
    if (routes[x][y] > 0) answer += routes[x][y];
  }
}

console.log(answer);