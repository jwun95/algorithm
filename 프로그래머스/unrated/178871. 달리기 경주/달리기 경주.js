function solution(players, callings) {
    const order = {};
    
    players.forEach((player, idx) => {
        order[player] = idx;
    });
    
    callings.forEach((calling) => {
        const idx = order[calling];
        players[idx] = players[idx - 1];
        players[idx - 1] = calling;
        order[calling]--;
        order[players[idx]]++;
    });
    
    return players;
}