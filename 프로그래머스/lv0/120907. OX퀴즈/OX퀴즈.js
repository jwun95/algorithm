function solution(quiz) {
    const answer = quiz.map((v) => {
        
        const splitQuiz = v.split(" ");
        if (splitQuiz[1] === '-') {
            return Number(splitQuiz[0]) - Number(splitQuiz[2]) === Number(splitQuiz[4]) ? "O" : "X";
        } else {
            return Number(splitQuiz[0]) + Number(splitQuiz[2]) === Number(splitQuiz[4]) ? "O" : "X";
        }
    });
    return answer;
}