import java.util.*;
import java.io.*;

public class Main {

	static int N, M;
	static int[][] graph;
	static boolean[] list;
	static boolean[] visit;

	static void dfs(int c) {
		visit[c] = true;

		for (int i = 0; i < N; i++) {
			if (graph[c][i] == 1 && !visit[i]) {
				dfs(i);
			}
		}
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		N = Integer.parseInt(br.readLine());

		M = Integer.parseInt(br.readLine());

		graph = new int[N][N];

		list = new boolean[N];
		visit = new boolean[N];

		StringTokenizer st;

		for (int y = 0; y < N; y++) {
			st = new StringTokenizer(br.readLine());
			for (int x = 0; x < N; x++) {
				graph[y][x] = Integer.parseInt(st.nextToken());
			}
		}

		st = new StringTokenizer(br.readLine());

		int city = 0;

		for (int m = 0; m < M; m++) {
			city = Integer.parseInt(st.nextToken()) - 1;
			list[city] = true;
		}

		dfs(city);

		String answer = "YES";

		for (int n = 0; n < N; n++) {
			if (!visit[n] && list[n]) {
				answer = "NO";
				break;
			}
		}

		System.out.println(answer);

		br.close();
	}

}