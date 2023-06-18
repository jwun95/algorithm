function solution(n) {
    const num = Array(n+1).fill(0);
    num[0] = 1; num[1] = 1;
    
    for (let i = 2; i <= n; i++) {
        num[i] = (num[i-2] + num[i-1]) % 1_000_000_007;
    };

    return num[n];
}