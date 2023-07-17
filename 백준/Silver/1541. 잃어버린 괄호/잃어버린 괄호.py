import sys

inputValue = sys.stdin.readline()
def solution(inputValue):
    answer = 0

    expressions = inputValue.split("-")
    minusList = []
    temp = ""

    for expression in expressions:
        stack = 0
        for e in expression:
            if e == "+":
                stack += int(temp)
                temp = ""

            else:
                temp += e

        stack += int(temp)
        minusList.append(stack)
        stack = 0
        temp = ""

    answer = minusList[0]

    if len(minusList) > 1:
        for m in range(1, len(minusList)):
            answer -= minusList[m]

    return answer


print(solution(inputValue))