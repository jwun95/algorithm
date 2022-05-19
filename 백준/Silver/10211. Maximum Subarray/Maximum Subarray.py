import sys
input = sys.stdin.readline

T = int(input())

for _ in range(T):
    N = int(input())
    arr = list(map(int, input().split()))
    dp = [0] * N

    dp[0] = arr[0]

    for a in range(1, N):
        dp[a] = max(dp[a-1]+arr[a], arr[a])

    print(max(dp))