function solution(s)
{
    const stack = [s[0]];

    for (let i = 1; i < s.length; i ++) {
        stack[stack.length - 1] === s[i] ? stack.pop() : stack.push(s[i])
    };

    return stack.length === 0 ? 1 : 0;
}