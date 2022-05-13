import sys
input = sys.stdin.readline

N, M = map(int, input().split())

blueray = list(map(int, input().split()))

start = max(blueray)
end = sum(blueray)
answer = 0

while start <= end:
    middle = (start + end) // 2
    temp = 0
    count = 1

    for b in blueray:
        temp += b
        if temp > middle:
            count += 1
            temp = b

    if count > M:
        start = middle + 1

    else:
        end = middle - 1
        answer = middle

print(answer)