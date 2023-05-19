function solution(a, b, c, d) {
    var answer = 1;
    const dice = [a,b,c,d];
    const diceCount = {};
    dice.sort((x, y) =>  x - y);
    
    for (let i = 0; i < 4; i++) {
        diceCount[dice[i]] ? diceCount[dice[i]]++ : diceCount[dice[i]] = 1;
    };
    
    const diceKeys = Object.keys(diceCount);
    
    if (diceKeys.length === 1) {
        return 1111 * dice[0];
    } else if (diceKeys.length === 2) {
        if (diceCount[diceKeys[0]] === 2) {
            return (dice[0] + dice[3]) * Math.abs(dice[0] - dice[3]);
        } else {
            if (diceCount[diceKeys[0]] > diceCount[diceKeys[1]]) {
                return (10 * Number(diceKeys[0]) + Number(diceKeys[1])) ** 2;
            } else {
                return (10 * Number(diceKeys[1]) + Number(diceKeys[0])) ** 2;
            }
        } 
    } else if (diceKeys.length === 4) {
        return dice[0];
    } else {
        diceKeys.forEach((v) => {
            if (diceCount[v] === 1) {
                answer = answer * Number(v);
            };
        });
        
        return answer;
    }
}