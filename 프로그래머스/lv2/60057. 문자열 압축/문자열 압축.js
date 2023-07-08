function solution(s) {
    var answer = [];
    
    function calculater(n, st) {
        let result = '';
        let curr = st;
        let now = '';
        let count = 0;
        for (let k = 0; k <= s.length; k = k + n) {
            now = s.slice(k, k + n)
            if (now === curr) {
                count += 1;
            } else {
                if (count < 2) result += curr;
                else {
                    result += count + curr;
                }
                curr = now;
                count = 1;
            }
        }
        if (count > 1) return result + count + curr;
        else return result + curr;
    }
    
    for (let i = 1; i <= Math.floor(s.length / 2); i++) {
        const standard = s.slice(0, i);
        const result = calculater(i, standard);
        answer.push(result.length);
    }
    
    return answer.length ? Math.min(...answer) : 1;
}