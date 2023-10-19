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

const num = Number(input());
const nums = Array.from(Array(num), (_, i) => i + 1);
let count = 0;
let answer = 1;

while (nums.length != 1) {
	count++;
	nums.push(nums[count]);
	const temp = nums[count];
	count++;
	if (nums[count] == temp) {
		answer = temp;
		break;
	}
}

console.log(answer);