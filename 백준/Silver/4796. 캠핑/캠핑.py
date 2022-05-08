import sys

input = sys.stdin.readline
count = 1

while True:
    L, P, V = map(int, input().split())

    if L == 0 and P == 0 and V == 0:
        break

    res = (V // P) * L
    res += min(V % P, L)

    print(f'Case {count}: {res}')
    count += 1