function checkWords(ff, ss) {
    let count = 0;
    for (let f = 0; f < ff.length; f++) {
        ff[f] !== ss[f] ? count++ : false;
    }
    return count === 1 ? true : false;
}

function solution(begin, target, words) {
    const visited = Array(words.length).fill(false);
    let answer = 1e9;

    function dfs(start, end, count) {
    if (start === end) {
        answer = Math.min(answer, count);
        return count;
    }
    
    for (let i = 0; i < words.length; i++) {
        if (!visited[i] && checkWords(words[i], start)) {
            visited[i] = true;
            dfs(words[i], end, count + 1)
            visited[i] = false;
            }
        }
    }
    
    dfs(begin, target, 0);
    return answer === 1e9 ? 0 : answer;
}