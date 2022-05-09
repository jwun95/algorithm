import sys
from collections import deque

input = sys.stdin.readline

N = int(input())
graph = [[] for k in range(N + 1)]
visited = [False] * (N + 1)

for _ in range(N - 1):
    a, b = map(int, input().split())

    graph[a].append(b)
    graph[b].append(a)

queue = deque([1])

while queue:
    num = queue.popleft()

    for i in graph[num]:
        if visited[i] == False:
            visited[i] = num
            queue.append(i)

for i in range(2, N+1):
    print(visited[i])