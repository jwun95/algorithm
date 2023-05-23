function solution(X, Y) {
    var answer = '';
    const xArr = [...X];
    const yArr = [...Y];
    
    for (let i = 0; i < 10; i++) {
        const xLen = xArr.filter((v) => String(i) === v).length;
        const yLen = yArr.filter((v) => String(i) === v).length;
        answer += String(i).repeat(Math.min(xLen, yLen));
    };
    
    if (answer === '') return '-1';
    if (Number(answer) === 0) return '0';

    return [...answer].sort((x,y) => y - x).join("");
}