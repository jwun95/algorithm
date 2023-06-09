function solution(msg) {
    const temp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const words = {};
    temp.forEach((v, idx) => {
        words[v] =  idx + 1;
    });
    
    let str = '';
    let index = 27;
    const answer = [];
    
    const lastWord = [...msg].reduce((x,y) => {
        str = x + y;
        if (!words[str]) {
            words[str] = index;
            index++;
            answer.push(words[x]);
            return y;
        } else {
            return str;
        };
    });
    answer.push(words[lastWord]);
    
    return answer;
}