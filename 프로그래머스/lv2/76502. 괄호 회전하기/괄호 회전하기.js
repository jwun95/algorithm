function solution(s) {
    var answer = 0;
    let str = s;
    
    for (let i = 0; i < s.length; i++) {
        const stack = [];
        let count = 0;
        while (count < str.length) {
            if (str[count] === '\}' && stack[stack.length - 1] === '\{') {
                stack.pop();
            } else if (str[count] === '\]' && stack[stack.length - 1] === '\['){
                stack.pop();               
            } else if (str[count] === '\)' && stack[stack.length - 1] === '\(') {
                stack.pop(); 
            } else {
                stack.push(str[count]);
            };
            count++;
        };
        if (stack.length === 0) {
            answer++;
        };
        str = str.slice(1) + str[0];
    };
    
    return answer;
}