

function solution(n) {
    const answer = [];
    function hanoi(num, from, to, aux) {
        if (num === 1) {
            answer.push([from, to]);
            return;
        }
        
        hanoi(num - 1, from, aux, to);
        answer.push([from, to]);
        hanoi(num - 1, aux, to, from);
    }
    
    hanoi(n, 1, 3, 2);
    
    return answer;
}