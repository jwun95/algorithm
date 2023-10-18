function solution(tickets) {
    var answer = [];
    tickets.sort();
    const tracking = [];
    const visited = Array(tickets.length).fill(false);
    const goal = tickets.length;
    let flag = 0;
    
    function dfs(n, count) {
        tracking.push(n);
        if (count === goal) {
            answer = tracking;
            return true;
        }
        
        for (let i = 0; i < goal; i ++) {
            if (!visited[i] && tickets[i][0] === n) {
                visited[i] = true;
                if (dfs(tickets[i][1], count + 1)) return true;
                visited[i] = false;
            }
        }
        
        tracking.pop();
        return false;
    }
    
    dfs('ICN', 0);
    
    
    return answer;
}