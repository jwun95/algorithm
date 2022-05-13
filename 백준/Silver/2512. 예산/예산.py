import sys
input = sys.stdin.readline

N = int(input())

request = list(map(int, input().split()))

budget = int(input())

start = 0
end = max(request)
answer = 0

while start <= end:
    middle = (start+end) // 2
    res = 0

    res = sum([middle if r > middle else r for r in request])

    if res <= budget:
        answer = middle
        start = middle + 1

    else:
        end = middle - 1

print(answer)