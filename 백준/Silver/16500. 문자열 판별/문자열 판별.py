def sol(idx):
    global result
    if idx == len(S): # idx와 S의 길이가 같으면 의미가 없음
        result = 1
        return
    if dp[idx]: # 이미 검사를 했을 경우 return
        return
    dp[idx] = 1 # 검사를 했으니 1로 만들어준다.
    for i in range(len(A)): # 단어의 수만큼 반복
        if len(S[idx:]) >= len(A[i]): # 문자열의 길이가 단어보다 길다면 실행
            for j in range(len(A[i])): # 단어의 길이 만큼
                if A[i][j] != S[idx+j]: #
                    break
            else:
                sol(idx+len(A[i]))
    return

S = input()
A = []
dp = [0] * 101
for _ in range(int(input())):
    A.append(input())
result = 0
sol(0)
print(result)