function calculater(n) {
    if (n % 2 === 0) return n / 2;
    return n * 3 + 1;
}

function solution(k, ranges) {
    var answer = [];
    const sub = [[0, k]];
    let count = 1;
    
    while (k !== 1) {
        const result = calculater(k);
        sub.push([count, result]);
        k = result;
        count++;
    }
    
    for (r of ranges) {
        const start = r[0] + 1;
        const end = count + r[1];
        let result = 0;
        
        if (start > end) {
            answer.push(-1.0);
            continue;
        };
        
        for (let i = start; i < end; i ++) {
            result += (sub[i][1] + sub[i - 1][1]) / 2;
        }
        answer.push(result.toFixed(1));
    }
    
    
    return answer;
}