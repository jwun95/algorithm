from collections import deque
 
MAX = 100001
N,K = map(int, input().split())
mapp = [0]*MAX
def bfs():
    q = deque([N])
    while q:
        pos = q.popleft()
        if pos == K:
            return mapp[pos]
        for next_pos in (pos-1, pos+1, pos*2):
            if 0<=next_pos<MAX and not mapp[next_pos]:
                mapp[next_pos] = mapp[pos]+1
                q.append(next_pos)
                
print(bfs())