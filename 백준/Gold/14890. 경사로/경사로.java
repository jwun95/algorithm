import java.io.*;
import java.util.*;

public class Main {
	
	static int N, L;
	static int[][] arr;
	static int sum;
	
	static void row(int r) {
		
		boolean[] v = new boolean[N];
		
		for (int i = 1; i < N; i ++) {
			int a = arr[r][i - 1];
			int b = arr[r][i];
			
			if (Math.abs(a - b) > 1) {
				return;
			} 
			
			if (a - b == 1) { // 다음 높이가 낮을 경우
				v[i] = true;
				for (int l = 1; l < L; l ++) {
					if (i + l >= 0 && i + l < N && arr[r][i + l] == arr[r][i]) {
						v[i + l] = true;
					} else {
						return;
					}
				}
			}
			
			if (b - a == 1) {
				if (v[i - 1]) return;
				v[i - 1] = true;
				for (int l = 1; l < L; l ++) {
					if (i - l - 1 >= 0 && i - l - 1 < N && arr[r][i - l - 1] == arr[r][i - 1] && !v[i - l - 1]) {
						v[i - l] = true;
					} else {
						return;
					}
				}
			}
			
		}
		sum++;
	}
	static void column(int c) {
		boolean[] v = new boolean[N];
		
		for (int i = 1; i < N; i ++) {
			int a = arr[i - 1][c];
			int b = arr[i][c];
			
			if (Math.abs(a - b) > 1) {
				return;
			} 
			
			if (a - b == 1) { // 다음 높이가 낮을 경우
				v[i] = true;
				for (int l = 1; l < L; l ++) {
					if (i + l >= 0 && i + l < N && arr[i + l][c] == arr[i][c]) {
						v[i + l] = true;
					} else {
						return;
					}
				}
			}
			
			if (b - a == 1) {
				if (v[i - 1]) return;
				v[i - 1] = true;
				for (int l = 1; l < L; l ++) {
					if (i - l - 1 >= 0 && i - l - 1 < N && arr[i - l - 1][c] == arr[i - 1][c] && !v[i - l - 1]) {
						v[i - l] = true;
					} else {
						return;
					}
				}
			}
			
		}
		sum++;
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		StringTokenizer st = new StringTokenizer(br.readLine(), " ");

		N = Integer.parseInt(st.nextToken());
		L = Integer.parseInt(st.nextToken());

		arr = new int[N][N];

		for (int x = 0; x < N; x++) {
			st = new StringTokenizer(br.readLine(), " ");
			for (int y = 0; y < N; y++) {
				arr[x][y] = Integer.parseInt(st.nextToken());
			}
		}
		for (int i = 0; i < N; i ++) {
			row(i);
			column(i);
		}
		
		System.out.println(sum);
	}
}