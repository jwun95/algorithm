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

const parenthesis = [];
const N = Number(input().trim());

for (let i = 0; i < N; i++) {
	parenthesis.push(input().trim());
}

for (const p of parenthesis) {
	let left = 0;
	let right = 0;
	let flag = 0;
	for (let i = 0; i < p.length; i++) {
		if (p[i] === "(") left++;
		else right++;

		if (left < right) {
			flag = 1;
			break;
		}
	}

	if (flag) console.log("NO");
	else {
		if (left === right) console.log("YES");
		else console.log("NO");
	}
}