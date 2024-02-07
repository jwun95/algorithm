import java.io.*;
import java.util.*;

public class Main {

	static final int[] dx = { 0, 0, 1, -1 };
	static final int[] dy = { 1, -1, 0, 0 };

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		boolean[][] v = new boolean[101][101];

		int N = Integer.parseInt(br.readLine());
		StringTokenizer st;

		for (int n = 0; n < N; n++) {
			st = new StringTokenizer(br.readLine(), " ");
			int a = Integer.parseInt(st.nextToken());
			int b = Integer.parseInt(st.nextToken());

			for (int x = a; x < a + 10; x++) {
				for (int y = b; y < b + 10; y++) {
					v[x][y] = true;
				}
			}
		}

		int len = 0;

		for (int x = 0; x < 101; x++) {
			for (int y = 0; y < 101; y++) {
				if (v[x][y]) {
					for (int d = 0; d < 4; d++) {
						int nx = x + dx[d];
						int ny = y + dy[d];

						if (nx < 0 || nx >= 101 || ny < 0 || ny >= 101) {
							len++;
							continue;
						}

						if (!v[nx][ny])
							len++;

					}
				}
			}
		}

		System.out.println(len);

		br.close();

	}

}