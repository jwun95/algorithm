import java.io.*;
import java.util.*;

public class Main {

	static final int[] dx = { 0, 0, 1, -1 };
	static final int[] dy = { 1, -1, 0, 0 };
	static int N, M, V;
	static int[][] arr;
	static String dfsStr = "";
	static String bfsStr = "";
	static boolean[] v;
	
	static void dfs(int x) {
		v[x] = true;
		
		dfsStr += x + " ";
		
		for (int y = 1; y <= N; y++) {
			if (arr[x][y] == 1 && !v[y]) dfs(y); 
		}
	}
	
	static void bfs(int x) {
		ArrayDeque<Integer> queue = new ArrayDeque<>();
		queue.offer(x);
		v = new boolean[N + 1];
		v[x] = true;
		
		while (!queue.isEmpty()) {
			int n = queue.poll();
			bfsStr += n + " ";
			
			for (int y = 1; y <= N; y ++) {
				if (!v[y] && arr[n][y] == 1) {
					queue.offer(y);
					v[y] = true;
				}
			}
		}
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		StringTokenizer st = new StringTokenizer(br.readLine(), " ");
		
		N = Integer.parseInt(st.nextToken());
		M = Integer.parseInt(st.nextToken());
		V = Integer.parseInt(st.nextToken());
		
		arr = new int[N + 1][N + 1];
		v = new boolean[N + 1];
		
		for (int m = 0 ; m < M; m ++) {
			st = new StringTokenizer(br.readLine(), " ");
			int x = Integer.parseInt(st.nextToken());
			int y = Integer.parseInt(st.nextToken());
			
			arr[x][y] = arr[y][x] = 1;
		}
		
		dfs(V);
		bfs(V);
		System.out.println(dfsStr.trim());
		System.out.println(bfsStr.trim());
		br.close();
	}

}