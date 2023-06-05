function getPermutations(arr, selectNumber) {
    if (selectNumber === 1) return arr.map((el) => [el]);
    const results = [];
    
    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        const permutations = getPermutations(rest, selectNumber - 1);
        const attached = permutations.map((el) => [fixed, ...el]);
        results.push(...attached);
    });
    
    return results;
}

function solution(k, dungeons) {
    var answer = -1;
    
    const arr = getPermutations(dungeons, dungeons.length);
    arr.forEach((v) => {
        let count = 0;
        let temp = k;
        v.forEach((a) => {
            if (a[0] <= temp) {
                count += 1;
                temp -= a[1];
            };
        });
        answer = Math.max(answer, count);
    });
    
    return answer;
}