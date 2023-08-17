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

const [N, M] = input()
  .trim()
  .split(" ")
  .map((v) => Number(v));

const [r, c, d] = input()
  .trim()
  .split(" ")
  .map((v) => Number(v));

const room = [];
const direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

for (let i = 0; i < N; i++) {
  room.push(
    input()
      .trim()
      .split(" ")
      .map((v) => Number(v))
  );
}

function solution(room) {
  let [curR, curC] = [r, c];
  let dir = d;
  let answer = 0;

  while (true) {
    if (room[curR][curC] === 0) {
      answer++;
      room[curR][curC] = 2;
    }

    let flag = 0;
    for (let i = 0; i < 4; i++) {
      const [nR, nC] = [curR + direction[i][0], curC + direction[i][1]];
      if (room[nR][nC] === 0) {
        flag = 1;
        break;
      }
    }
    if (flag === 1) {
      dir = (dir + 3) % 4;
      if (room[curR + direction[dir][0]][curC + direction[dir][1]] === 0) {
        curR = curR + direction[dir][0];
        curC = curC + direction[dir][1];
      }
    } else {
      const temp = (((dir + 3) % 4) + 3) % 4;
      curR = curR + direction[temp][0];
      curC = curC + direction[temp][1];
      if (room[curR][curC] === 1) return answer;
    }
  }
}

console.log(solution(room));