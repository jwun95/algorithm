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
	.map((v) => parseInt(v));

const area = [];
for (let i = 0; i < N; i++) {
	area.push(
		input()
			.trim()
			.split("")
			.map((v) => parseInt(v))
	);
}

const direction = [
	[0, 1],
	[0, -1],
	[1, 0],
	[-1, 0],
];

function bfs() {
	const visited = Array.from(Array(N), () => Array.from(Array(M), () => Array(2).fill(0)));
	const queue = [[0, 0, 0]];
	visited[0][0][0] = 1;
	let count = 0;
	while (count < queue.length) {
		[x, y, c] = queue[count];

		if (x === N - 1 && y === M - 1) return visited[x][y][c];

		for (d of direction) {
			n_x = x + d[0];
			n_y = y + d[1];

			if (0 <= n_x && n_x < N && 0 <= n_y && n_y < M) {
				if (area[n_x][n_y] === 1 && c === 0) {
					visited[n_x][n_y][1] = visited[x][y][0] + 1;
					queue.push([n_x, n_y, 1]);
				}
				if (area[n_x][n_y] === 0 && visited[n_x][n_y][c] === 0) {
					visited[n_x][n_y][c] = visited[x][y][c] + 1;
					queue.push([n_x, n_y, c]);
				}
			}
		}
		count++;
	}
	return -1;
}

console.log(bfs());