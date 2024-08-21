import java.io.*;
import java.util.*;

public class Main {

	static final int[] dy = { 0, 0, -1, 1 };
	static final int[] dx = { 1, -1, 0, 0 };

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		StringBuilder sb = new StringBuilder();
		int count = 1;

		while (true) {
			int T = Integer.parseInt(br.readLine());
			if (T == 0)
				break;

			int[][] map = new int[T][T];
			int[][] memo = new int[T][T];
			

			for (int y = 0; y < T; y++) {
				st = new StringTokenizer(br.readLine(), " ");
				for (int x = 0; x < T; x++) {
					map[y][x] = Integer.parseInt(st.nextToken());
				}

			}

			ArrayDeque<int[]> queue = new ArrayDeque<>();
			queue.offer(new int[] { 0, 0 });
			boolean[][] v = new boolean[T][T];
			v[0][0] = true;
			memo[0][0] = map[0][0];

			while (!queue.isEmpty()) {
				int[] yx = queue.poll();
				int y = yx[0];
				int x = yx[1];

				for (int d = 0; d < 4; d++) {
					int ny = y + dy[d];
					int nx = x + dx[d];

					if (ny < 0 || ny >= T || nx < 0 || nx >= T)
						continue;

					if (!v[ny][nx]) {
						memo[ny][nx] = memo[y][x] + map[ny][nx];
						v[ny][nx] = true;
						queue.offer(new int[] { ny, nx });
					} else {
						if (memo[ny][nx] > memo[y][x] + map[ny][nx]) {
							memo[ny][nx] = memo[y][x] + map[ny][nx];
							queue.offer(new int[] { ny, nx });
						}
					}
				}
			}
			
			sb.append("Problem").append(" ").append(count).append(":").append(" ").append(memo[T - 1][T - 1]).append("\n");
			count++;
		}

		System.out.println(sb.toString());
		br.close();
	}

}