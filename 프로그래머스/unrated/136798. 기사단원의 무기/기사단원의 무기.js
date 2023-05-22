function solution(number, limit, power) {
    var answer = 0;
    
    for (let i = 1; i <= number; i++) {
        let count = 0, divider = 1;
        while (divider <= Math.sqrt(i)) {
            if (i % divider === 0) {
                count = divider === Math.sqrt(i) ? count + 1 : count + 2;
            };
            divider++;
        };
        answer = count <= limit ? answer + count : answer + power;
    };
    
    return answer;
}