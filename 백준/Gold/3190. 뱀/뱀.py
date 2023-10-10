import sys
from collections import deque

sys.setrecursionlimit(10**6)

N = int(sys.stdin.readline().rstrip())
K = int(sys.stdin.readline().rstrip())
apples = [list(map(int, sys.stdin.readline().split())) for _ in range(K)]
L = int(sys.stdin.readline().rstrip())
order = [list(map(str, sys.stdin.readline().split())) for _ in range(L)]

direction = [[0, 1], [1, 0], [0, -1], [-1, 0]]
area = [[0 for _ in range(N)] for _ in range(N)]

for apple in apples:  # 사과
    [x, y] = apple
    area[x - 1][y - 1] = 2

time = {}

for o in order:
    [X, C] = o
    time[int(X)] = C

area[0][0] = 1  # 뱀 위치

snake = deque([[0, 0]])
start = 0
head = [0, 0]
count = 0

while count <= 10000:
    [r, c] = head
    count += 1
    nr = r + direction[start][0]
    nc = c + direction[start][1]

    if (0 <= nr < N) and (0 <= nc < N) and area[nr][nc] != 1:
        if area[nr][nc] == 0:
            [row, column] = snake.popleft()
            area[row][column] = 0
        area[nr][nc] = 1
        snake.append([nr, nc])
        head[0] = nr
        head[1] = nc

    else:
        break

    if count in time:
        if time[count] == "D":
            start = (start + 1) % 4
        else:
            start = (start + 3) % 4

print(count)