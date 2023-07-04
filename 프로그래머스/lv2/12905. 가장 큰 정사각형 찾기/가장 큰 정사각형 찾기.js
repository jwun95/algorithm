function solution(board)
{
    var answer = 0;
    if (board.length <= 1 || board[0].length <= 1) return 1;
    for (let row = 1; row < board.length; row++) {
        for (let column = 1; column < board[0].length; column++) {
            if (board[row][column]) {
                board[row][column] = Math.min(board[row-1][column-1], board[row-1][column], board[row][column-1]) + 1;
                answer = Math.max(answer, board[row][column]);
            }
        }
    }

    return answer * answer;
}