function solution(n, words) {
    let answer = [0,0];
    const stack = [words[0]];
    
    for (let i = 1; i < words.length; i++) {
        if (stack.includes(words[i])) {
            answer = [(i % n) + 1, Math.floor(i / n) + 1];
            break;
        } else if (stack[stack.length - 1][stack[stack.length - 1].length - 1] !== words[i][0]) {
            answer = [(i % n) + 1, Math.floor(i / n) + 1];
            break;
        } else {
            stack.push(words[i]);
        }
    };

    return answer;
}