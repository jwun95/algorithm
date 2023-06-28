function solution(n) {
    const answer = Array.from(Array(n), (a, b) => Array(b+1).fill(0));
    let count = 1;
    let row = 0;
    let column = 0;
    let flag = 0;
    
    while (n > 0) {
        if (flag === 0) {
            for (let i = 0; i < n; i++) {
                answer[row++][column] = count;
                count++;
            }
            column += 1;
            row -= 1;
            flag = 1;
            n -= 1;
        } else if (flag === 1) {
            for (let i = 0; i < n; i++) {
                answer[row][column++] = count;
                count++;
            }
            flag = 2;
            column -= 2;
            row -= 1;
            n -= 1;
        } else {
            for (let i = 0; i < n; i++) {
                answer[row--][column--] = count;
                count++;
            }
            flag = 0;
            column += 1;
            row += 2;
            n -= 1;
        }
    }
    const result = [];
    
    answer.forEach((a) => {
        a.forEach((v) => result.push(v));
    });
    
    return result;
}