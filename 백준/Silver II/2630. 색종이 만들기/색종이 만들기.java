import java.io.*;
import java.util.*;

public class Main {

	static int N;
	static int[][] arr;
	static int blue = 0;
	static int white = 0;

	static void dq(int n, int row, int column) {
		int sum = 0;

		for (int x = row; x < row + n; x++) {
			for (int y = column; y < column + n; y++) {
				sum += arr[x][y];
			}
		}

		if (sum == n * n) {
			blue++;
			return;
		} else if (sum == 0) {
			white++;
			return;
		} else {
			int ban = n / 2;
			dq(ban, row, column);
			dq(ban, row + ban, column);
			dq(ban, row, column + ban);
			dq(ban, row + ban, column + ban);
		}
	}

	public static void main(String[] args) throws Exception {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		N = Integer.parseInt(br.readLine());
		arr = new int[N][N];

		StringTokenizer st;

		for (int x = 0; x < N; x++) {
			st = new StringTokenizer(br.readLine(), " ");
			for (int y = 0; y < N; y++) {
				arr[x][y] = Integer.parseInt(st.nextToken());
			}
		}
		dq(N, 0, 0);
		System.out.println(white);
		System.out.println(blue);
	}

}