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

const cities = [];

for (let n = 0; n < N; n++) {
  cities.push(
    input()
      .trim()
      .split(" ")
      .map((v) => Number(v))
  );
}

let cLocations = [];
const hLocations = [];

for (let row = 0; row < N; row++) {
  for (let column = 0; column < N; column++) {
    if (cities[row][column] === 2) {
      cLocations.push([row, column]);
    } else if (cities[row][column] === 1) {
      hLocations.push([row, column]);
    }
  }
}

function getCombinations(arr, selecetedNumber) {
  if (selecetedNumber === 1) return arr.map((v) => [v]);

  const result = [];

  arr.forEach((fixed, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const combinations = getCombinations(rest, selecetedNumber - 1);
    const attached = combinations.map((v) => [fixed, ...v]);
    result.push(...attached);
  });

  return result;
}

cLocations = getCombinations(cLocations, M);
const results = [];

for (const cLocation of cLocations) {
  let hap = 0;
  for (const hLocation of hLocations) {
    const temp = [];
    for (const c of cLocation) {
      temp.push(Math.abs(hLocation[0] - c[0]) + Math.abs(hLocation[1] - c[1]));
    }
    hap += Math.min(...temp);
  }
  results.push(hap);
}

console.log(Math.min(...results));