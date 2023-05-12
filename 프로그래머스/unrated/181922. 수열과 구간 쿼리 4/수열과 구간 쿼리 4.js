function solution(arr, queries) {
    var answer = [...arr];
    
    queries.forEach((v) => {
        for (let i = v[0]; i <= v[1]; i++) {
            if (i % v[2] === 0) {
                answer[i] += 1;
            }
        }
    });
    
    return answer;
}