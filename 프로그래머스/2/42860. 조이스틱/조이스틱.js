function solution(name) {
    const alphabets = {
        'A' : 0, 'B' : 1, 'C' : 2, 'D' : 3, 'E' : 4, 'F' : 5, 'G' : 6,
        'H' : 7, 'I' : 8, 'J' : 9, 'K' : 10, 'L' : 11, 'M' : 12, 'N' : 13,
        'O' : 14, 'P' : 15, 'Q' : 16, 'R' : 17, 'X' : 18, 'T' : 19, 'U' : 20,
        'V' : 21, 'W' : 22, 'X' : 23, 'Y' : 24, 'Z' : 25
    }
    
    function getAlpha (al) {
        return Math.min(alphabets[al] - 0, 26 - alphabets[al]);
    }
    
    let answer = 0;
    let minValue = name.length - 1;
    
    [...name].forEach((v, idx) => {
        //answer += getAlpha(v);
        answer += Math.min(v.charCodeAt() - 65, 91 - v.charCodeAt());
        
        let curr = idx + 1;
        while (curr < name.length && name[curr] === 'A') curr++;
        
        minValue = Math.min(
            minValue,
            (name.length - curr) * 2 + idx,
            idx * 2 + (name.length - curr)
        )
    })
    
    return answer + minValue;
}