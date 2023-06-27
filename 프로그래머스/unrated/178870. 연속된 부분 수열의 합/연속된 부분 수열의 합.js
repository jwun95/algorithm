function solution(sequence, k) {
    var curridx = [0, 0];
    let curr = 0;
    const answer = [];
    
    for (let i = 0; i <= sequence.length; i++) {
        if (curr === k) {
            answer.push([...curridx, curridx[1] - curridx[0]]);
        };
        if (i === sequence.length) break;
        curr = curr + sequence[i];
        curridx[1] = i;
        
        while (curr > k) {
            curr -= sequence[curridx[0]];
            curridx[0] += 1;
        };
    };
    
    answer.sort((x, y) => x[2] - y[2]);
    
    return [answer[0][0], answer[0][1]];
}