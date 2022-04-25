import sys
import copy
sys.setrecursionlimit(3000)
n = int(input())

dfs_list = []
answer = []

for _ in range(n):
    dfs_list.append(list(input()))

first = copy.deepcopy(dfs_list)
second = copy.deepcopy(dfs_list)

for i in range(n):
    for k in range(n):
        if second[i][k] == 'G':
            second[i][k] = 'R'

for_list = []

for_list.append(first)
for_list.append(second)


def dfs(x, y, color, current_list):
    global count

    if x >= n or x < 0 or y >= n or y < 0:
        return False

    if current_list[x][y] == 0:
        return False

    elif current_list[x][y] == color:
        current_list[x][y] = 0

        dfs(x+1, y, color, current_list)
        dfs(x-1, y, color, current_list)
        dfs(x, y+1, color, current_list)
        dfs(x, y-1, color, current_list)

        return True

    else:
        return False


for f in for_list:
    count = 0
    for i in range(n):
        for k in range(n):
            current = f[i][k]
            response = dfs(i, k, current, f)
            if current != 0:
                count += 1
    answer.append(count)

for _ in answer:
    print(_, end=" ")