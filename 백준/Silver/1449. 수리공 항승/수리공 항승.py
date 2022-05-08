import sys

input = sys.stdin.readline
count = 1

N, L = map(int, input().split())

position = list(map(int, input().split()))
position.sort() # 리스트를 오름차순으로 정렬

start = position[0] # 시작 위치 설정
count = 1 # 기본 테이프 1개로 시작

for tape in position[1:]: # 시작 다음 지점부터 검사
    if tape in range(start, start+L): # 주어진 범위내에 있을경우
        continue # 진행

    else: # 주어진 범위를 벗어날 경우 -> 테이프 범위내에 없을경우
        count += 1 # 테이프 1개 증가
        start = tape # 현재로 시작위치 변경

print(count) # 테이프 개수 출력