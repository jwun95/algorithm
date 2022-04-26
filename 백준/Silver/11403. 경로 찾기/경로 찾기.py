import sys
sys.setrecursionlimit(10000)

N = int(input())
dfs_list = []

for _ in range(N):
    dfs_list.append(list(map(int, input().split())))

def dfs(n):

    if visited[n] == True:
        return False

    visited[n] = True

    for i in range(N):
        if dfs_list[n][i] == 1:
            tracking.append(i)
            dfs(i)


for n in range(N):
    tracking = []
    visited = [False] * N
    dfs(n)
    for k in tracking:
        dfs_list[n][k] = 1

for i in dfs_list:
    for k in range(N):
        print(i[k], end=" ")
    print()