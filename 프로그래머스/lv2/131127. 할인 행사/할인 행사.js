function solution(want, number, discount) {
    var answer = 0;
    
    const wantNum = {};
    const discountNum = {};
    want.forEach((v, idx) => wantNum[v] = number[idx]);
    discount.slice(0, 10).forEach((v) => {
        discountNum[v] ? discountNum[v]++ : discountNum[v] = 1;
    });
    
    for (let i = 9; i < discount.length; i++) {
        if (i !== 9) {
            discountNum[discount[i-10]]--;
            discountNum[discount[i]] ? discountNum[discount[i]]++ : discountNum[discount[i]] = 1;
        };
        let same = 1;
        for (const w of Object.keys(wantNum)) {
            if (discountNum[w] !== wantNum[w]) {
                same = 0;
                break;  
            };
        };
        if (same === 1) {
            answer++;
        };
    };
    
    return answer;
}