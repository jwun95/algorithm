function solution(prices) {
    const answer = Array(prices.length).fill(0);
    const stack = [[0, prices[0]]];
    const len = prices.length;
    
    for (let i = 1; i < len; i++) {
        while (stack.length && stack[stack.length - 1][1] > prices[i]) {
            const [idx, price] = stack.pop();
            answer[idx] = i - idx;
        };
        stack.push([i, prices[i]]);
    };
    
    for (let a = 0; a < len; a++) {
        if (answer[a] === 0) answer[a] = len - a - 1;
    };
    
    return answer;
}