import java.util.*;

class Node {
    int vertex, weight;
    Node next;
    
    Node(int vertex, int weight, Node next) {
        this.vertex = vertex;
        this.weight = weight;
        this.next = next;
    }
}

class Solution {
    int[] dij(int start, Node[] adj) {
        
        int n = adj.length;
        
        boolean[] visited = new boolean[n];
        int[] minD = new int[n];
        Arrays.fill(minD, Integer.MAX_VALUE);
        minD[start]  = 0;
        
        for (int i = 0; i < n; i ++) {
            int min = Integer.MAX_VALUE;
            int minV = -1;
            
            for (int j = 0; j < n; j ++) {
                if (!visited[j] && minD[j] < min) {
                    minV = j;
                    min = minD[j];
                }
            }
            
            if (minV == -1) break;
            visited[minV] = true;
            
            for (Node temp = adj[minV]; temp != null; temp = temp.next) {
                if (!visited[temp.vertex] && min + temp.weight < minD[temp.vertex]){
                    minD[temp.vertex] = min + temp.weight;
                }
            }
        }
        
        return minD;
    }
    
    public int solution(int n, int s, int a, int b, int[][] fares) {
        Node[] adj = new Node[n];
        
        for (int i = 0; i < fares.length; i ++) {
            int from = fares[i][0] - 1;
            int to = fares[i][1] - 1;
            int weight = fares[i][2];
            
            adj[to] = new Node(from, weight, adj[to]);
            adj[from] = new Node(to, weight, adj[from]);
        }
        
        int[] startMinD = dij(s - 1, adj);
        
        int answer = startMinD[a - 1] + startMinD[b - 1];
        
        int[] aMinD = dij(a - 1, adj);
        int[] bMinD = dij(b - 1, adj);
        
        for (int i = 0; i < n; i ++) {
            if (i != s - 1) {
                answer = Math.min(answer, aMinD[i] + bMinD[i] + startMinD[i]);
            }
        }
        
        return answer;
    }
}