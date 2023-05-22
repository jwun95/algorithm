function solution(name, yearning, photo) {
    var answer = [];
    
    photo.forEach((p) => {
        let sum = 0;
        p.forEach((v) => {
            if (name.includes(v)) {
                sum += yearning[name.indexOf(v)];
            } 
        });
        answer.push(sum);
    });
    
    return answer;
}