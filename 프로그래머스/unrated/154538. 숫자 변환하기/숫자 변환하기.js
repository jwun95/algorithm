function solution(x, y, n) {
    var answer = 0;
    
    if (x === y) return 0;
    const dp = {};
    let data = [x];
    dp[x] = 0;
    
    while (data.length) {
        const newData = [];
        for (const d of data) {
            for (const e of [d*2, d*3, d+n]) {
                if (e > y || dp[e]) continue;
                if (e === y) {
                    return dp[d] + 1;
                };
                newData.push(e);
                dp[e] = dp[d] + 1;
            }
        };
        data = newData;
    };
    return -1;
}