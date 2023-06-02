function solution(n) {
    const pibo = Array(n+1).fill(1);
    
    for (let i = 2; i <= n; i++) {
        pibo[i] = (pibo[i - 1] + pibo[i - 2]) % 1234567;
    };
    
    return pibo[n];
}