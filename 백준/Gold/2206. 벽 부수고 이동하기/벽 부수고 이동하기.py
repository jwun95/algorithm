import sys
from collections import deque


N, M = map(int, sys.stdin.readline().split())
area = [list(map(int, sys.stdin.readline().rstrip())) for _ in range(N)]
visited = [[[0] * 2 for m in range(M)] for n in range(N)]


def bfs():
    queue = deque([[0, 0, 0]])  # x, y, break
    visited[0][0][0] = 1
    direction = [[0, 1], [0, -1], [1, 0], [-1, 0]]

    while queue:
        [x, y, b] = queue.popleft()

        if x == N - 1 and y == M - 1:
            return visited[x][y][b]

        for d in direction:
            nx = x + d[0]
            ny = y + d[1]

            if 0 <= nx < N and 0 <= ny < M:
                if area[nx][ny] == 1 and b == 0:
                    visited[nx][ny][1] = visited[x][y][0] + 1
                    queue.append([nx, ny, 1])

                if area[nx][ny] == 0 and visited[nx][ny][b] == 0:
                    visited[nx][ny][b] = visited[x][y][b] + 1
                    queue.append([nx, ny, b])

    return -1


print(bfs())