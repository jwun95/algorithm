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

// const direction = [
//   [-1, 0],
//   [1, 0],
//   [0, -1],
//   [0, 1],
// ];

const [N, T, G] = input()
  .trim()
  .split(" ")
  .map((v) => Number(v));

function transNumber(num) {
  if (num === 0) return num;
  const double = num * 2;
  if (double > 99_999) return 1000_000;

  return double - 10 ** (String(double).length - 1);
}

const queue = [[N, 0]];
const answer = Array(1000_000).fill(0);
answer[N] = 1;
if (N === G) console.log(0);
else console.log(bfs(queue));

function bfs(queue) {
  let count = 0;

  while (queue.length > count) {
    const [curr, n] = queue[count];

    if (n <= T && curr === G) return answer[G];

    for (const d of [curr + 1, transNumber(curr)]) {
      if (d < 1000_000) {
        if (answer[d] === 0 || answer[d] > n + 1) {
          answer[d] = n + 1;
          queue.push([d, n + 1]);
        }
      }
    }
    count++;
  }
  return "ANG";
}