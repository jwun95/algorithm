function solution(s) {
    var answer = 0;
    let startCount = 0;
    let count = 0;
    let temp = '';
    let start = '';
    
    for (let i = 0; i < s.length; i++) {
        if (start === '') {
            start = s[i];
            startCount = 1;
        } else {
            if (start === s[i]) {
                startCount++;
            } else {
                count++;
            };
        };
        temp += s[i];
        if (startCount === count) {
            startCount = 0;
            count = 0;
            start = '';
            temp = '';
            answer++;
        }
    };
    
    return temp === '' ? answer : answer + 1;
}