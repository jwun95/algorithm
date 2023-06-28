function solution(maps) {
    const answer = [];
    const visited = Array.from(Array(maps.length), () => Array(maps[0].length).fill(false));
    const direction = [[0,1], [0, -1], [1, 0], [-1, 0]];
    
    function dfs(row, column) {
        answer[answer.length -1] += Number(maps[row][column]);
        for (let i = 0; i < 4; i ++) {
            const nextY = row + direction[i][0];
            const nextX = column + direction[i][1];
            if (nextY >= 0 && nextY < maps.length && nextX >= 0 && nextX < maps[0].length && !visited[nextY][nextX] && maps[nextY][nextX] !== 'X') {
                visited[nextY][nextX] = true;
                dfs(nextY, nextX);
            }
        }
    }
    for (let y = 0; y < maps.length; y++) {
        for (let x = 0; x < maps[0].length; x++) {
            if (maps[y][x] !== "X" && !visited[y][x]) {
                answer.push(0);
                visited[y][x] = true;
                dfs(y, x);
            }
        }
    }
    
    return answer.length ? answer.sort((x,y) => x - y) : [-1];
}