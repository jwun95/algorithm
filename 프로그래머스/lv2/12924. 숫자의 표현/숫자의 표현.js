function solution(n) {
    let answer = 1;
    for(let i =1; i<=Math.floor(n/2); i++) {
    let x = i;
    let y = x;
        while(true) {
            y += 1;
            x += y;
            if(x > n) {
                break;
            }
            if(x == n) {
                answer++;
                break;
            }   
        }
    }
    return answer;
}