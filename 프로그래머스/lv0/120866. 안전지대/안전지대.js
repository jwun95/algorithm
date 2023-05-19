function trans(board, trm, trp, tcm, tcp) {
    for (let i = trm; i <= trp; i++) {
        for (let k = tcm; k <= tcp; k++) {
            if (board[i][k] === 0) {
                board[i][k] = 2;
            }
        }
    }
    return board;
};

function solution(board) {
    var answer = 0;
    const len = board.length;
    let b = [...board];
    
    for (let row = 0; row < len; row++) {
        for (let col = 0; col < len; col++) {
            if (b[row][col] === 1) {
                const trm = row - 1 >= 0 ? row - 1 : row;
                const trp = row + 1 < len ? row + 1 : row; 
                const tcm = col - 1 >= 0 ? col - 1 : col;
                const tcp = col + 1 < len ? col + 1 : col;
                b = [...trans(board, trm, trp, tcm, tcp)];
            }
        }
    }
    b.forEach((x) => {
        x.forEach((y) => {
            if (y === 0) {
                answer += 1;
            }
        });
    });
    
    return answer;
}