function solution(sides) {
    var answer = 0;
    
    const maxValue = Math.max(...sides);
    const minValue = Math.min(...sides);
    
    // 다른 한변이 제일 긴경우
    for (let i = maxValue + 1; i < maxValue + minValue; i ++) {
        answer += 1;
    };
    
    // maxValue 값이 제일 긴경우
    for (let k = maxValue - minValue; k < maxValue; k ++) {
        answer += 1;
    }
    
    return answer;
}