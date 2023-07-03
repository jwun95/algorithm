function solution(k, d) {
    var answer = 0;
    let first = 0;
    
    while (first <= d) {
        let limit = (d**2) - (first**2);
        limit = Math.floor(Math.sqrt(limit));
        answer += Math.floor(limit / k) + 1;
        first += k;
    };
    
    return answer;
}