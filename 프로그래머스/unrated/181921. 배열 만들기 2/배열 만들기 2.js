function solution(l, r) {
    var answer = [];
    const reg = /^[05]+$/;
    
    for (let i = l; i <= r; i++) {
        if (reg.test(i)) {
            answer.push(i);
        }
    }
    return answer.length === 0 ? [-1] : answer;
}