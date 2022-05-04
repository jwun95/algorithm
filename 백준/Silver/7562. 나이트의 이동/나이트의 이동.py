import sys
from collections import deque

input = sys.stdin.readline

T = int(input())

for _ in range(T):
    w = int(input())

    start_x, start_y = map(int, input().split())
    end_x, end_y = map(int, input().split())

    graph = [[0 for i in range(w)] for k in range(w)]

    move_x = [2, 1, 2, 1, -2, -1, -2, -1]
    move_y = [1, 2, -1, -2, 1, 2, -1, -2]

    queue = deque()
    queue.append((start_x, start_y))

    while queue:

        s1, s2 = queue.popleft()

        if s1 == end_x and s2 == end_y:
            break

        for i in range(8):
            nx = s1 + move_x[i]
            ny = s2 + move_y[i]

            if nx < 0 or ny < 0 or nx >= w or ny >= w:
                continue

            if graph[ny][nx] == 0:
                graph[ny][nx] = graph[s2][s1] + 1
                queue.append((nx, ny))

    print(graph[end_y][end_x])