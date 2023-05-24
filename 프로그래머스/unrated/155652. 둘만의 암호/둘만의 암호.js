function solution(s, skip, index) {
    var answer = '';
    const alphabets = [...skip].map((v) => v.charCodeAt());

    [...s].forEach((v) => {
        let count = 1;
        let asci = v.charCodeAt();
        while (count <= index) {
            asci + 1 > 122 ? asci = asci - 26 : undefined;
            if (!alphabets.includes(asci + 1)) {
                count++;
            };
            asci++;
        };
        answer += String.fromCharCode(asci);
    });
    
    return answer;
}