import sys
input = sys.stdin.readline

N = int(input())
K = int(input())

if N <= K:
    print(0)
    exit()

position = list(map(int, input().split()))

position.sort()
dist = []

for i in range(1, N):
    dist.append(position[i] - position[i-1])

dist.sort()

for _ in range(K-1):
    dist.pop()

print(sum(dist))