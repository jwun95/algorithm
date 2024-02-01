import java.io.*;
import java.util.*;

public class Main {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();

		StringTokenizer st = new StringTokenizer(br.readLine(), " ");
		int N = Integer.parseInt(st.nextToken());
		int M = Integer.parseInt(st.nextToken());

		int[][] arr = new int[N + 1][N + 1];

		for (int x = 1; x < N + 1; x++) {
			st = new StringTokenizer(br.readLine(), " ");
			for (int y = 1; y < N + 1; y++) {
				arr[x][y] = Integer.parseInt(st.nextToken()) + arr[x][y - 1];
			}
		}
		
		int sum = 0;

		for (int m = 0; m < M; m++) {
			st = new StringTokenizer(br.readLine(), " ");
			int lx = Integer.parseInt(st.nextToken());
			int ly = Integer.parseInt(st.nextToken());
			int rx = Integer.parseInt(st.nextToken());
			int ry = Integer.parseInt(st.nextToken());
			
			for (int i = lx; i <= rx; i ++) {
				sum += (arr[i][ry] - arr[i][ly - 1]);
			}
			
			sb.append(sum).append("\n");
			sum = 0;
		}

		System.out.println(sb.toString());
	}

}