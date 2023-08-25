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

const dwarfs = [];
let hap = 0;

for (let i = 0; i < 9; i++) {
	const num = Number(input().trim());
	hap += num;
	dwarfs.push(num);
}

dwarfs.sort((x, y) => x - y);
const gap = hap - 100;

for (let i = 0; i < 8; i++) {
	let flag = 0;
	for (let k = i + 1; k < 9; k++) {
		if (dwarfs[i] + dwarfs[k] === gap) {
			dwarfs.splice(k, 1);
			dwarfs.splice(i, 1);
			flag = 1;
			break;
		}
	}
	if (flag) break;
}

console.log(dwarfs.join("\n"));