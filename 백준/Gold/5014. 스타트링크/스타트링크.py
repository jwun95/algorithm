import sys
from collections import deque

input = sys.stdin.readline

F, S, G, U, D = map(int, input().split())

visited = [-1] * (F + 1)
queue = deque()
queue.append(S)
visited[S] = 1

def bfs():
    while queue:
        s = queue.popleft()

        if s == G:
            print(visited[G] - 1)
            return

        for i in (s - D, s + U):
            if 1 <= i <= F and visited[i] == -1:
                visited[i] = visited[s] + 1
                queue.append(i)

    print("use the stairs")
    return

bfs()