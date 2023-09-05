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

const [N, K, P, X] = input()
	.trim()
	.split(" ")
	.map((v) => parseInt(v));

const numbers = {
	0: "1111110",
	1: "0110000",
	2: "1101101",
	3: "1111001",
	4: "0110011",
	5: "1011011",
	6: "1011111",
	7: "1110000",
	8: "1111111",
	9: "1111011",
};

function compare(a, b) {
	let count = 0;
	for (let k = 0; k < a.length; k++) {
		const first = numbers[a[k]];
		const second = numbers[b[k]];

		for (let j = 0; j < 7; j++) {
			if (first[j] !== second[j]) count++;
		}
	}
	return count <= P ? 1 : 0;
}

let answer = 0;

const curr = "0".repeat(K - String(X).length) + String(X);

for (let i = 1; i <= N; i++) {
	const floor = "0".repeat(K - String(i).length) + String(i);
	answer += compare(curr, floor);
}

console.log(answer - 1);