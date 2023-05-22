function solution(n, m, section) {
    var answer = 1;
    const rollerRange = [section[0],section[0] + m];
    
    while (section.length !== 0) {
        if (section[0] >= rollerRange[0] && section[0] < rollerRange[1]) {
            section.shift();
        } else {
            rollerRange[0] = section[0];
            rollerRange[1] = section[0] + m;
            answer += 1;
        }
    };
    
    return answer;
}