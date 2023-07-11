function solution(n) {
    var answer = 0;
    
    function check (v, r) {
        for (let j = 1; j < r; j++) {
            if (v[j] === v[r]) return false;
            if (Math.abs(j - r) === Math.abs(v[j] - v[r])) return false;
        }
        return true;
    }
    
    function dfs (v, row) {
        if (row === n) return answer++;
        
        for (let k = 1; k <= n; k ++) {
            v[row + 1] = k;
            if (check (v, row + 1)) dfs(v, row + 1);
        }
    }
    
    for (let i = 1; i <= n; i ++) {
        const visited = Array.from(Array(n + 1), () => 0);
        visited[1] = i;
        dfs(visited, 1);
    }
    
    return answer;
}