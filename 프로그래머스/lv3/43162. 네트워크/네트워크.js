function solution(n, computers) {
    var answer = 0;
    const visited = Array(n).fill(false);
    
    function dfs(num) {
        for (let i = 0; i < n; i++) {
            if (computers[num][i] && !visited[i]) {
                visited[i] = true;
                dfs(i);
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            visited[i] = true;
            dfs(i);
            answer++;
        }
    }
    
    return answer;
}