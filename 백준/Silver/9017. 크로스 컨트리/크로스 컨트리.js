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

const T = Number(input());

for (let i = 0; i < T; i++) {
  const N = Number(input());
  const numbers = input()
    .trim()
    .split(" ")
    .map((v) => Number(v));

  const team = {};

  numbers.forEach((v) => {
    team[v] ? (team[v] += 1) : (team[v] = 1);
  });

  const available = Object.keys(team)
    .filter((v) => {
      return team[v] === 6;
    })
    .map((v) => Number(v));

  const info = {};
  let idx = 1;

  numbers.forEach((v) => {
    if (available.includes(v)) {
      info[v] ? info[v].push(idx) : (info[v] = [idx]);
      idx++;
    }
  });

  const answer = [];

	Object.keys(info).forEach((v) => {
		count = 0;
    for (let i = 0; i < 4; i++) {
      count += info[v][i];
    }
    answer.push([count, info[v][4], v]);
  });

  answer.sort((x, y) => x[0] - y[0] || x[1] - y[1]);

  console.log(answer[0][2]);
}