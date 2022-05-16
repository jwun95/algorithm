import sys
input = sys.stdin.readline

N, M = map(int, input().split())

money = []

for _ in range(N):
    money.append(int(input()))

start = max(money)
end = sum(money)
answer = 0

while start <= end:
    middle = (start + end) // 2
    count = 1
    temp = 0

    for m in money:
        temp += m
        if temp > middle:
            count += 1
            temp = m

    if count > M:
        start = middle + 1

    else:
        end = middle - 1
        answer = middle

print(answer)