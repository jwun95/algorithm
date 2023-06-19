function solution(numbers) {
    var answer = [];
    const test = '1234';
    
    numbers.forEach((num) => {
        if (num % 2 !== 0) {
            const trans = '0' + num.toString(2);
            let temp = '';
            for (let i = trans.length - 1; i >= 0; i--) {
                if (trans[i] === '0') {
                    temp = trans.substring(0, i) + '10' + trans.substring(i+2);
                    break;
                };
            };
            answer.push(parseInt(temp, 2));
        } else {
            answer.push(num + 1);
        }
    });
    
    return answer;
}