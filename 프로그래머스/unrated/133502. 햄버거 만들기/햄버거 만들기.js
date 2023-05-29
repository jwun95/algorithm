function solution(ingredient) {
    var answer = 0;
    const stack = [];
    
    ingredient.forEach((i,idx) => {
        stack.push(i);
        if (i === 1 && stack.slice(stack.length - 4).join("") === "1231") {
            stack.splice(stack.length - 4, 4);
            answer += 1;
        };
    });
    
    return answer;
}