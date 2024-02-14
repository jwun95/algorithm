import java.io.*;
import java.util.*;

public class Main {

	static int N;
	static int[][] arr;
	static String answer = "";

	static void dq(int n, int row, int column) {

		int sum = 0;

		for (int x = row; x < row + n; x++) {
			for (int y = column; y < column + n; y++) {
				sum += arr[x][y];
			}
		}

		if (sum == 0) {
			answer += "0";
			return;
		} else if (sum == n * n) {
			answer += "1";
			return;
		} else {
			answer += "(";
			int n2 = n / 2;
			dq(n2, row, column);
			dq(n2, row, column + n2);
			dq(n2, row + n2, column);
			dq(n2, row + n2, column + n2);
			answer += ")";
		}
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		N = Integer.parseInt(br.readLine());

		arr = new int[N][N];
		String str;

		for (int x = 0; x < N; x++) {
			str = br.readLine();
			for (int y = 0; y < N; y++) {
				arr[x][y] = str.charAt(y) - '0';
			}
		}
		
		dq(N, 0, 0);
		
		System.out.println(answer);
	}

}