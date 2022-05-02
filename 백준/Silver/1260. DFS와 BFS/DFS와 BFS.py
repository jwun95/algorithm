import sys
from collections import deque

input = sys.stdin.readline

N, M, V = map(int, input().split())

dfs_graph = [[0 for i in range(N+1)] for k in range(N+1)]
bfs_graph = [[0 for i in range(N+1)] for k in range(N+1)]
dfs_visited = [0] * (N + 1)
bfs_visited = [0] * (N + 1)


for _ in range(M):
    x, y = map(int, input().split())
    dfs_graph[x][y] = dfs_graph[y][x] =1
    bfs_graph[x][y] = bfs_graph[y][x] = 1


def dfs(n):
    dfs_visited[n] = 1
    print(n, end=" ")
    for i in range(1, N+1):
        if dfs_visited[i] == 0 and dfs_graph[n][i] == 1:
            dfs(i)


def bfs(n):
    queue = deque([n])
    bfs_visited[n] = 1

    while queue:
        num = queue.popleft()
        print(num, end=" ")

        for i in range(N+1):
            if bfs_graph[num][i] == 1 and bfs_visited[i] == 0:
                bfs_visited[i] = 1
                queue.append(i)


dfs(V)
print()
bfs(V)