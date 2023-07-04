function solution(storey) {
    var answer = 0;
    let flag = 0;
    const num = [...String(storey)].reverse().map((v) => Number(v));
    
    for (let i = 0; i < num.length - 1; i++) {
        const curr = flag + num[i];
        if (curr === 10) {
            flag = 1;
        } else if (curr === 5) {
            if (num[i + 1] + 1 > 5) {
                answer += 10 - curr;
                flag = 1;
            } else {
                answer += curr;
                flag = 0;
            }
        } else if (curr > 5) {
            answer += 10 - curr;
            flag = 1;
        } else {
            answer += curr;
            flag = 0; 
        }
    }
    const lastValue = num[num.length - 1] + flag;
    
    if (lastValue === 10) {
        return answer + 1;
    } else if (lastValue > 5) {
        return answer + 10 - lastValue + 1;
    } else {
        return answer + lastValue;
    }
}