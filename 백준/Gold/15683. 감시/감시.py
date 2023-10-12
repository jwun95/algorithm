import sys
import copy

sys.setrecursionlimit(10**6)

N, M = map(int, sys.stdin.readline().split())
office = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

direction1 = [[[0, 1]], [[0, -1]], [[1, 0]], [[-1, 0]]]
direction2 = [[[0, 1], [0, -1]], [[1, 0], [-1, 0]]]
direction3 = [
    [[0, 1], [1, 0]],
    [[0, 1], [-1, 0]],
    [[0, -1], [1, 0]],
    [[0, -1], [-1, 0]],
]
direction4 = [
    [[0, 1], [0, -1], [1, 0]],
    [[0, 1], [0, -1], [-1, 0]],
    [[1, 0], [-1, 0], [0, 1]],
    [[1, 0], [-1, 0], [0, -1]],
]
direction5 = [[[0, 1], [0, -1], [1, 0], [-1, 0]]]

cctvs = []
for n in range(N):
    for m in range(M):
        if not office[n][m] == 0 and not office[n][m] == 6:
            cctvs.append([n, m, office[n][m]])

answer = 64
cctv_num = len(cctvs)


def dfs(curr, area):
    global answer
    if curr == cctv_num:
        temp_answer = 0

        for n in range(N):
            for m in range(M):
                if area[n][m] == 0:
                    temp_answer += 1

        answer = min(answer, temp_answer)

        return
    di = []  # cctv 방향

    if cctvs[curr][2] == 1:
        di = direction1

    elif cctvs[curr][2] == 2:
        di = direction2

    elif cctvs[curr][2] == 3:
        di = direction3

    elif cctvs[curr][2] == 4:
        di = direction4

    else:
        di = direction5

    for d in di:
        temp_area = copy.deepcopy(area)
        for k in d:
            nr = cctvs[curr][0] + k[0]
            nc = cctvs[curr][1] + k[1]
            while True:
                if (0 <= nr < N) and (0 <= nc < M) and temp_area[nr][nc] != 6:
                    if temp_area[nr][nc] == 0:
                        temp_area[nr][nc] = "#"

                    nr = nr + k[0]
                    nc = nc + k[1]

                else:
                    break

        dfs(curr + 1, temp_area)


dfs(0, office)
print(answer)