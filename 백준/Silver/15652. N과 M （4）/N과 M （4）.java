import java.io.*;
import java.util.*;

public class Main {
	static int N, R;
	static int[] answer;
	static StringBuilder sb = new StringBuilder();

	static void comb(int cnt, int start) {
		if (cnt == R) {
			
			String str = "";
			
			for (int a: answer) {
				str += a + " ";
			}
			
			sb.append(str.trim()).append("\n");
			
			return;
		}
		
		for (int i = start; i <= N; i ++) {
			answer[cnt] = i;
			comb(cnt + 1, i);
		}
	}

	public static void main(String[] args) throws Exception {
		//System.setIn(new FileInputStream("res/input4.txt"));
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		StringTokenizer st = new StringTokenizer(br.readLine(), " ");
		N = Integer.parseInt(st.nextToken());
		R = Integer.parseInt(st.nextToken());

		answer = new int[R];
		
		comb(0, 1);
		System.out.println(sb.toString());
	}

}