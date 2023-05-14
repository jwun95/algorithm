function solution(numlist, n) {
    var answer = [];
    numlist.sort((x,y) => x- y);
    
    const sorted = numlist.map((v, idx) => {
        return [Math.abs(n-v), idx];
    });
    
    sorted.sort((x,y) => x[0] - y[0] || y[1] - x[1]);
    sorted.forEach((v) =>  answer.push(numlist[v[1]]));
    
    return answer;
}