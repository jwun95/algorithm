function solution(numbers) {
    var answer = 0;
    let temp = '';
    
    const words = {'zero': 0,
        'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6,
        'seven' : 7, 'eight': 8, 'nine': 9
    };
    
    [...numbers].forEach((v) => {
        temp += v;
        if (temp in words) {
            answer += String(words[temp]);
            temp = '';
        }
    })
    
    return Number(answer);
}