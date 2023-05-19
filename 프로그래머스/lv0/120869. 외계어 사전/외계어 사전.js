function solution(spell, dic) {
    var answer = 2;
    
    dic.forEach((v) => {
        let count = 0;
        spell.forEach((s) => {
            if (v.includes(s) && v.indexOf(s) === v.lastIndexOf(s)) {
                count = count + 1;
            }
        });
        count === spell.length ? answer = 1 : undefined;
    });
    
    return answer;
}