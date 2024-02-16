import java.io.*;
import java.util.*;

public class Main {

	static int N, M, answer;
	static int[][] arr;
	static final int[] dx = { 1, -1, 0, 0 };
	static final int[] dy = { 0, 0, 1, -1 };
	static boolean[][] v;

	static void bfs() {
		ArrayDeque<Integer[]> queue = new ArrayDeque<>();
		queue.offer(new Integer[] { 0, 0, 1 });
		v[0][0] = true;

		while (!queue.isEmpty()) {
			Integer[] xyc = queue.poll();
			int x = xyc[0];
			int y = xyc[1];
			int c = xyc[2];

			for (int d = 0; d < 4; d++) {
				int nx = x + dx[d];
				int ny = y + dy[d];

				if (0 <= nx && nx < N && 0 <= ny && ny < M && arr[nx][ny] == 1 && !v[nx][ny]) {
					if (nx == N - 1 && ny == M - 1) {
						answer = c + 1;
						return;
					}
					v[nx][ny] = true;
					queue.offer(new Integer[] { nx, ny, c + 1 });
				}
			}
		}
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine(), " ");

		N = Integer.parseInt(st.nextToken());
		M = Integer.parseInt(st.nextToken());
		arr = new int[N][M];

		for (int n = 0; n < N; n++) {
			String str = br.readLine();
			for (int m = 0; m < M; m++) {
				arr[n][m] = str.charAt(m) - '0';
			}
		}

		v = new boolean[N][M];
		answer = Integer.MAX_VALUE;

		bfs();

		System.out.println(answer);
	}

}