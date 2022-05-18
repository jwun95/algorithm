import sys
input = sys.stdin.readline

N = int(input())

n_list = list(map(int, input().split()))

M = int(input())

m_list = list(map(int, input().split()))
answer = []

n_list.sort()

for m in m_list:

    start = 0
    end = len(n_list) - 1
    answer = 0

    while start <= end:
        middle = (start + end) // 2

        if n_list[middle] == m:
            answer = 1
            break

        elif n_list[middle] < m:
            start = middle + 1

        else:
            end = middle - 1

    print(answer, end=" ")