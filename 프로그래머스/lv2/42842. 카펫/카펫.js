function solution(brown, yellow) {
    var answer = [];
    
    for (let i = 1; i <= yellow; i++) {
        if (yellow % i === 0) {
            const d = yellow / i;
            if ((d * 2) + (i * 2) === brown - 4) {
                answer = [d + 2, i + 2];
                break;
            }
        };
    };
    
    return answer;
}