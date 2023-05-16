function solution(code) {
    var answer = '';
    
    let modeStatus = false;
    
    [...code].forEach((v,idx) => {
        if (v === '1') {
            modeStatus = !modeStatus;
        } else {
            if (!modeStatus && idx % 2 === 0) {
                answer += code[idx];
            } 
            if (modeStatus && idx % 2 !== 0) {
                answer += code[idx];
            }
        }
    });
    
    return answer || "EMPTY";
}