import heapq

def solution(scoville, K):
    heap = scoville
    heapq.heapify(heap)
    answer = 0
    
    while heap:
        if len(heap) == 1 and heap[0] < K:
            return -1
        min_value = heapq.heappop(heap)
        if min_value >= K:
            break
            
        min_value2 = heapq.heappop(heap)
        value = min_value + (min_value2 * 2)
        heapq.heappush(heap, value)
        answer += 1
    
    return answer