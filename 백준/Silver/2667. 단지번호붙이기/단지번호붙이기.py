import sys

#input = sys.stdin.readline
N = int(input())
graph = []
for i in range(N):
    graph.append(list(map(int, input())))

result = 0
num = 0
answer = []

def dfs(row, column):

    global num

    if row < 0 or column < 0 or row > N-1 or column > N-1:
        return False

    if graph[row][column] == 1:
        graph[row][column] = 0
        dfs(row - 1, column)
        dfs(row + 1, column)
        dfs(row, column + 1)
        dfs(row, column - 1)

        num += 1

        return True

    return False

for row in range(N):
    for column in range(N):
        if dfs(row, column) == True:
            result += 1
            answer.append(num)
            num = 0

answer.sort()
print(result)
for a in answer:
    print(a)