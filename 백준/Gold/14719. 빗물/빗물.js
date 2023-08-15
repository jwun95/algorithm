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

const [W, H] = input()
  .trim()
  .split(" ")
  .map((v) => parseInt(v));

const blocks = input()
  .trim()
  .split(" ")
  .map((v) => parseInt(v));

let answer = 0;

for (let i = 1; i < H - 1; i++) {
  const left = Math.max(...blocks.slice(0, i));
  const right = Math.max(...blocks.slice(i + 1));

  const minVal = Math.min(left, right);

  if (blocks[i] < minVal) answer += minVal - blocks[i];
}

console.log(answer);