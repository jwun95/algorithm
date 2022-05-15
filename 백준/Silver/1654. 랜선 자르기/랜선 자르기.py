import sys
input = sys.stdin.readline

K, N = map(int, input().split())

lan = []

for _ in range(K):
    lan.append(int(input()))

end = max(lan)
start = 1

while start <= end:
    middle = (start + end) // 2

    sum_lan = sum([l // middle for l in lan])

    if sum_lan >= N:
        answer = middle
        start = middle + 1

    else:
        end = middle - 1

print(answer)