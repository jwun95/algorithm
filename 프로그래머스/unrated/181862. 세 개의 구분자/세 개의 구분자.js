function solution(myStr) {
    var answer = [];
    let temp = '';
    
    for (let i = 0; i < myStr.length; i ++) {
        if (myStr[i] !== 'a' && myStr[i] !== 'b' && myStr[i] !== 'c') {
            temp += myStr[i];
        } else {
            if (temp !== '') {
                answer.push(temp);
                temp = '';
            }
        }
    }
    
    if (temp !== '') {
        answer.push(temp);
    }
    
    if (answer.length === 0) {
        answer.push('EMPTY');
    }
    
    return answer;
}