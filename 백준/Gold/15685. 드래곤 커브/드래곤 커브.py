import sys

sys.setrecursionlimit(10**6)

N = int(sys.stdin.readline().rstrip())
datas = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]
direction = [[0, 1], [-1, 0], [0, -1], [1, 0]]  # + 1가 90도

location = [[False for i in range(101)] for _ in range(101)]  # 좌표 범위 100 x 100


def dfs(y, x, order, curr, limit):
    if curr == limit:
        return

    cnt = len(order)
    for i in range(cnt - 1, -1, -1):
        di = (order[i] + 1) % 4
        y = y + direction[di][0]
        x = x + direction[di][1]
        order.append(di)
        location[y][x] = True

    dfs(y, x, order, curr + 1, limit)


for data in datas:
    [x, y, d, g] = data
    ny = y + direction[d][0]
    nx = x + direction[d][1]

    location[y][x] = True
    location[ny][nx] = True

    order = [d]
    dfs(ny, nx, order, 0, g)

answer = 0

for row in range(0, 100):
    for column in range(0, 100):
        if (
            location[row][column]
            and location[row + 1][column]
            and location[row][column + 1]
            and location[row + 1][column + 1]
        ):
            answer += 1

print(answer)