function solution(n) {
    var answer = 0;
    
    for (let i = 1; i <= n; i ++) {
        answer = answer + 1;
        while (answer % 3 === 0 || String(answer).includes('3')) {
            answer += 1;
        }
    }
    
    return answer;
}