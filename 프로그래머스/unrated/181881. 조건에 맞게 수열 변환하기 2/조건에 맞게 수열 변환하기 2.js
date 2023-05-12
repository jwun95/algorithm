function solution(arr) {
    var answer = 0;
    let temp = [];
    
    while (temp.join("") !== arr.join("")) {
        temp = [...arr];
        arr = arr.map((v) => {
            if (v >= 50 && v % 2 === 0) {
                return v / 2;
            } else if (v < 50 && v % 2 !== 0) {
                return v * 2 + 1;
            } else {
                return v;
            }
        })
        answer += 1;
    }
    
    return answer - 1;
}