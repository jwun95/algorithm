function solution(cacheSize, cities) {
    var answer = 0;
    const stack = [];
    
    cities.forEach((v) => {
        if (stack.includes(v.toLowerCase())) {
            answer += 1;
            stack.splice(stack.indexOf(v.toLowerCase()), 1);
            stack.push(v.toLowerCase());
        } else {
            stack.push(v.toLowerCase());
            answer += 5;
        };
        if (stack.length > cacheSize) {
            stack.shift();
        }
    });
    
    return answer;
}