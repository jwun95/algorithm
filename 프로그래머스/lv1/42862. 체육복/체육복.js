function solution(n, lost, reserve) {
    var answer = 0;
    const clothes = {};
    
    for (let i = 1; i <= n; i ++) {
        if (lost.includes(i) && !reserve.includes(i)) {
            clothes[i] = 0;
        } 
        else if (reserve.includes(i) && !lost.includes(i)) {
            clothes[i] = 2;
        } else {
            clothes[i] = 1;
        }
    };
    
    const cKeys = Object.keys(clothes);
    
    for (let i = 0; i < cKeys.length; i ++) {
        if (clothes[cKeys[i]] === 0 && (clothes[cKeys[i-1]] === 2 || clothes[cKeys[i+1]] === 2)) {
            clothes[cKeys[i]] = 1;
            if (clothes[cKeys[i-1]] === 2) {
                clothes[cKeys[i-1]] = 1;
            } else {
                clothes[cKeys[i+1]] = 1;
            }
        }
    };
    
    for (let i = 0; i < cKeys.length; i ++) {
        if (clothes[cKeys[i]] >= 1) {
            answer++;
        }
    };
    
    return answer;
}