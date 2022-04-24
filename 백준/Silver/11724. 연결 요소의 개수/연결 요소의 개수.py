import sys
from collections import deque

input = sys.stdin.readline

N, M = map(int, input().split())

visited = [False] * (N + 1)
graph = [[0] * (N + 1) for i in range(N+1)]

for _ in range(M):
    a, b = map(int, input().split())
    graph[a][b] = graph[b][a] = 1

count = 0

def dfs(v):
    visited[v] = True
    for i in range(1, N+1):
        if visited[i] == False and graph[v][i] == 1:
            dfs(i)


for k in range(1, N+1):
    if visited[k] == False:
        count += 1
        dfs(k)


print(count)