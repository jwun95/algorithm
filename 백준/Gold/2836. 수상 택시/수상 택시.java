import java.io.*;
import java.util.*;

public class Main {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		StringTokenizer st = new StringTokenizer(br.readLine());

		int N = Integer.parseInt(st.nextToken());
		int M = Integer.parseInt(st.nextToken());

		ArrayList<int[]> al = new ArrayList<>();

		for (int n = 0; n < N; n++) {
			st = new StringTokenizer(br.readLine());
			int start = Integer.parseInt(st.nextToken());
			int end = Integer.parseInt(st.nextToken());

			if (start > end) {
				al.add(new int[] { start, end });
			}
		}

		Collections.sort(al, (a, b) -> a[1] - b[1]);
		long answer = M;
		int gStart = 0;
		int gEnd = 0;

		for (int[] a : al) {
			if (gStart == 0 && gEnd == 0) {
				gStart = a[1];
				gEnd = a[0];

				continue;
			}

			if (gEnd < a[1]) {
				answer += (gEnd - gStart) * 2L;
				gStart = a[1];
				gEnd = a[0];
			} else {
				gStart = Math.min(gStart, a[1]);
				gEnd = Math.max(gEnd, a[0]);
			}
		}
		answer += (gEnd - gStart) * 2L;
		System.out.println(answer);
	}

}
