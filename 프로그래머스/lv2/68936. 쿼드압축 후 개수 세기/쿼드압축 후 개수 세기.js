function solution(arr) {
    var answer = [0, 0];
    
    function check(row, column, n) {
        let flag = true;
        for (let y = row; y < row + n; y++) {
            for (let x = column; x < column + n; x++) {
                if (arr[row][column] !== arr[y][x]) {
                    flag = false;
                    break;
                }
            };
        };
        if (flag) return answer[arr[row][column]]++;
        else {
            check(row, column, n / 2);
            check(row + n / 2, column, n / 2);
            check(row, column + n / 2, n / 2);
            check(row + n / 2, column + n / 2, n / 2);
        }
    }
    
    check(0, 0, arr.length);
    
    return answer;
}