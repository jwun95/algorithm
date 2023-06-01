function solution(n) {
    const pibo = [0, 1];
    
    for (let i = 2; i <= n; i++) {
        pibo[i] = (pibo[i - 2] + pibo[i - 1])  % 1234567;
    };
    
    return pibo[n];
}