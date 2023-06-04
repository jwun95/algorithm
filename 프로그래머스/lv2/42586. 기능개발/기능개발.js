function solution(progresses, speeds) {
    var answer = [];
    let day = (100 - progresses[0]) % speeds[0] === 0 ? (100 - progresses[0]) / speeds[0] : Math.floor((100 - progresses[0]) / speeds[0]) + 1;
    let sum = 0;

    while (speeds.length !== 0) {
        if (progresses[0] + speeds[0] * day >= 100) {
            progresses.shift();
            speeds.shift();
            sum++;
        } else {
            if (sum !== 0) {
                answer.push(sum);
                sum = 0;
            };
            day = (100 - progresses[0]) % speeds[0] === 0 ? (100 - progresses[0]) / speeds[0] : Math.floor((100 - progresses[0]) / speeds[0]) + 1;
        };
    };
    
    if (sum !== 0) {
        answer.push(sum);
        sum = 0;
    };
    
    
    return answer;
}