function solution(A, B) {
    var answer = 0;
    const Alist = [...A];
    
    while (Alist.join("") !== B) {
        if (answer === B.length) {
            return -1;
        }
        const val = Alist.pop();
        Alist.splice(0,0,val);
        answer += 1;
    };
    
    return answer;
}