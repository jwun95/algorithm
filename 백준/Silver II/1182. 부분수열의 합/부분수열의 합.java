import java.io.*;
import java.util.*;

public class Main {

	static int N, S;
	static int[] arr;
	static int answer;

	static void back(int start, int sum) {
		
		if (start == N) {
			if (sum == S) answer++;
			return;
		}
		
		back(start + 1, sum + arr[start]);
		back(start + 1, sum);
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		StringTokenizer st = new StringTokenizer(br.readLine(), " ");

		N = Integer.parseInt(st.nextToken());
		S = Integer.parseInt(st.nextToken());

		st = new StringTokenizer(br.readLine(), " ");
		arr = new int[N];

		for (int n = 0; n < N; n++) {
			arr[n] = Integer.parseInt(st.nextToken());
		}

		back(0, 0);
		System.out.println(S == 0 ? answer - 1: answer);
	}

}