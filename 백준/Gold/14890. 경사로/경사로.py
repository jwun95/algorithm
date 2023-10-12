import sys

sys.setrecursionlimit(10**6)

N, L = map(int, sys.stdin.readline().split())
area = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]


def step_check_row(v, curr):
    for i in range(1, N):
        if abs(area[curr][i] - area[curr][i - 1]) > 1:  # 높이 차이가 2이상인 경우 False
            return False

        if area[curr][i] - area[curr][i - 1] == 1:  # 다음 칸이 높을 경우
            standard = area[curr][i - 1]
            for idx in range(i - 1, i - L - 1, -1):
                if 0 <= idx < N and v[idx] == False and standard == area[curr][idx]:
                    v[idx] = True
                else:
                    return False

        elif area[curr][i] - area[curr][i - 1] == -1:
            standard = area[curr][i]
            for idx in range(i, i + L):
                if 0 <= idx < N and v[idx] == False and standard == area[curr][idx]:
                    v[idx] = True
                else:
                    return False

    return True


def step_check_column(v, curr):
    for i in range(1, N):
        if abs(area[i][curr] - area[i - 1][curr]) > 1:  # 높이 차이가 2이상인 경우 False
            return False

        if area[i][curr] - area[i - 1][curr] == 1:  # 다음 칸이 높을 경우
            standard = area[i - 1][curr]
            for idx in range(i - 1, i - L - 1, -1):
                if 0 <= idx < N and v[idx] == False and standard == area[idx][curr]:
                    v[idx] = True
                else:
                    return False

        elif area[i][curr] - area[i - 1][curr] == -1:
            standard = area[i][curr]
            for idx in range(i, i + L):
                if 0 <= idx < N and v[idx] == False and standard == area[idx][curr]:
                    v[idx] = True
                else:
                    return False

    return True


answer = 0

for r in range(N):
    visited = [False for n in range(N)]
    if step_check_row(visited, r):
        answer += 1

for c in range(N):
    visited = [False for n in range(N)]
    if step_check_column(visited, c):
        answer += 1

print(answer)