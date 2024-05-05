import java.io.*;
import java.util.*;

public class Main {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		StringTokenizer st = new StringTokenizer(br.readLine(), " ");

		int H = Integer.parseInt(st.nextToken());
		int W = Integer.parseInt(st.nextToken());

		st = new StringTokenizer(br.readLine(), " ");
		int[] map = new int[W];

		for (int w = 0; w < W; w++) {
			map[w] = Integer.parseInt(st.nextToken());
		}

		int answer = 0;

		for (int w = 1; w < W - 1; w++) {
			int left = 0, right = 0;

			for (int l = 0; l < w; l++) {
				left = Math.max(map[l], left);
			}

			for (int r = w + 1; r < W; r++) {
				right = Math.max(map[r], right);
			}

			if (map[w] < left && map[w] < right)
				answer += Math.min(left, right) - map[w];

		}

		System.out.println(answer);

		br.close();
	}

}
