function solution(n, t, m, p) {
    var answer = '';
    let str = '';
    let order = p - 1;
    let num = 0;
    
    while (answer.length < t) {
        str += num.toString(n);
        if (str[order]) {
            answer += str[order];
            order = order + m;
        };
        num++;
    };
    
    return answer.toUpperCase();
}