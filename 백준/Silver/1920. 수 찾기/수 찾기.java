
import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.*;

public class Main {

	static int N;
	static int[] arr;

	static int binarySearch(int value) {

		int end = N;
		int start = 0;

		while (start < end) {
			int mid = (end + start) / 2;
			int temp = arr[mid];

			if (temp == value)
				return 1;

			if (temp < value) {
				start = mid + 1;
			} else {
				end = mid;
			}
		}

		return 0;
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();

		N = Integer.parseInt(br.readLine());

		StringTokenizer st = new StringTokenizer(br.readLine());

		arr = new int[N];

		for (int n = 0; n < N; n++) {
			arr[n] = Integer.parseInt(st.nextToken());
		}

		Arrays.sort(arr);

		int M = Integer.parseInt(br.readLine());
		st = new StringTokenizer(br.readLine());
		
		for (int m = 0; m < M; m++) {
			int num = Integer.parseInt(st.nextToken());
			int result = binarySearch(num);
			sb.append(result).append("\n");
		}

		System.out.println(sb.toString());

		br.close();
	}

}
