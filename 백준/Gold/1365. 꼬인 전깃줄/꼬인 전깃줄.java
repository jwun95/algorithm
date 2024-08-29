import java.io.*;
import java.util.*;

public class Main {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int N = Integer.parseInt(br.readLine());

		StringTokenizer st = new StringTokenizer(br.readLine());

		int[] arr = new int[N];

		for (int n = 0; n < N; n++) {
			arr[n] = Integer.parseInt(st.nextToken());
		}

		int[] lis = new int[N];

		int idx = 0;

		for (int n : arr) {
			if (idx == 0 || n > lis[idx - 1]) {
				lis[idx] = n;
				idx++;
				continue;
			}

			int i = 0;
			int j = idx - 1;

			while (i < j) {
				int mid = (i + j) / 2;

				if (lis[mid] < n) {
					i = mid + 1;
				} else {
					j = mid;
				}
				
			}
            lis[j] = n;
		}
		System.out.println(N - idx);
	}

}
