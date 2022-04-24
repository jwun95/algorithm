import sys
sys.setrecursionlimit(10000)
input = sys.stdin.readline

N, M, K = map(int, input().split())

dfs_list = [[0 for i in range(M+1)] for k in range(N+1)]
answer = []

for i in range(K):
    y, x = map(int, input().split())
    dfs_list[y][x] = 1

def solution(column, row):

    global count

    if row >= M+1 or row < 1 or column < 1 or column >= N+1:
        return False

    if dfs_list[column][row] == 0:
        return False

    dfs_list[column][row] = 0

    solution(column+1, row)
    solution(column-1, row)
    solution(column, row+1)
    solution(column, row-1)

    count += 1

    return count

for i in range(1,M+1):
    for k in range(1,N+1):
        count = 0
        response = solution(k, i)
        if response != False:
            answer.append(response)

print(max(answer))