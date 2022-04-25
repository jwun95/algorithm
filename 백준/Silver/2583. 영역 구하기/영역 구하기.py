import sys
sys.setrecursionlimit(10000)

M, N, K = map(int, input().split())
answer = []

position_list = []  # 사각형의 좌표들을 받기 위한 리스트
dfs_list = [[1 for i in range(N)] for k in range(M)]

for _ in range(K):
    position_list.append(list(map(int, input().split())))

for p in position_list:
    for x in range(p[0], p[2]):
        for y in range(p[1], p[3]):
            dfs_list[y][x] = 0 # 직사각형 내부의 좌표를 0으로 초기화

# 여기까지가 기본 초기화

def dfs(m, n):

    global count

    if m >= M or m < 0 or n >= N or n < 0:
        return False

    if dfs_list[m][n] == 0:
        return False

    dfs_list[m][n] = 0

    dfs(m+1, n)
    dfs(m-1, n)
    dfs(m, n+1)
    dfs(m, n-1)
    count += 1

    return count

for x in range(M):
    for y in range(N):
        count = 0
        response = dfs(x, y)
        if response != False:
            answer.append(response)

answer.sort()
print(len(answer))

for a in answer:
    print(a, end=" ")