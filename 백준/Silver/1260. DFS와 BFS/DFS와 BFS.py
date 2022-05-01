from collections import deque
import sys

input = sys.stdin.readline

N, M, V = map(int, input().split())

dfs_visited = [False] * (N + 1)
bfs_visited = [False] * (N + 1)
dfs_graph = [[0] * (N+1) for i in range(N+1)]
bfs_graph = [[0] * (N+1) for i in range(N+1)]

for _ in range(M):
    a, b = map(int, input().split())
    dfs_graph[a][b] = dfs_graph[b][a] = 1
    bfs_graph[a][b] = bfs_graph[b][a] = 1


def dfs(v):
    dfs_visited[v] = True
    print(v, end=" ")
    for i in range(1, N+1):
        if dfs_visited[i] == False and dfs_graph[v][i] == 1:
            dfs(i)


def bfs(v):
    que = deque([v])
    bfs_visited[v] = True

    while que:
        start = que.popleft()
        print(start, end=' ')

        for i in range(N+1):
            if bfs_graph[start][i] == 1 and bfs_visited[i] == False:
                bfs_visited[i] = True
                que.append(i)


dfs(V)
print()
bfs(V)