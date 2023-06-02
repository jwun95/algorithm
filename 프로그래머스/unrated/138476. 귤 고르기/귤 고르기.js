function solution(k, tangerine) {
    var answer = 0;
    const mandarin = {};
    let count = 0;
    
    tangerine.forEach((v) => {
        mandarin[v] ? mandarin[v]++ : mandarin[v] = 1; 
    });
    const sorted = Object.values(mandarin).sort((x,y) => y - x);
    for (let i = 0; i < sorted.length; i++) {
        count += sorted[i];
        answer++;
        if (count >= k) {
            break;
        }
    };
    
    return answer;
}