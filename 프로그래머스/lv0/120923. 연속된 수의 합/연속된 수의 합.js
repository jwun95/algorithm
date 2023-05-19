function solution(num, total) {
    var answer = [];
    let n = 1;
    let sum = 0;
    
    while (n <= num) {
        answer.push(n);
        sum += n;
        n = n + 1;
    };
    
    for (let i = 0; i < num; i ++) {
        answer[i] = answer[i] + ((total - sum) / num);
    };
    
    return answer;
}