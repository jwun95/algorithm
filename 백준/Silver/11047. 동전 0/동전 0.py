n, k = map(int, input().split())
count = 0
coins = []

for i in range(n):
    coins.append(int(input()))
    
coins.reverse()

while True:

    for coin in coins:
        if k >= coin:
            count = count + (k // coin)
            k = k % coin

    print(count)
    break
