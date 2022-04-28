import sys
sys.setrecursionlimit(10000)
input = sys.stdin.readline


def dfs(x, y, n, m, graph):
    if x >= n or x < 0 or y >= m or y < 0:
        return False

    if graph[y][x] == 0:
        return False

    graph[y][x] = 0

    dfs(x+1, y, n, m, graph)
    dfs(x-1, y, n, m, graph)
    dfs(x, y+1, n, m, graph)
    dfs(x, y-1, n, m, graph)
    dfs(x+1, y+1, n, m, graph)
    dfs(x+1, y-1, n, m, graph)
    dfs(x-1, y-1, n, m, graph)
    dfs(x-1, y+1, n, m, graph)

    return True


while True:
    n, m = map(int, input().split())

    if n == 0 and m == 0:
        break

    dp = []
    count = 0
    for i in range(m):
        dp.append(list(map(int, input().split())))

    for row in range(n):
        for column in range(m):
            response = dfs(row, column, n, m, dp)
            if response == True:
                count += 1

    print(count)