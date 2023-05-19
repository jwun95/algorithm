function solution(lines) {
    var answer = 0;
    const ls = [...lines];
    const spreadArray = [...ls[0], ...ls[1], ...ls[2]]
    let gap = 0;
    
    const rangeArray = new Array(Math.max(...spreadArray) - Math.min(...spreadArray)).fill(0);
    
    if (Math.min(...spreadArray) < 0) {
        gap = 0 - (Math.min(...spreadArray))
    };
    
    ls.forEach((l) => {
        for (let i = l[0]+gap; i < l[1]+gap; i ++) {
            rangeArray[i] += 1;
        }
    });
    
    rangeArray.forEach((v) => {
        if (v >= 2) {
            answer += 1;
        } 
    });
    
    return answer;
}