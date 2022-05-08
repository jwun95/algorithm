import sys

input = sys.stdin.readline

problem = []
penalty = []

for i in range(11):
    p, t = map(int, input().split())
    problem.append(p)
    penalty.append(t)

problem.sort()
count = problem[0]

for i in range(1, 11):
    count += sum(problem[:i]) + problem[i]

print(count + (20 * sum(penalty)))