import java.io.*;
import java.util.*;

public class Main {

	static char[][] maps = new char[12][6];
	static boolean flag;
	static int answer;
	static final int[] dy = { 1, -1, 0, 0 };
	static final int[] dx = { 0, 0, -1, 1 };

	static boolean bomb(int y, int x) {
		char curr = maps[y][x];
		ArrayDeque<int[]> queue = new ArrayDeque<>();
		queue.offer(new int[] { y, x });
		boolean[][] v = new boolean[12][6];
		ArrayList<int[]> sub = new ArrayList<>();

		while (!queue.isEmpty()) {
			int[] rc = queue.poll();
			int r = rc[0];
			int c = rc[1];

			for (int d = 0; d < 4; d++) {
				int nr = r + dy[d];
				int nc = c + dx[d];

				if (0 <= nr && nr < 12 && 0 <= nc && nc < 6 && !v[nr][nc] && maps[nr][nc] == curr) {
					v[nr][nc] = true;
					queue.offer(new int[] { nr, nc });
					sub.add(new int[] { nr, nc });
				}
			}
		}

		if (sub.size() >= 4) {
			for (int i = 0; i < sub.size(); i++) {
				maps[sub.get(i)[0]][sub.get(i)[1]] = '.';
			}
			return true;
		}
		return false;
	}

	static void drop() {
		for (int y = 10; y >= 0; y--) {
			for (int x = 0; x < 6; x++) {
				if (maps[y][x] != '.') {
					int ny = y;
					while (ny <= 10) {
						if (maps[ny + 1][x] == '.')
							ny++;
						else
							break;
					}
					if (ny != y) {
						maps[ny][x] = maps[y][x];
						maps[y][x] = '.';	
					}
				}
			}
		}
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		for (int y = 0; y < 12; y++) {
			String str = br.readLine();
			for (int x = 0; x < 6; x++) {
				maps[y][x] = str.charAt(x);
			}
		}

		while (true) {

			int check = 0;

			for (int y = 0; y < 12; y++) {
				for (int x = 0; x < 6; x++) {
					if (maps[y][x] != '.') {
						if (bomb(y, x)) {
							check++;
						}
					}
				}
			}
			if (check == 0)
				break;
			
			drop();
			answer++;

		}
		
		System.out.println(answer);
    }
}