import sys

input = sys.stdin.readline

n, k = map(int, input().split(" "))

def factorial(num):

    count = 1

    for i in range(num, 1, -1):
        count *= i

    return count

n_fac = factorial(n)
k_fac = factorial(k)
nk_fac = factorial(n-k)

print((n_fac // (k_fac * nk_fac)) % 10007)