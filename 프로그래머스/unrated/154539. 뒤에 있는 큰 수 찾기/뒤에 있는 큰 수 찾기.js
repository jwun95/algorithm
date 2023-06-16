function solution(numbers) {
    const results = Array(numbers.length).fill(-1);
    const stack = [];
    
    for (let i = 0; i < numbers.length; i++) {
        while (stack.length !== 0 && numbers[i] > numbers[stack.at(-1)]) {
            results[stack.pop()] = numbers[i];
        }
        stack.push(i);
    };
    
    return results;
}