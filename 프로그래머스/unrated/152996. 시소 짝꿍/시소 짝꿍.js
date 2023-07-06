function solution(weights) {
    var answer = 0;
    const hash = {};
    const method = [1, 3/2, 4/3, 2];
    
    weights.sort((x,y) => y - x);
    
    weights.forEach((weight) => {
        let temp;
        for (const m of method) {
            temp = weight * m;
            answer += hash[temp] ? hash[temp] : 0;
        }
        hash[weight] ? hash[weight]++ : hash[weight] = 1;
    })
    
    return answer;
}