import sys
from collections import deque

input = sys.stdin.readline

dx = [1, -1, 0, 0, 0, 0]
dy = [0, 0, 1, -1, 0, 0]
dl = [0, 0, 0, 0, 1, -1]


def bfs(gl, column, row):
    queue.append([gl, column, row]) # q에 현재 좌표 입력!! ex)시작 일 경우 시작 좌표 입력
    visited[gl][column][row] = 1 # 방문처리를 해줍니다.
    while queue:
        gl, column, row = queue.popleft()

        # 방향입니다. 동서남북 위 아래 총 6번
        for i in range(6):
            nl = gl + dl[i]
            ny = column + dy[i]
            nx = row + dx[i]

            if 0 <= nx < r and 0 <= ny < c and 0 <= nl < l: # 범위를 벗어나지 않는 경우에만 실행합니다.
                if graph[nl][ny][nx] == 'E': # 다음 방문할 곳이 종료 지점이면!
                    # 정답을 출력합니다.
                    print("Escaped in {0} minute(s).".format(
                        visited[gl][column][row]))
                    return # 종료
                if graph[nl][ny][nx] == '.' and visited[nl][ny][nx] == 0: # 다음 방문 지점이 방문할 수 있고 ('.'일 경우) 아직 방문하지 않았을 경우
                    visited[nl][ny][nx] = visited[gl][column][row] + 1 # 경로 횟수 추가
                    queue.append([nl, ny, nx]) # 큐에 추가

    print("Trapped!")

while True:
    l, c, r = map(int, input().split()) # L, R, C 입력
    if l == 0 and r == 0 and c == 0: # 전부 1부터 시작하므로 0일 경우 종료
        break
    graph = [[[]*r for _ in range(c)] for _ in range(l)] # 그래프 입력을 받을 리스트 생성
    visited = [[[0]*r for _ in range(c)] for _ in range(l)] # 그래프 방문경로 리스트 생성
    queue = deque() # 큐 생성 bfs이므로
    for i in range(l):
        graph[i] = [list(map(str, input().strip())) for _ in range(c)] # 입력 값 리스트에 추가
        input() # 공백 -> \n

    for gl in range(l):
        for column in range(c):
            for row in range(r):
                if graph[gl][column][row] == 'S': # S면 시작!
                    bfs(gl, column, row)