function solution(arr) {
    var answer = arr;
    const row = arr.length;
    const column = arr[0].length
    
    if (row > column) {
        answer = arr.map((v) => {
            return [...v, ...Array(row - column).fill(0)];
        })
    } else if (row < column) {
        for (let i = 0; i < column - row; i ++) {
            arr.push(Array(column).fill(0));
        }
    }
    
    return answer;
}