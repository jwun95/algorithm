from collections import deque

def solution(board):
    row = len(board)
    column = len(board[0])
    direction = [[0,1], [0,-1],[1,0],[-1,0]]
    
    def bfs(r,c):
        visited = [[50000 for _ in range(column)] for _ in range(row)]
        queue = deque([[r, c, 0]])
        
        while queue:
            [x, y, k] = queue.popleft()
            
            if board[x][y] == 'G':
                return k
            
            for d in direction:
                nx = x
                ny = y
                
                while 0 <= nx + d[0] < row and 0 <= ny + d[1] < column and board[nx + d[0]][ny + d[1]] != 'D':
                    nx += d[0]
                    ny += d[1]
                    
                if visited[nx][ny] > k + 1:
                    visited[nx][ny] = k + 1
                    queue.append([nx, ny, k + 1])
        
        return -1
        
    
    for r in range(row):
        for c in range(column):
            if board[r][c] == 'R':
                answer = bfs(r, c)
                break
    
    return answer