function solution(picture, k) {
    var answer = [];
    
    picture.forEach((v) => {
        let temp = '';
        [...v].forEach((t) => {
            for (let i = 0; i < k; i++) {
                temp += t;
            } 
        });
        for (let i = 0; i < k; i++) {
            answer.push(temp);
        }
    });

    
    return answer;
}