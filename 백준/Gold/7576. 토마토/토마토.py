from collections import deque
import sys

m, n = map(int, input().split())
matrix = [list(map(int, input().split())) for _ in range(n)]
# 좌표를 넣을 것이기 때문에 [] 형태로 넣는다.
queue = deque([])
# 방향 리스트.
dx, dy = [-1, 1, 0, 0], [0, 0, -1, 1]
# 정답이 담길 변수
res = 0

# queue에 처음 위치 좌표를 넣는다.
for i in range(n):
    for j in range(m):
        if matrix[i][j] == 1:
            queue.append([i, j])

# bfs 함수. 한번 들어가면 다 돌고 나오니까 재귀 할 필요 없음
def bfs():
    while queue:
        # 처음 토마토 좌표 x, y에 꺼내고
        x, y = queue.popleft()
        # 처음 토마토 사분면의 익힐 토마토들을 찾아본다.
        for i in range(4):
            nx, ny = dx[i] + x, dy[i] + y
            # 해당 좌표가 좌표 크기를 넘어가면 안되고, 그 좌표에 토마토가 익지 않은채로 있어야 함(0).
            if 0 <= nx < n and 0 <= ny < m and matrix[nx][ny] == 0:
                # 익히고 1을 더해주면서 횟수를 세어주기
                # 여기서 나온 제일 큰 값이 정답이 될 것임
                matrix[nx][ny] = matrix[x][y] + 1
                queue.append([nx, ny])

bfs()
for i in matrix:
    for j in i:
        # 다 찾아봤는데 토마토를 익히지 못했다면 -1 출력
        # 지점마다 사이드를 확인해가면서 -1로 둘러 쌓여진 부분이 있으면 -1를 출력하려 했다.
        # 하지만 어차피 -1로 둘러 쌓여져 있으면 지점을 다 돌아도 0으로 남아 있기 때문에
        # 마지막에 0이 있냐 없냐만 체크해주면 되는 것은 좋은 아이디어이다.
        if j == 0:
            print(-1)
            exit(0)
    # 다 익혔다면 최댓값이 정답
    res = max(res, max(i))
# 처음 시작을 1로 표현했으니 1을 빼준다.
print(res - 1)
