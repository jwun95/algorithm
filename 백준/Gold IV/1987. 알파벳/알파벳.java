import java.io.*;
import java.util.*;

public class Main {

	static int R, C;
	static final int[] dx = { 0, 0, -1, 1 };
	static final int[] dy = { 1, -1, 0, 0 };
	static char[][] arr;
	static boolean[][] v;
	static boolean[] a;
	static int answer = 1;

	static void dfs(int x, int y, int count) {
		v[x][y] = true;
		a[arr[x][y] - 65] = true;

		for (int d = 0; d < 4; d++) {
			int nx = x + dx[d];
			int ny = y + dy[d];
			
			if (0 > nx || nx >= R || 0 > ny || ny >= C || v[nx][ny] || a[arr[nx][ny] - 65]) {
				answer = Math.max(answer, count);
				continue;
			}
			dfs(nx, ny, count + 1);
		}
		a[arr[x][y] - 65] = false;
		v[x][y] = false;
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		StringTokenizer st = new StringTokenizer(br.readLine(), " ");
		R = Integer.parseInt(st.nextToken());
		C = Integer.parseInt(st.nextToken());
		a = new boolean[30];
		v = new boolean[R][C];
		arr = new char[R][C];

		for (int x = 0; x < R; x++) {
			String str = br.readLine();
			for (int y = 0; y < C; y++) {
				arr[x][y] = str.charAt(y);
			}
		}
		dfs(0,0,1);
		System.out.println(answer);
	}

}