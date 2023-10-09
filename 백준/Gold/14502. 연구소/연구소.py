import sys
import copy
from collections import deque

# 표준 입력을 파일로 바꿨으므로,
# input() 함수는 더이상 사용자 입력을 받지 않고, 지정된 입력 파일을 읽게 됨.
N, M = map(int, input().split())

# list comprehension을 이용해 이후의 입력값을 받아옴
rooms = [list(map(int, input().split())) for _ in range(N)]
queue = []
direction = [[0, 1], [0, -1], [1, 0], [-1, 0]]

for n in range(N):
    for m in range(M):
        if rooms[n][m] == 2:
            queue.append([n, m])

answer = 0


def bfs():
    temp_rooms = copy.deepcopy(rooms)
    q = copy.deepcopy(queue)
    temp_queue = deque(q)

    while temp_queue:
        [x, y] = temp_queue.popleft()

        for d in direction:
            nextX = x + d[0]
            nextY = y + d[1]

            if (0 <= nextX < N) and (0 <= nextY < M) and temp_rooms[nextX][nextY] == 0:
                temp_rooms[nextX][nextY] = 2
                temp_queue.append([nextX, nextY])

    global answer
    count = 0

    for n in range(N):
        count += temp_rooms[n].count(0)

    answer = max(answer, count)


def make_wall(cnt):
    if cnt == 3:
        bfs()
        return

    for n in range(N):
        for m in range(M):
            if rooms[n][m] == 0:
                rooms[n][m] = 1
                make_wall(cnt + 1)
                rooms[n][m] = 0


make_wall(0)
print(answer)