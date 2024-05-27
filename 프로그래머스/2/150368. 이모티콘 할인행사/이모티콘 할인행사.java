import java.util.*;

class Solution {
    
    static int[] a;
    static int N, M;
    static final int[] discount = {10, 20, 30, 40};
    static int[] answer = new int[2];
    
    static void perm(int cnt, int[][] users, int[] emoticons) {
        if (cnt == M) {
            
            int register = 0;
            int cost = 0;
            
            for (int i = 0; i < N; i ++) {
                int temp = 0;
                for (int d = 0; d < M; d ++) {
                    if (discount[a[d]] >= users[i][0]) {
                        temp += emoticons[d] * ((100 - discount[a[d]]) * 0.01);
                    }
                }
                if (temp >= users[i][1]) {
                    register += 1;
                } else {
                    cost += temp;
                }
            }
            
            if (register > answer[0]) {
                answer[0] = register;
                answer[1] = cost;
            }
            if (register == answer[0] && answer[1] < cost) {
                answer[1]  = cost;
            }
            
            return;
        }
        
        for (int i = 0; i < 4; i ++) {
            a[cnt] = i;
            perm(cnt + 1, users, emoticons);
        }
    }
    
    public int[] solution(int[][] users, int[] emoticons) {
        
        M = emoticons.length;
        a = new int[M];
        N = users.length;
        
        perm(0, users, emoticons);
        
        System.out.println(Arrays.toString(answer));
        
        return answer;
    }
}