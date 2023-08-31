function getScore (type, arr) {
    let answer = 0;
    if (type === 0) {
        answer = arr.reduce((b,c) => b + c, 0);
    } else if (type === 1) {
        answer += arr[0] * 5;
        answer += arr[1] + arr[2]; 
    } else {
        answer += arr[0] * 25;
        answer += arr[1] * 5;
        answer += arr[2];
    }
    return answer;
}

function solution(picks, minerals) {
    var answer = 0;
    const limit = Math.min(picks.reduce((acc, curr) => acc + curr, 0) * 5, minerals.length);
    const count = [];
    
    for (let i = 0; i < limit; i = i + 5) {
        const temp = minerals.slice(i, i + 5);
        const num = [0,0,0];
        temp.forEach((v) => {
            if (v === "diamond") num[0] = num[0] + 1;
            else if (v === "iron") num[1] = num[1] + 1;
            else num[2] = num[2] + 1;
        });
        count.push(num);
    };
    count.sort((x,y) => x[0] - y[0] || x[1] - y[1] || x[2] - y[2]).reverse();
    let num = 0;
    
    count.forEach((c) => {
        while (picks[num] === 0 && num < 3) {
            num++;
        }
        answer += getScore(num, c);
        picks[num] = picks[num] - 1;
    })
    
    return answer;
}