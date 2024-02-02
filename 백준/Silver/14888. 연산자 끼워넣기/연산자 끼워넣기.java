import java.io.*;
import java.util.*;

public class Main {

	static int N;
	static int[] signals = new int[4];
	static int[] numbers;
	static int maxVal;
	static int minVal;

	static void perm(int cnt, int sum) {
		if (cnt == N) {
			maxVal = Math.max(sum, maxVal);
			minVal = Math.min(sum, minVal);
			return;
		}
		;

		for (int i = 0; i < 4; i++) {
			if (signals[i] == 0)
				continue;
			signals[i]--;
			if (i == 0) {
				perm(cnt + 1, sum + numbers[cnt]);
			} else if (i == 1) {
				perm(cnt + 1, sum - numbers[cnt]);
			} else if (i == 2) {
				perm(cnt + 1, sum * numbers[cnt]);
			} else {
				perm(cnt + 1, sum / numbers[cnt]);
			}
			signals[i]++;
		}
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();

		N = Integer.parseInt(br.readLine());
		maxVal = Integer.MIN_VALUE;
		minVal = Integer.MAX_VALUE;
		numbers = new int[N];
		StringTokenizer st = new StringTokenizer(br.readLine(), " ");
		for (int i = 0; i < N; i++) {
			numbers[i] = Integer.parseInt(st.nextToken());
		}
		st = new StringTokenizer(br.readLine(), " ");
		for (int i = 0; i < 4; i++) {
			signals[i] = Integer.parseInt(st.nextToken());
		}
		perm(1, numbers[0]);
		System.out.println(maxVal);
		System.out.println(minVal);
	}

}