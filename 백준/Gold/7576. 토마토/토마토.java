import java.io.*;
import java.util.*;

public class Main {

	static int N, M;
	static int[][] arr;
	static ArrayDeque<Integer[]> queue = new ArrayDeque<>();
	static final int[] dx = { 0, 0, 1, -1 };
	static final int[] dy = { 1, -1, 0, 0 };
	static int answer = 0;

	static void bfs() {
		while (!queue.isEmpty()) {
			Integer[] xy = queue.poll();
			int x = xy[0];
			int y = xy[1];
			int sum = xy[2];

			for (int d = 0; d < 4; d++) {
				int nx = x + dx[d];
				int ny = y + dy[d];

				if (0 <= nx && nx < N && 0 <= ny && ny < M && arr[nx][ny] == 0) {
					queue.offer(new Integer[] {nx, ny, sum + 1});
					answer = Math.max(answer, sum + 1);
					arr[nx][ny] = 1;
				}
			}
		}
	}

	static boolean checking() {
		for (int x = 0; x < N; x++) {
			for (int y = 0; y < M; y++) {
				if (arr[x][y] == 0)
					return false;
			}
		}
		return true;
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		StringTokenizer st = new StringTokenizer(br.readLine(), " ");
		M = Integer.parseInt(st.nextToken());
		N = Integer.parseInt(st.nextToken());

		arr = new int[N][M];

		for (int n = 0; n < N; n++) {
			st = new StringTokenizer(br.readLine(), " ");
			for (int m = 0; m < M; m++) {
				arr[n][m] = Integer.parseInt(st.nextToken());
				if (arr[n][m] == 1) {
					queue.offer(new Integer[] { n, m, 0 });
				}
			}
		}
		bfs();
		System.out.println(checking() ? answer : -1);
	}

}