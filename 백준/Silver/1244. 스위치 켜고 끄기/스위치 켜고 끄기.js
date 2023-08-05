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

const N = Number(input());

const state = input()
  .trim()
  .split(" ")
  .map((v) => Number(v));

const studentNumber = Number(input());
const students = [];

for (let i = 0; i < studentNumber; i++) {
  students.push(
    input()
      .trim()
      .split(" ")
      .map((v) => Number(v))
  );
}

function man(n) {
  for (let i = 1; i * n - 1 < N; i++) {
    state[n * i - 1] = state[n * i - 1] ? 0 : 1;
  }
}

function woman(n) {
  const idx = n - 1;
  let i = 1;
  state[idx] = state[idx] ? 0 : 1;
	while (i < N) {
		if (idx - i >= 0 && idx + i < N && state[idx - i] === state[idx + i]) {
      state[idx - i] = state[idx - i] ? 0 : 1;
      state[idx + i] = state[idx + i] ? 0 : 1;
    } else {
      return;
    }
    i++;
  }
}

students.forEach((v) => {
  if (v[0] === 1) man(v[1]);
  else woman(v[1]);
});

let arrIdx = -1;
const answer = Array.from(Array(Math.floor(N / 20) + 1), () => Array(0));

state.forEach((v, idx) => {
  if (idx % 20 === 0) arrIdx++;
  answer[arrIdx].push(v);
});

for (const a of answer) {
  console.log(a.join(" "));
}