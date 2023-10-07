import itertools

N = int(input())
data = [list(map(int, input().split())) for _ in range(N)]
numbers = [_ for _ in range(N)]

combi = list(itertools.combinations(numbers, N // 2))


def caculator(arr):
    result = 0
    com = list(itertools.combinations(arr, 2))
    for c in com:
        pair = list(c)
        result += data[pair[0]][pair[1]]
        result += data[pair[1]][pair[0]]

    return result


answer = []

for i in range(len(combi) // 2):
    first = caculator(combi[i])
    second = caculator(combi[-i - 1])
    answer.append(abs(first - second))

print(min(answer))