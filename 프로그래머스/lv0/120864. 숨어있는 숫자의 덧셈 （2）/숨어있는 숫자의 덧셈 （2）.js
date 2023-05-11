function solution(my_string) {
    var answer = 0;
    const numReg = /[0-9]/;
    let temp = '';
    
    [...my_string].forEach((v) => {
       if (numReg.test(v)) {
           temp += v;
       } else {
            answer += Number(temp);
            temp = '';
       }
    });
    
    if (temp !== '') {
        answer += Number(temp);
    } 
    
    return answer;
}