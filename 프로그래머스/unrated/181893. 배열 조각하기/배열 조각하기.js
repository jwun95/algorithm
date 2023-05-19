function solution(arr, query) {
    var answer = [...arr];
    
    query.forEach((q, idx) => {
        answer = idx % 2 === 0 ? answer.slice(0, q + 1) : answer.slice(q);
    });
    
    return answer;
}