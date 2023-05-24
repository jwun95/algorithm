function solution(keymap, targets) {
    var answer = [];
    const keyIndex = {};
    
    keymap.forEach((k) => {
        [...k].forEach((v, idx) => {
            if (keyIndex[v]) {
                keyIndex[v] = Math.min(keyIndex[v], idx + 1);
            } else {
                keyIndex[v] = idx + 1;
            }
        });
    });
    
    targets.forEach((t) => {
        let count = 0;
        for (let i = 0; i < t.length; i++) {
            if (keyIndex[t[i]]) {
                count += keyIndex[t[i]];
            } else {
                count = -1;
                break;
            }
        };
        answer.push(count);
    });
    
    return answer;
}