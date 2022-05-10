import sys

N = int(sys.stdin.readline())

times = []
for i in range(N):
    s, e = map(int, sys.stdin.readline().split())
    times.append([s, e])

times.sort(key = lambda x: (x[1], x[0]))
end_time = times[0][1]
count = 1

for i in range(1, N):

    if end_time <= times[i][0]:
        count += 1
        end_time = times[i][1]

print(count)