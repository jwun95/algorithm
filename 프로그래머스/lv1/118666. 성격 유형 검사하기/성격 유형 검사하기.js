function calculator(indicator, score) {
    let i = '';
    let s = 0;
    if (score > 4) {
        i = indicator[1];
        s = score - 4;
    } else {
        i = indicator[0];
        s = 4 - score;
    };
    return [i, s];
};

function solution(survey, choices) {
    var answer = '';
    const scores = {'R': 0, 'T': 0, 'C': 0, 'F': 0,'J': 0,'M': 0,'A': 0,'N': 0};
    
    for (let i = 0; i < survey.length; i++) {
        const [indi, s] = calculator(survey[i], choices[i]);
        scores[indi] = scores[indi] + s;
    };
    
    scores['R'] < scores['T'] ? answer += 'T' : answer += 'R';
    scores['C'] < scores['F'] ? answer += 'F' : answer += 'C';
    scores['J'] < scores['M'] ? answer += 'M' : answer += 'J';
    scores['A'] < scores['N'] ? answer += 'N' : answer += 'A';
    
    return answer;
}