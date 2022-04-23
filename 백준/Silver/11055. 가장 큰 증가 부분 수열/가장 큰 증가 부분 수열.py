n=int(input())
array=list(map(int, input().split()))

d=[1]*n
d[0]=array[0] # dp의 d의 0에는 array의 0번째 인덱스 값으로 시작
for i in range(1,n):
  for j in range(i):
    if array[j]<array[i]: # 현재 값과 다음 값을 비교해서 다음 값이 클 때,
      d[i]=max(d[i], d[j]+array[i]) # 다음 값이 크면 수열이 성립이 되므로 
      								# 현재까지의 수를 더한다. 
    else:
      d[i]=max(d[i], array[i]) # 아닐경우 수열 성립이 되지 않으므로 
                               # 기존 array값과 현재 인덱스의 값을 비교해서 넣어준다.
                               
# 예를 들어서 i는 2일 경우 j는 0부터 2까지 시작
# i = 2 , j = 0일 경우 수열이 성립 되므로 d[i]에는 1 + 2가 들어간 3이 된다.
# i = 2 , j = 1일 경우 수열이 성립이 안되므로 d[i]에는 기존 array값인 2와 j가 0일 때 들어간
# 3의 값을 비교해준다. 

print(max(d))