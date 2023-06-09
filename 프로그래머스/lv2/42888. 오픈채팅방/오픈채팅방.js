function solution(record) {
    var answer = [];
    const uid = {};
    
    record.forEach((v) => {
        const [state, u, nick] = v.split(" ");
        if (state === 'Enter') {
            answer.push(`${u}님이 들어왔습니다.`);
        } else if (state === 'Leave') {
            answer.push(`${u}님이 나갔습니다.`);
        };
        if (nick) uid[u] = nick;
    });
    
    answer.forEach((v, idx) => {
        const [u, rest] = v.split("님");
        answer[idx] = uid[u] + '님' + rest;
    });
    
    return answer;
}