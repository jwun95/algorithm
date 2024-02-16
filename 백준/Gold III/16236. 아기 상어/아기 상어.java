import java.io.*;
import java.util.*;

public class Main {

	static int N;
	static int[][] arr;
	static int[] curr = new int[2];
	static int answer = 0;
	static final int[] dx = { -1, 0, 1, 0 };
	static final int[] dy = { 0, -1, 0, 1 };
	static int s = 2;
	static int accu = 0;

	static boolean bfs() { // 목표 찾기
		ArrayDeque<Integer[]> queue = new ArrayDeque<>();
		queue.offer(new Integer[] { curr[0], curr[1], 0 });
		boolean[][] v = new boolean[N][N];
		v[curr[0]][curr[1]] = true;
		arr[curr[0]][curr[1]] = 0;
		List<Integer[]> sub = new ArrayList<>();

		while (!queue.isEmpty()) {
			Integer[] xy = queue.poll();
			int cx = xy[0];
			int cy = xy[1];
			int cc = xy[2];

			for (int d = 0; d < 4; d++) {
				int nx = cx + dx[d];
				int ny = cy + dy[d];

				if (0 <= nx && nx < N && 0 <= ny && ny < N && !v[nx][ny] && arr[nx][ny] <= s) {
					if (arr[nx][ny] < s && arr[nx][ny] != 0) {
						sub.add(new Integer[] {nx, ny, cc + 1});
					}
					v[nx][ny] = true;
					queue.offer(new Integer[] { nx, ny, cc + 1 });
				}
			}
		}
		
		if (sub.isEmpty()) return false;
		Collections.sort(sub, (x, y) -> x[2] != y[2] ? x[2] - y[2] : x[0] != y[0] ? x[0] - y[0] : x[1] - y[1]);
		accu++;
		curr[0] = sub.get(0)[0];
		curr[1] = sub.get(0)[1];
		answer += sub.get(0)[2];
		
		arr[curr[0]][curr[1]] = 9;
		
		return true;
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		N = Integer.parseInt(br.readLine());

		arr = new int[N][N];

		StringTokenizer st;

		for (int x = 0; x < N; x++) {
			st = new StringTokenizer(br.readLine(), " ");
			for (int y = 0; y < N; y++) {
				arr[x][y] = Integer.parseInt(st.nextToken());
				if (arr[x][y] == 9) {
					curr[0] = x;
					curr[1] = y;
				}
			}
		}
		while (true) {
			boolean flag = bfs();
			
			if (!flag) break;
			
			if (accu == s) {
				s++;
				accu = 0;
			}
		}
		System.out.println(answer);
	}

}