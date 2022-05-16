import sys
input = sys.stdin.readline

N, C = map(int, input().split())

house = []

for _ in range(N):
    house.append(int(input()))

house.sort()

start = 1
end = max(house)

while start <= end:
    middle = (start + end) // 2
    standard = house[0] + middle
    count = 1

    for h in house:
        if h >= standard:
            count += 1
            standard = h + middle

    if count >= C:
        answer = middle
        start = middle + 1

    else:
        end = middle - 1

print(answer)