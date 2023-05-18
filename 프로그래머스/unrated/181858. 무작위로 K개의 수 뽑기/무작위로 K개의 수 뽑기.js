function solution(arr, k) {
    var answer = [];
    for (let i = 0; i < arr.length; i++) {
        !answer.includes(arr[i]) ? answer.push(arr[i]) : undefined;
        if (answer.length === k) {
            break;
        }
    };
    
    return answer.length === k ? answer : [...answer, ...Array(k - answer.length).fill(-1)];
}