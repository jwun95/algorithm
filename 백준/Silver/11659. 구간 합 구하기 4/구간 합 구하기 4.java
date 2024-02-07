import java.io.*;
import java.util.*;

public class Main {

	public static void main(String[] args) throws Exception {
		//System.setIn(new FileInputStream("res/input.txt"));
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		
		StringTokenizer st = new StringTokenizer(br.readLine(), " ");
		
		int N = Integer.parseInt(st.nextToken());
		int M = Integer.parseInt(st.nextToken());
		
		int[] arr = new int[N + 1];
		
		st = new StringTokenizer(br.readLine(), " ");
		
		for (int n = 1; n <= N; n ++) {
			arr[n] = arr[n - 1] + Integer.parseInt(st.nextToken());
		}
		
		for (int m = 0; m < M; m ++) {
			st = new StringTokenizer(br.readLine(), " ");
			int start = Integer.parseInt(st.nextToken());
			int end = Integer.parseInt(st.nextToken());
			
			sb.append(arr[end] - arr[start - 1]).append("\n");
		}
		
		System.out.println(sb.toString());
		br.close();
	}

}