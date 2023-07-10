function solution(cards) {
    var answer = [];
    const visited = Array.from(Array(cards.length), () => false);
    
    function dfs(num, count) {
        visited[num] = true;
        if (!visited[cards[num] - 1]) dfs(cards[num] - 1, count + 1);
        else answer.push(count);
    }
    
    for (let i = 0; i < cards.length; i++) {
        if (!visited[i]) dfs(i, 1);
    }
    
    answer.sort((x, y) => y - x);
    
    return answer.length >= 2 ? answer[0] * answer[1] : 0;
}