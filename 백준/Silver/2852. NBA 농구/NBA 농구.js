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
const team = [];

for (let i = 0; i < N; i++) {
  team.push(input().trim().split(" "));
}

const scoresTime = { 1: 0, 2: 0 };
const scores = { 1: 0, 2: 0 };

const transTime = (time) => {
  const [mm, ss] = time.split(":").map((v) => Number(v));
  return mm * 60 + ss;
};

const parseTime = (time) => {
  const hh = time < 600 ? "0" + Math.floor(time / 60) : Math.floor(time / 60);
  const mm = time % 60 < 10 ? "0" + (time % 60) : time % 60;

  return hh + ":" + mm;
};

let previous = team[0][1];
scores[team[0][0]] += 1;
let rival = 1;

for (let i = 1; i <= N; i++) {
	if (i === N) {
    if (scores[1] > scores[2]) {
      scoresTime[1] += 2880 - transTime(previous);
		} else if (scores[1] < scores[2]) {
      scoresTime[2] += 2880 - transTime(previous);
    }
    break;
  }

  const [num, time] = team[i];
  if (num === "1") rival = "2";
  else rival = "1";

  const gap = transTime(time) - transTime(previous);

  if (scores[num] > scores[rival]) {
    scoresTime[num] += gap;
  } else if (scores[num] < scores[rival]) {
    scoresTime[rival] += gap;
  }

  scores[num] += 1;
  previous = time;
}

console.log(parseTime(scoresTime[1]));
console.log(parseTime(scoresTime[2]));