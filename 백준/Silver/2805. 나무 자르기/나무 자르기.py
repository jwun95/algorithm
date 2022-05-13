import sys
input = sys.stdin.readline

N, M = map(int, input().split())
tree = list(map(int, input().split()))

start = 0
end = max(tree)
answer = 0

while start <= end:
  middle = (start + end) // 2
  res = 0

  res = sum([t-middle if middle < t else 0 for t in tree])

  if res >= M:
    answer = middle
    start = middle + 1

  else:
    end = middle - 1

print(answer)