import math
import itertools
import sys


N = int(sys.stdin.readline().rstrip())
numbers = list(map(int, sys.stdin.readline().split()))
signals = list(map(int, sys.stdin.readline().split()))
permutations = []
answer = []


def caculator(arr):
    hap = numbers[0]
    for i in range(0, N - 1):
        if arr[i] == "+":
            hap += numbers[i + 1]
        elif arr[i] == "-":
            hap -= numbers[i + 1]
        elif arr[i] == "x":
            hap = hap * numbers[i + 1]
        else:
            if hap < 0:
                hap = math.ceil(hap / numbers[i + 1])
            else:
                hap = hap // numbers[i + 1]

    return hap


for s in range(0, 4):
    for signal in range(0, signals[s]):
        if s == 0:
            permutations.append("+")
        elif s == 1:
            permutations.append("-")
        elif s == 2:
            permutations.append("x")
        else:
            permutations.append("/")

nPr = list(itertools.permutations(permutations, N - 1))
for n in nPr:
    answer.append(caculator(list(n)))

print(max(answer))
print(min(answer))