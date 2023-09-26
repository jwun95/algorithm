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
const datas = {};

for (let n = 0; n < N; n++) {
  const word = input().trim()[0];
  if (datas[word]) datas[word] += 1;
  else datas[word] = 1;
}

let answer = "";

for (const data of Object.keys(datas)) {
  if (datas[data] >= 5) answer += data;
}

if (answer === "") console.log("PREDAJA");
else {
  const temp = answer.split("");
  temp.sort();
  console.log(temp.join(""));
}