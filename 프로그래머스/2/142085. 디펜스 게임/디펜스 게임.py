import heapq

def solution(n, k, enemy):
    answer = 0
    heap = []
    
    for idx, e in enumerate(enemy):
        n = n - e
        answer = idx
        heapq.heappush(heap, (-e, e))

        while n < 0:
            if k == 0:
                return answer
            k = k - 1
            add = heapq.heappop(heap)[1]
            n = n + add       
    
    return len(enemy)