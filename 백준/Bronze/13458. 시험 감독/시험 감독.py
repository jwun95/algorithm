import math
import sys


N = int(sys.stdin.readline().rstrip())
rooms = map(int, sys.stdin.readline().split())
B, C = map(int, sys.stdin.readline().split())
num = 0

for room in rooms:
    num += 1
    if room - B > 0:
        num += math.ceil((room - B) / C)

print(num)