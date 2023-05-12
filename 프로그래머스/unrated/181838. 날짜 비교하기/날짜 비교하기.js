function solution(date1, date2) {
    var answer = 0;
    
    for (let i = 0; i < 3; i ++) {
        if (date1[i] > date2[i]) {
            return 0;
        } 
        if (date1[i] < date2[i]) {
            return 1;
        }
    }
    return answer;
}