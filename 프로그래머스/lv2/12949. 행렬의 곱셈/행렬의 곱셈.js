function solution(arr1, arr2) {
    var answer = [];
    for (let i = 0; i < arr1.length; i++) {
        const arr = [];
        for (let j = 0; j < arr2[0].length; j++) {
            let hap = 0;
            for (let k = 0; k < arr2.length; k++) {
                hap += arr1[i][k] * arr2[k][j];
            };
            arr.push(hap);
        }
        answer.push(arr);
    };
    
    return answer;
}