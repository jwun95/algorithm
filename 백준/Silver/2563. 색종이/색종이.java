import java.io.*;
import java.util.*;

public class Main {
	
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int N = Integer.parseInt(br.readLine());
		StringTokenizer st;
		
		int answer = 0;
		boolean[][] v = new boolean[101][101];
		
		for (int n = 0 ; n < N; n ++) {
			st = new StringTokenizer(br.readLine(), " ");
			int a = Integer.parseInt(st.nextToken());
			int b = Integer.parseInt(st.nextToken());
			
			for (int x = a; x < a + 10; x++) {
				for (int y = b; y < b + 10; y++) {
					v[x][y] = true;
				}
			}
		}
		
		for (int x = 0; x < 101; x++) {
			for (int y = 0; y < 101; y ++) {
				if (v[x][y]) answer++;
			}
		}
		
		System.out.println(answer);
		br.close();
	}

}