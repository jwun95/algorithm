class Solution {
    public int solution(String[][] board, int h, int w) {
        
        int[] dy = {-1, 0, 1, 0};
        int[] dx = {0, 1, 0, -1};
        
        int count = 0;
        
        for (int d = 0; d < 4; d ++) {
            int ny = dy[d] + h;
            int nx = dx[d] + w;
            
            if (0 > ny || ny >= board.length || 0 > nx || board.length <= nx) {
                continue;
            };
            if (board[h][w].equals(board[ny][nx])) count++;
        }
        
        return count;
    }
}