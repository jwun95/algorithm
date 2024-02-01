import java.io.*;
import java.util.*;

public class Main {

	static int N;
	static int[][] arr;
	static int answer = Integer.MAX_VALUE;
	static int C = 0;
	
	static void subs(int cnt, int shower, int bitter) {
		if (cnt == N) {
			C++;
			
			if (C == 1 << N) return;
			answer = Math.min(answer, Math.abs(shower - bitter));
			return;
		}
		
		subs(cnt + 1, shower * arr[cnt][0], bitter + arr[cnt][1]);
		subs(cnt + 1, shower, bitter);
	}
	
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		N = Integer.parseInt(br.readLine());
		arr = new int[N][2];
		
		StringTokenizer st;
		
		for (int n = 0; n < N; n ++) {
			st = new StringTokenizer(br.readLine(), " ");
			arr[n][0] = Integer.parseInt(st.nextToken());
			arr[n][1] = Integer.parseInt(st.nextToken());
		}
		
		C = 0;
		subs(0, 1, 0);
		System.out.println(answer);
	}

}