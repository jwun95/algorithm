import java.util.*;
import java.io.*;

public class Main {

	static int[][] arr;
	static int N, M;
	static final int[] dx = { 0, 1, 0, -1 };
	static final int[] dy = { 1, 0, -1, 0 };
	static boolean[][] v;

	static void dfs(int sx, int sy) {
		
		int x = sx;
		int y = sy;
		v[x][y] = true;
		int temp = arr[x][y];
		
		for (int d = 0; d < 4; d++) {
			while (true) {
				int nx = x + dx[d];
				int ny = y + dy[d];
				
				if (nx < 0 || nx >= N || ny < 0 || ny >= M || v[nx][ny]) break;
				v[nx][ny] = true;
				arr[x][y] = arr[nx][ny];
				x = nx;
				y = ny;
			}
		}
		arr[x][y] = temp;
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		StringTokenizer st = new StringTokenizer(br.readLine(), " ");

		N = Integer.parseInt(st.nextToken());
		M = Integer.parseInt(st.nextToken());
		int R = Integer.parseInt(st.nextToken());

		arr = new int[N][M];

		for (int x = 0; x < N; x++) {
			st = new StringTokenizer(br.readLine(), " ");
			for (int y = 0; y < M; y++) {
				arr[x][y] = Integer.parseInt(st.nextToken());
			}
		}
		
		int count = 0;
		int limit = Math.min(N, M);
		
		while (count < R) {
			v = new boolean[N][M];
			for (int i = 0; i < limit / 2; i++) {
				dfs(i, i);
			}
			count++;
		}
		
		for (int x = 0; x < N; x++) {
			String str = "";
			for (int y = 0; y < M; y++) {
				str += arr[x][y] + " ";
			}
			sb.append(str.trim()).append("\n");
		}
		System.out.println(sb.toString());
	}

}