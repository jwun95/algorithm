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

while (true) {
	const str = input();
	let answer = "yes";
	if (str == ".") break;

	const stack = [];

	for (let i = 0; i < str.length - 1; i++) {
		if (str[i] == "[" || str[i] == "(") {
			stack.push(str[i]);
		}
		if (str[i] == "]") {
			if (stack.length == 0 || stack[stack.length - 1] != "[") {
				answer = "no";
				break;
			}
			stack.pop();
		}
		if (str[i] == ")") {
			if (stack.length == 0 || stack[stack.length - 1] != "(") {
				answer = "no";
				break;
			}
			stack.pop();
		}
	}
	if (answer == "no") console.log(answer);
	else {
		if (stack.length) {
			console.log("no");
		} else {
			console.log("yes");
		}
	}
}