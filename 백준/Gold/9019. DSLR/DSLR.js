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

const N = parseInt(input());

const inputValue = [];

for (let i = 0; i < N; i++) {
  inputValue.push(
    input()
      .trim()
      .split(" ")
      .map((v) => parseInt(v))
  );
}

function converter(num, signal) {
  if (signal === "D") {
    return (num * 2) % 10000;
  } else if (signal === "S") {
    return num === 0 ? 9999 : num - 1;
  } else if (signal === "L") {
    return (num % 1000) * 10 + Math.floor(num / 1000);
  } else {
    return (num % 10) * 1000 + Math.floor(num / 10);
  }
}

function bfs(queue, visited, goal) {
  let count = 0;
  while (queue.length > count) {
    const [n, s] = queue[count];

    if (n === goal) return s;

    for (let i = 0; i < 4; i++) {
      let result = 0;
      let signal = s;
      if (i === 0) {
        result = converter(n, "D");
        signal += "D";
      } else if (i === 1) {
        result = converter(n, "S");
        signal += "S";
      } else if (i === 2) {
        result = converter(n, "L");
        signal += "L";
      } else {
        result = converter(n, "R");
        signal += "R";
      }
      if (visited[result] === false) {
        visited[result] = true;
        queue.push([result, signal]);
      }
    }
    count++;
  }
}

for (const value of inputValue) {
  const queue = [[value[0], ""]];
  const goal = value[1];
  const visited = Array(10_000).fill(false);

  visited[value[0]] = true;
  console.log(bfs(queue, visited, goal));
}