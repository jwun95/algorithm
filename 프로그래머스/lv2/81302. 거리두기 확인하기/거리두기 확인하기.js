function solution(places) {
    var answer = [];
    
    const direction = [[0,1],[1,0],[-1,0],[0,-1]];
    
    function dfs(r, c, v, n, p) {
        if (n === 3) return true;
        for (let i = 0; i < 4; i++) {
            const nextR = r + direction[i][0];
            const nextC = c + direction[i][1];
            if (nextR >= 0 && nextR < 5 && nextC >= 0 && nextC < 5 && !v[nextR][nextC] && p[nextR][nextC] !== 'X') {
                if (p[nextR][nextC] === 'P') return false;
                else {
                    v[nextR][nextC] = true;
                    const result = dfs(nextR, nextC, v, n+1, p);
                    if (!result) return false;
                }
            }
        }
        return true;
    }
    
    
    places.forEach((place) => {
        const visited = Array.from(Array(5), () => Array(5).fill(false));
        let flag = 0;
        for (let row = 0; row < 5; row++) {
            for (let column = 0; column < 5; column++) {
                if (place[row][column]==='P') {
                    visited[row][column] = true;
                    const result = dfs(row, column, visited, 1, place);
                    if (!result) {
                        flag = 1;
                        break;
                    }
                }
            }
            if (flag === 1) {
                answer.push(0);
                break;
            }
        }
        if (flag === 0) {
            answer.push(1);
        }
    })
    
    return answer;
}