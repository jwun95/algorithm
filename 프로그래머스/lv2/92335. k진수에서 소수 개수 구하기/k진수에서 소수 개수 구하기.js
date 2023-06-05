function solution(n, k) {
    var answer = 0;
    
    const trans = n.toString(k);
    let temp = '';
    const arr = [];
    
    for (let i = 0; i < trans.length; i++) {
        if (temp !== '' && trans[i] === '0') {
            arr.push(temp);
            temp = '';
        } else {
            temp += trans[i];
        }
    };
    
    if (temp !== '') {
        arr.push(temp);
    };
    
    const ex = [];
    
    arr.forEach((v) => {
        if (parseInt(v) >= 2) {
            let count = 1;
            let flag = 0;
            if (ex.includes(parseInt(v))) {
                answer++;
                return false;
            }
            while (count <= Math.sqrt(parseInt(v))) {
                if (parseInt(v) % count === 0 && count !== 1 && count !== parseInt(v)) {
                    flag = 1;
                    break;
                } else {
                    count++;
                }
            };
            if (flag === 0) {
                ex.push(parseInt(v));
                answer++;
            }
        }
    });
    
    return answer;
}