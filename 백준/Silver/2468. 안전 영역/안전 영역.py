import sys
import copy
sys.setrecursionlimit(10000)

N = int(input())
dfs_list = []

for _ in range(N):
    dfs_list.append(list(map(int, input().split())))

for k in range(1, N):
    max_num = max(max(dfs_list[k-1]), max(dfs_list[k]))

def dfs(row, column, height):
    if row < 0 or row >= N or column < 0 or column >= N:
        return False

    if copy_list[row][column] <= height:
        return False

    if copy_list[row][column] > height:
        copy_list[row][column] = height

        dfs(row+1, column, height)
        dfs(row-1, column, height)
        dfs(row, column+1, height)
        dfs(row, column-1, height)

        return True

answer = []

for i in range(max_num+1):
    copy_list = copy.deepcopy(dfs_list)
    count = 0
    for x in range(N):
        for y in range(N):
            response = dfs(x, y, i)
            if response == True:
                count += 1

    answer.append(count)

print(max(answer))