function solution(array) {
    var answer = 0;
    
    [...array.join("")].forEach((v) => {
        if (v === '7') {
            answer += 1;
        }
    })
    
    return answer;
}