
import java.io.*;
import java.util.*;

public class Main {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		StringTokenizer st = new StringTokenizer(br.readLine(), " ");
		
		int N = Integer.parseInt(st.nextToken());
		int K = Integer.parseInt(st.nextToken());
		
		int[] W = new int[N + 1];
		int[] V = new int[N + 1];
		int[] dp = new int[K + 1];
		
		for (int n = 1; n <= N; n ++) {
			st = new StringTokenizer(br.readLine(), " ");
			W[n] = Integer.parseInt(st.nextToken());
			V[n] = Integer.parseInt(st.nextToken());
		}
		
		for (int i = 0; i <= N; i ++) {
			for (int j = K; j - W[i] >= 0; j--) {
				dp[j] = Math.max(dp[j], dp[j - W[i]] + V[i]);
			}
		}
		
		System.out.println(dp[K]);
	}

}
