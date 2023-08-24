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

const S = input().trim();

function solution(str) {
	for (let i = 0; i < Math.floor(str.length / 2); i++) {
		if (str[i] !== str[str.length - 1 - i]) {
			return 0;
		}
	}
	return 1;
}

console.log(solution(S));