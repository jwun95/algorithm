function solution(emergency) {
    var answer = [];
    const copyArr = [...emergency];
    
    copyArr.sort((x,y) => y-x);
    
    emergency.forEach((v) => {
        answer.push(copyArr.indexOf(v) + 1);
    });
    
    return answer;
}