import sys
sys.setrecursionlimit(3000)
input = sys.stdin.readline

num = int(input())

for _ in range(num):

    M, N, K = map(int, input().split())

    dfs_list = [[0 for i in range(N)] for k in range(M)]

    count = 0

    for j in range(K):
        x, y = map(int, input().split())
        dfs_list[x][y] = 1

    def solution(row, column):

        if row >= M or row < 0 or column < 0 or column >= N:
            return False

        if dfs_list[row][column] == 0:
            return False

        dfs_list[row][column] = 0

        solution(row+1, column)
        solution(row-1, column)
        solution(row, column+1)
        solution(row, column-1)

        return 1


    for i in range(M):
        for k in range(N):
            response = solution(i, k)
            if response == 1:
                count += 1

    print(count)