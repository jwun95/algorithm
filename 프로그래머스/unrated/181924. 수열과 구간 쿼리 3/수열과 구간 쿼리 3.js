function solution(arr, queries) {
    var answer = arr;
    let temp = 0;
    
    queries.forEach((v) => {
        temp = answer[v[0]];
        answer[v[0]] = answer[v[1]];
        answer[v[1]] = temp;
    })
    
    return answer;
}