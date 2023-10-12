import sys

sys.setrecursionlimit(10**6)

N, M, K = map(int, sys.stdin.readline().split())
fire_balls = [list(map(int, sys.stdin.readline().split())) for _ in range(M)]

area = [[[] for n in range(N)] for _ in range(N)]

direction = [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]]

for fire in fire_balls:
    area[fire[0] - 1][fire[1] - 1].append(
        [fire[0] - 1, fire[1] - 1, fire[2], fire[3], fire[4]]
    )

for _ in range(K):
    temp_area = [[[] for n in range(N)] for _ in range(N)]
    for row in range(N):
        for column in range(N):
            if area[row][column]:
                for a in area[row][column]:
                    [r, c, m, s, d] = a
                    nr = (r + (direction[d][0] * s) + N) % N
                    nc = (c + (direction[d][1] * s) + N) % N
                    temp_area[nr][nc].append([nr, nc, m, s, d])

    area = temp_area
    # 분산
    for row in range(N):
        for column in range(N):
            if len(area[row][column]) >= 2:
                m_sum, s_sum = 0, 0
                d_sum = []
                for a in area[row][column]:
                    m_sum += a[2]  # 질량
                    s_sum += a[3]  # 속력
                    d_sum.append(a[4] % 2)

                m_div = m_sum // 5
                if m_div != 0:
                    s_div = s_sum // len(area[row][column])
                    temp_dir = [1, 3, 5, 7]
                    if sum(d_sum) == 0 or sum(d_sum) == len(area[row][column]):
                        temp_dir = [0, 2, 4, 6]

                    area[row][column].clear()

                    for idx in temp_dir:
                        area[row][column].append([row, column, m_div, s_div, idx])

                else:
                    area[row][column].clear()

answer = 0

for row in range(N):
    for column in range(N):
        if area[row][column]:
            for a in area[row][column]:
                answer += a[2]

print(answer)