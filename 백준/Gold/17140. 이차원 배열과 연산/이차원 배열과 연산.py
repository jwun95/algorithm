import sys

# 표준 입력을 파일로 바꿨으므로,
# input() 함수는 더이상 사용자 입력을 받지 않고, 지정된 입력 파일을 읽게 됨.
r, c, k = map(int, sys.stdin.readline().split())

# list comprehension을 이용해 이후의 입력값을 받아옴
matrix = [list(map(int, sys.stdin.readline().split())) for _ in range(3)]

row, column = 3, 3


def count_number(counter):
    temp = []
    for c in counter:
        if c != 0:
            temp.append([c, counter[c]])

    temp.sort(key=lambda x: (x[1], x[0]))
    result = []
    for t in temp:
        for k in t:
            result.append(k)

    if len(result) > 100:
        result = result[:100]

    return result


def rCal():
    global matrix, row, column
    temp_column = 0

    for r in range(row):
        counter = {}
        for c in range(column):
            if matrix[r][c] in counter:
                counter[matrix[r][c]] += 1

            else:
                counter[matrix[r][c]] = 1

        result = count_number(counter)
        matrix[r] = result
        temp_column = max(temp_column, len(result))

    for r in range(row):
        if len(matrix[r]) < temp_column:
            matrix[r] = matrix[r] + [0 for _ in range(temp_column - len(matrix[r]))]

    column = temp_column


def cCal():
    global matrix, row, column
    temp_row = 0
    temp_result = []
    for c in range(column):
        counter = {}
        for r in range(row):
            if matrix[r][c] in counter:
                counter[matrix[r][c]] += 1

            else:
                counter[matrix[r][c]] = 1

        result = count_number(counter)
        temp_result.append(result)
        temp_row = max(temp_row, len(result))

    temp_matrix = [[0 for _ in range(column)] for a in range(temp_row)]

    for t in range(len(temp_result)):
        te = temp_result[t] + [0 for _ in range(temp_row - len(temp_result[t]))]

        for k in range(len(te)):
            temp_matrix[k][t] = te[k]

    row = temp_row
    matrix = temp_matrix


count = 0

while True:
    if count > 100:
        print(-1)
        break
    if r <= row and c <= column and matrix[r - 1][c - 1] == k:
        print(count)
        break

    count += 1
    if row >= column:
        rCal()

    else:
        cCal()