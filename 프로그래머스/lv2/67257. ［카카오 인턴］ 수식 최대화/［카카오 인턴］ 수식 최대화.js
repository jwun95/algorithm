function getPermutation(arr, selectNumber) {
    if (selectNumber === 1) return arr.map((v) => [v]);
    const result = [];
    
    arr.forEach((fixed, idx, origin) => {
        const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
        const permutation = getPermutation(rest, selectNumber - 1);
        const attached = permutation.map((el) => [fixed, ...el]);
        result.push(...attached);
    });
    return result;
}

function calculater(ex, sign) {
    const result = [ex[0]];
    
    for (let i = 1; i < ex.length; i++) {
        if (ex[i][0] === sign) {
            const front = result.pop();
            let value = 0;
            if (sign === '*') {
                value = Number(front.slice(1)) * Number(ex[i].slice(1));
                value = front[0] + value;
            }  else if (sign === '-') {
                if (front[0] === '-') {
                    value = Number(front) + Number(ex[i]);
                } else {
                    value = Number(front.slice(1)) + Number(ex[i]);
                    value = front[0] + value;
                }
            } else {
                value = Number(front.slice(1)) + Number(ex[i].slice(1));
                value = front[0] + value;
            }
            result.push(String(value));
        } else {
            result.push(ex[i]);
        }
    };
    return result;
}

function solution(expression) {
    let curr = '+';
    const digit = /[0-9]/;
    let result = [];
    const answer = [];
    
    [...expression].forEach((v) => {
        if (digit.test(v)) {
            curr += v;
        } else {
            result.push(curr);
            curr = v;
        }
    });
    
    result.push(curr);
    getPermutation(['+','-','*'], 3).forEach((v) => {
        let temp = [...result];
        for (const sign of v) {
            temp = calculater(temp, sign);
        };
        answer.push(Math.abs(temp[0].slice(1)));
    })
    return Math.max(...answer);
}