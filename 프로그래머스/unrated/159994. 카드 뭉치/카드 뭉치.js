function solution(cards1, cards2, goal) {
    var answer = 'Yes';
    const counter = [0,0];
    const cards = [[...cards1], [...cards2]]
    let current = 0, count = 1, flag = 0;
    
    for (let i = 0; i < goal.length; i++) {
        while (count <= goal.length) {
            if (cards[current][counter[current]] === goal[i]) {
                counter[current] += 1;
                flag = 0;
                break;
            } else {
                current = current ? 0 : 1;
                flag += 1;
            };
            if (flag === 2) {
                return 'No';
            }
        };
    }
    
    return answer;
}