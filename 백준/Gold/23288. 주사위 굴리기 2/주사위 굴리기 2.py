import sys
from collections import deque

sys.setrecursionlimit(10**6)

N, M, K = map(int, sys.stdin.readline().split())
datas = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]
direction = [[0, 1], [-1, 0], [0, -1], [1, 0]]  # 동, 북, 서, 남 -> -1일 경우 시계, +1 일경우 반시계

crossX = deque([4, 1, 3])
crossY = deque([2, 1, 5, 6])


def dice(dir):  # 주사위 굴림
    if dir == 0:  # 동
        temp = crossY.pop()
        crossX.appendleft(temp)
        temp = crossX.pop()
        crossY.append(temp)
        crossY[1] = crossX[1]

    elif dir == 1:  # 북
        crossY.rotate(-1)
        crossX[1] = crossY[1]

    elif dir == 2:  # 서
        temp = crossY.pop()
        crossX.append(temp)
        temp = crossX.popleft()
        crossY.append(temp)
        crossY[1] = crossX[1]

    else:
        crossY.rotate(1)
        crossX[1] = crossY[1]


def bfs(x, y):
    visited = [[False for i in range(M)] for _ in range(N)]
    queue = deque([[x, y]])
    visited[x][y] = True
    count = 1

    while queue:
        [x, y] = queue.popleft()

        for d in direction:
            nx = x + d[0]
            ny = y + d[1]

            if (
                (0 <= nx < N)
                and (0 <= ny < M)
                and not visited[nx][ny]
                and datas[x][y] == datas[nx][ny]
            ):
                count += 1
                visited[nx][ny] = True
                queue.append([nx, ny])

    return count


start = 0
curr = [0, 0]
answer = 0

for i in range(K):
    nx = curr[0] + direction[start][0]
    ny = curr[1] + direction[start][1]
    if (0 <= nx < N) and (0 <= ny < M):
        curr[0] = nx
        curr[1] = ny

    else:
        start = (start + 2) % 4
        nx = curr[0] + direction[start][0]
        ny = curr[1] + direction[start][1]
        curr[0] = nx
        curr[1] = ny

    dice(start)
    if datas[nx][ny] < crossY[3]:
        start = (start + 3) % 4

    elif datas[nx][ny] > crossY[3]:
        start = (start + 1) % 4

    cnt = bfs(nx, ny)
    answer += datas[nx][ny] * cnt

print(answer)