function solution(m, n, board) {
  var answer = 0;
  let boards = [];

  board.forEach((v) => {
    boards.push([...v]);
  });
	let stack = [];
	count = 0;

  while (true) {
    for (let row = 0; row < m - 1; row++) {
      for (let column = 0; column < n - 1; column++) {
        const a = boards[row][column];
        const b = boards[row + 1][column];
        const c = boards[row][column + 1];
        const d = boards[row + 1][column + 1];

        if (a && a === b && (a === c) & (a === d)) {
          stack.push([row, column]);
          stack.push([row + 1, column]);
          stack.push([row, column + 1]);
          stack.push([row + 1, column + 1]);
        }
      }
		}
    if (stack.length === 0) {
			return answer;
    } else {
      while (stack.length !== 0) {
        const [r, c] = stack.pop();
        if (boards[r][c] !== false) {
          boards[r][c] = false;
          answer++;
        }
      }
    }
    for (let k = 0; k < n; k++) {
      for (let j = m - 1; j >= 0; j--) {
        if (boards[j][k] === false) {
          for (let u = j - 1; u >= 0; u--) {
            if (boards[u][k]) {
              boards[j][k] = boards[u][k];
              boards[u][k] = false;
              break;
            }
          }
        }
      }
		}
  }
}