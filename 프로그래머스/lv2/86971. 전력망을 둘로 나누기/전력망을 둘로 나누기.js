function solution(n, wires) {
    var answer = [];
    const tree = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
    let count = 0;
    
    wires.forEach((wire) => {
        tree[wire[0]][wire[1]] = 1;
        tree[wire[1]][wire[0]] = 1;
    });
    
    function dfs(i, v) {
        
        count += 1;
        
        for (let k = 1; k < n + 1; k ++) {
            if (tree[i][k] && !v[k]) {
                v[k] = true;
                dfs(k, v);
            };
        }
    }
    
    wires.forEach((wire) => {
        tree[wire[0]][wire[1]] = 0;
        tree[wire[1]][wire[0]] = 0;
        const visited = Array(n + 1).fill(false);
        visited[1] = true;
        count = 0;
        dfs(1, visited);
        answer.push(Math.abs(n - (count * 2)));
        tree[wire[0]][wire[1]] = 1;
        tree[wire[1]][wire[0]] = 1;
    })
    
    return Math.min(...answer);
}