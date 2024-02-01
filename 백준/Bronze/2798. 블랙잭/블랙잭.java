import java.io.*;
import java.util.*;

public class Main {
	
	static int M;
	static int N;
	static int[] arr;
	static int answer = Integer.MAX_VALUE;
	static int[] b = new int[3];
	static boolean[] v;
	
	static void comb(int cnt, int start, int sum) {
		if (cnt == 3) {
			
			if (sum <= M && Math.abs(M - sum) < answer) {
				answer = Math.abs(M - sum);
			}
			
			return;
		}
		for (int i = start; i < N; i ++) {
			b[cnt] = arr[i];
			comb(cnt + 1, i + 1, sum + arr[i]);
		}
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine(), " ");
		N = Integer.parseInt(st.nextToken());
		M = Integer.parseInt(st.nextToken());
		arr = new int[N];
		v = new boolean[N];
		answer = M;
		
		st = new StringTokenizer(br.readLine(), " ");
		
		for (int n = 0 ; n < N; n++) {
			arr[n] = Integer.parseInt(st.nextToken());
		}
		comb(0,0, 0);
		System.out.println(M - answer);
	}

}