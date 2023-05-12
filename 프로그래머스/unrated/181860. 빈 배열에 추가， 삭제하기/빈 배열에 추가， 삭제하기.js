function solution(arr, flag) {
    var answer = [];
    
    for (let i = 0; i < arr.length; i ++) {
        if (flag[i]) {
            for (let k = 0; k < arr[i] * 2; k ++) {
                answer.push(arr[i]);
            }
        } else {
            for (let t = 0; t < arr[i]; t ++) {
                answer.pop();
            }
        }
    }
    
    return answer;
}