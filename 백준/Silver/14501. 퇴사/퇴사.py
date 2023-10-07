n = int(input())
# n, m = map(int, input().split())

# list comprehension을 이용해 이후의 입력값을 받아옴
consults = [list(map(int, input().split())) for _ in range(n)]
answer = []


def dfs(curr, num, value):
    if curr > n:
        answer.append(num - value)
        return
    elif curr == n:
        answer.append(num)
        return

    for i in range(curr, n):
        dfs(i + consults[i][0], num + consults[i][1], consults[i][1])


for i in range(0, n):
    dfs(i + consults[i][0], consults[i][1], consults[i][1])

print(max(answer))