function solution(n) {
    var answer = '';
    const rules = [4, 1, 2];
    
    while (n > 0) {
        answer = rules[n % 3] + answer;
        n = parseInt((n-1) / 3);
    }
    
    return answer;
}