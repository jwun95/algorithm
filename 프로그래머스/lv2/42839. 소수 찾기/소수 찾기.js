function decimalCheck(num) {
    if (num === 1 || num === 0) {
        return false;
    } else if (num === 2 || num === 3) {
        return true;
    } else {
        for (let i = 2; i <= num / 2; i++) {
            if (num % i === 0) return false;
        }
    };
    return true;
}

function getPermutations(arr, selectNumber) {
    if (selectNumber === 1) return arr.map((a) => [a]);
    const result = [];
    
    arr.forEach((a, idx, origin) => {
        const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
        const permutations = getPermutations(rest, selectNumber - 1);
        const attached = permutations.map((el) => [a, ...el]);
        result.push(...attached);
    })
    return result;
}


function solution(numbers) {
    var answer = 0;
    const results = [];
    
    for (let i = numbers.length; i > 0; i--) {
        results.push(...getPermutations([...numbers], i))
    }
    
    const duplication = new Set(results.map((v) => Number(v.join(""))));
    [...duplication].forEach((v) => {
        decimalCheck(v) ? answer++ : undefined;
    });
    
    console.log(decimalCheck(1))
    
    return answer;
}