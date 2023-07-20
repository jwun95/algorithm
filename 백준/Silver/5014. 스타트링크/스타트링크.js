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

const [F, S, G, U, D] = input()
  .trim()
  .split(" ")
  .map((v) => Number(v));

const building = Array(F + 1).fill(0);
building[S] = 1;
console.log(bfs([[S, 0]]));

function bfs(queue) {
  while (queue.length) {
    const [curr, idx] = queue.shift();
    if (curr === G) return idx;

    for (const next of [curr + U, curr - D]) {
			if (next > 0 && next <= F && !building[next]) {
				building[next] = 1;
        queue.push([next, idx + 1]);
      }
    }
	}
	return "use the stairs";
}
