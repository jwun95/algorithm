function solution(number, k) {
    const stack = [];
    
    for (let i = 0; i < number.length; i ++) {
        while (stack.length && k > 0 && stack.at(-1) < number[i]) {
            stack.pop();
            k--;
        } 
        stack.push(number[i]);
    }
    
    return stack.slice(0, stack.length - k).join("");
}