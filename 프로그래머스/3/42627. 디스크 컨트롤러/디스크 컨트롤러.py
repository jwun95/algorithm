import heapq

def solution(jobs):
    answer = 0
    N = len(jobs)
    heap = []
    count = 0
    start = -1
    current = 0
    
    while count < N:
        for j in jobs:
            if start < j[0] <= current:
                heapq.heappush(heap, [j[1], j[0]])
        
        if heap:
            [x, y] = heapq.heappop(heap)
            start = current
            current += x
            answer += current - y
            count += 1
        else:
            current += 1

    return answer // N