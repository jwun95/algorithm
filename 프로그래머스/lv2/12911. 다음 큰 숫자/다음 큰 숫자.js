function solution(n) {
    var answer = n;
    const num = [...n.toString(2)].filter((v) => v === '1').length;
    
    while (true) {
        const next = [...(answer+1).toString(2)].filter((v) => v === '1').length;
        answer++;
        
        if (num === next) {
            break;
        };
    };
    
    return answer;
}