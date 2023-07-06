function solution(data, col, row_begin, row_end) {
    
    const accu = [];
    
    data.sort((x, y) => {
        if (x[col - 1] === y[col - 1]) return y[0] - x[0];
        else return x[col - 1] - y[col - 1];
    });
    
    for (let i = row_begin - 1; i <= row_end - 1; i++) {
        let count = 0;
        data[i].forEach((d) => {
            count += d % (i + 1);
        })
        accu.push(count);
    };
    
    const answer = accu.reduce((a, c) => a ^ c);
    
    return answer;
}