import java.util.*;

class Solution {
    public int solution(int[][] jobs) {
        int finish = 0;
        int answer = 0;
        
        Arrays.sort(jobs, (x, y) -> x[0] != y[0] ? x[0] - y[0] : x[1] - y[1]);
        
        PriorityQueue<int[]> pq = new PriorityQueue<>((x, y) -> x[1] - y[1]);
        int i = 0;
        
        while (i < jobs.length) {
            //System.out.println(finish);
            if (pq.isEmpty() && jobs[i][0] >= finish) {
                finish = jobs[i][1] + jobs[i][0];
                answer += jobs[i][1];
                i++;
                continue;
            }
            
            if (jobs[i][0] <= finish) {
                pq.offer(new int[]{jobs[i][0], jobs[i][1]});
                i++;
                continue;
            }
            
            if (!pq.isEmpty()) {
                int[] temp = pq.poll();
                answer += (finish - temp[0]) + temp[1];
                finish += temp[1];
            }
        }
        
        while (!pq.isEmpty()) {
            int[] temp = pq.poll();
            answer += (finish - temp[0]) + temp[1];
            finish += temp[1];
        }
        
        System.out.println(finish);
        
        return answer / jobs.length;
    }
}