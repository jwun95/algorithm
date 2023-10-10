import sys
from collections import deque

sys.setrecursionlimit(10**6)

N, M, X, Y, K = map(int, sys.stdin.readline().split())
datas = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]
order = list(map(int, sys.stdin.readline().split()))
direction = [[0, 1], [0, -1], [-1, 0], [1, 0]]  # 동, 서, 북, 남 -> -1일 경우 시계, +1 일경우 반시계

crossX = deque([0, 0, 0])
crossY = deque([0, 0, 0, 0])


def dice(dir):  # 주사위 굴림
    if dir == 0:  # 동
        temp = crossY.pop()
        crossX.appendleft(temp)
        temp = crossX.pop()
        crossY.append(temp)
        crossY[1] = crossX[1]

    elif dir == 1:  # 서
        temp = crossY.pop()
        crossX.append(temp)
        temp = crossX.popleft()
        crossY.append(temp)
        crossY[1] = crossX[1]

    elif dir == 2:  # 북
        crossY.rotate(-1)
        crossX[1] = crossY[1]

    else:
        crossY.rotate(1)
        crossX[1] = crossY[1]


start = [X, Y]

for o in order:
    di = o - 1
    nx = start[0] + direction[di][0]
    ny = start[1] + direction[di][1]

    if (0 <= nx < N) and (0 <= ny < M):
        dice(di)
        start[0] = nx
        start[1] = ny
        print(crossX[1])
        if datas[nx][ny] == 0:
            datas[nx][ny] = crossY[3]

        else:
            crossY[3] = datas[nx][ny]
            datas[nx][ny] = 0