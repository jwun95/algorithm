import sys

sys.setrecursionlimit(10**6)

N = int(sys.stdin.readline().rstrip())
students = [list(map(int, sys.stdin.readline().split())) for _ in range(N**2)]

student_info = {}

for student in students:
    student_info[student[0]] = student[1:]

rooms = [[0 for _ in range(N)] for n in range(N)]

direction = [[0, 1], [1, 0], [0, -1], [-1, 0]]

for student in students:
    curr = student[0]
    temp = []

    for r in range(N):
        for c in range(N):
            friends_num = 0
            space_num = 0
            if rooms[r][c] == 0:
                for d in direction:
                    nr = r + d[0]
                    nc = c + d[1]
                    if 0 <= nr < N and 0 <= nc < N:
                        if rooms[nr][nc] == 0:
                            space_num += 1

                        else:
                            if rooms[nr][nc] in student:
                                friends_num += 1

                temp.append([friends_num, space_num, r, c])

    temp.sort(key=lambda x: (-x[0], -x[1], x[2], x[3]))
    rooms[temp[0][2]][temp[0][3]] = curr

answer = 0

for r in range(N):
    for c in range(N):
        friends_num = 0
        for d in direction:
            nr = r + d[0]
            nc = c + d[1]
            if 0 <= nr < N and 0 <= nc < N:
                if rooms[nr][nc] in student_info[rooms[r][c]]:
                    friends_num += 1

        if friends_num == 1:
            answer += 1
        elif friends_num == 2:
            answer += 10
        elif friends_num == 3:
            answer += 100
        elif friends_num == 4:
            answer += 1000

print(answer)