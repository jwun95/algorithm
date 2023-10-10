N = int(input())
data = list(map(int, input().split()))

add, sub, mul, div = map(int, input().split())

max_num = -int(1e9)
min_num = int(1e9)


def dfs(curr, hap):
    global add, sub, mul, div, max_num, min_num

    if curr == N:
        max_num = max(max_num, hap)
        min_num = min(min_num, hap)

    else:
        if add > 0:
            add -= 1
            dfs(curr + 1, hap + data[curr])
            add += 1

        if sub > 0:
            sub -= 1
            dfs(curr + 1, hap - data[curr])
            sub += 1

        if mul > 0:
            mul -= 1
            dfs(curr + 1, hap * data[curr])
            mul += 1

        if div > 0:
            div -= 1
            dfs(curr + 1, int(hap / data[curr]))
            div += 1


dfs(1, data[0])

print(max_num)
print(min_num)