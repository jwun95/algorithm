function solution(N, road, K) {
    var answer = 0;
    const village = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
    
    road.forEach((v) => {
        village[v[0]][v[1]] = village[v[0]][v[1]] ? Math.min(v[2], village[v[0]][v[1]]) : v[2];
        village[v[1]][v[0]] = village[v[1]][v[0]] ? Math.min(v[2], village[v[1]][v[0]]) : v[2];
    });
    
    function dfs(i, n) {
        
        for (let k = 2; k < N + 1; k ++) {
            if (village[i][k]) {
                if (!village[1][k]) {
                    village[1][k] = village[i][k] + n;
                    dfs(k, village[1][k]);
                } else {
                    if (village[1][k] > n + village[i][k]) {
                        village[1][k] = n + village[i][k];
                        dfs(k, village[1][k]);
                    }
                }
            }
        }
    }
    
    for (let i = 2; i < N + 1; i ++) {
        if (village[1][i]) {
            dfs(i, village[1][i]);
        };
    };
    
    return village[1].filter((v) => v <= K).length - 1;
}