function calculater(term, privacy, today) {
    const gap = [0,0,0];
    const pri = privacy.split(".").map((v) => parseInt(v));
    const to = today.split(".").map((v) => parseInt(v));
    
    for (let i = 0; i < 3; i++) {
        gap[i] = to[i] - pri[i];  
    };
    
    const diff = (gap[0] * 28 * 12) + (gap[1] * 28) + gap[2];
    return term * 28 <= diff ? true : false;
};

function solution(today, terms, privacies) {
    var answer = [];
    
    const termList = {};
    
    terms.forEach((v) => {
        const [a, b] = v.split(" ");
        termList[a] = parseInt(b);
    });
    privacies.forEach((v, idx) => {
        const [date, type] = v.split(" ");
        if (calculater(termList[type], date, today)) {
            answer.push(idx + 1); 
        };
    });
    
    return answer;
}