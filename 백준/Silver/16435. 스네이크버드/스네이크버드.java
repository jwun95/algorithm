import java.io.*;
import java.util.*;

public class Main {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		StringTokenizer st = new StringTokenizer(br.readLine(), " ");
		int N = Integer.parseInt(st.nextToken());
		int L = Integer.parseInt(st.nextToken());
		int answer = 0;

		int[] arr = new int[N];
		st = new StringTokenizer(br.readLine(), " ");

		for (int n = 0; n < N; n++) {
			arr[n] = Integer.parseInt(st.nextToken());
		}
		
		Arrays.sort(arr);
		
		for (int i = 0 ; i < N; i ++) {
			if (arr[i] > L) break;
			L++;
		}
		
		System.out.println(L);
		br.close();
	}

}