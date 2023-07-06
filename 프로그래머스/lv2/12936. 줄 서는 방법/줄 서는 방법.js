function solution(n, k) {
    var answer = [];
    const order = Array.from(Array(n), (_, i) => i+1);
    let nth = k - 1;
    
    while (order.length) {
        if (nth === 0) {
            answer.push(...order);
            break;
        }
        const fact = factorial(order.length - 1)
        const idx = Math.floor(nth / fact);
        answer.push(order[idx]);
        order.splice(idx, 1);
        nth = nth % fact;
    }
    
    return answer;
}

function factorial(n) {
    let count = 1;
    for (let i = 2; i <= n; i++) {
        count *= i;
    }
    return count;
}