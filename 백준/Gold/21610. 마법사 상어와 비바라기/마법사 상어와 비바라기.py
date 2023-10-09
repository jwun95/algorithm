import sys

# 표준 입력을 파일로 바꿨으므로,
# input() 함수는 더이상 사용자 입력을 받지 않고, 지정된 입력 파일을 읽게 됨.
N, M = map(int, input().split())

# list comprehension을 이용해 이후의 입력값을 받아옴
baskets = [list(map(int, input().split())) for _ in range(N)]
order = [list(map(int, input().split())) for _ in range(M)]
direction = [[0, -1], [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1]]


def movement(arr, d, s):
    stack = []

    for a in arr:
        nx = a[0]
        ny = a[1]
        for i in range(s):
            nx += direction[d][0]
            ny += direction[d][1]

        stack.append([nx % N, ny % N])

    return stack


def cross(x, y):
    global baskets
    count = 0
    for i in range(1, 8, 2):
        nx = x + direction[i][0]
        ny = y + direction[i][1]

        if (0 <= nx < N) and (0 <= ny < N) and baskets[nx][ny] > 0:
            count += 1

    return count


start = [[N - 1, 0], [N - 1, 1], [N - 2, 0], [N - 2, 1]]

for o in order:
    result = movement(start, o[0] - 1, o[1])
    visited = [[False for m in range(N)] for _ in range(N)]
    for r in result:
        baskets[r[0]][r[1]] += 1
        visited[r[0]][r[1]] = True

    for r in result:
        cnt = cross(r[0], r[1])
        baskets[r[0]][r[1]] += cnt

    start = []
    for n in range(N):
        for m in range(N):
            if baskets[n][m] >= 2 and not visited[n][m]:
                baskets[n][m] -= 2
                start.append([n, m])

answer = 0
for n in range(N):
    for m in range(N):
        answer += baskets[n][m]

print(answer)