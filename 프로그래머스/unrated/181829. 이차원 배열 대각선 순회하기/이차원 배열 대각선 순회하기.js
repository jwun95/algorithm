function solution(board, k) {
    var answer = 0;
    
    board.forEach((out, i) => {
        out.forEach((inner, j) => {
            i + j <= k ? answer = answer + board[i][j] : 0;
        });
    });
    
    return answer;
}