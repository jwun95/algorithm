import sys
from collections import deque

gears = [list(map(int, list(sys.stdin.readline().rstrip()))) for _ in range(4)]
K = int(input())
cycle = [list(map(int, sys.stdin.readline().split())) for _ in range(K)]


def rolling(gear, direction, idx):
    queue = deque(gear)
    if direction == 1:
        queue.rotate(1)

    else:
        queue.rotate(-1)

    return [queue, idx]


for c in cycle:
    curr = c[0] - 1
    ff = c[1]
    fs = c[1]
    sub = [[gears[curr], ff, curr]]
    for f in range(curr - 1, -1, -1):
        if gears[f + 1][6] != gears[f][2]:
            ff = ff * -1
            sub.append([gears[f], ff, f])
        else:
            break
    for s in range(curr + 1, 4, 1):
        if gears[s - 1][2] != gears[s][6]:
            fs = fs * -1
            sub.append([gears[s], fs, s])
        else:
            break

    for su in sub:
        result = rolling(su[0], su[1], su[2])
        gears[result[1]] = list(result[0])

answer = 0
count = 1
for gear in gears:
    answer += gear[0] * count
    count *= 2

print(answer)