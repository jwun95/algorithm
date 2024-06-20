import java.io.*;
import java.util.*;

public class Main {

	static int N, E;
	static int[][] graph;
	static final int INF = 200_000_000;

	static int dij(int s, int e) {
		int[] minEdge = new int[N];
		Arrays.fill(minEdge, INF);
		minEdge[s] = 0;
		boolean[] v = new boolean[N];

		for (int i = 0; i < N; i++) {
			int min = INF;
			int vertex = -1;

			for (int j = 0; j < N; j++) {
				if (!v[j] && minEdge[j] < min) {
					min = minEdge[j];
					vertex = j;
				}
			}

			if (vertex == -1)
				break;

			v[vertex] = true;

			for (int k = 0; k < N; k++) {
				if (!v[k] && graph[vertex][k] != 0 && minEdge[k] > graph[vertex][k] + min) {
					minEdge[k] = graph[vertex][k] + min;
				}
			}
		}

		return minEdge[e];
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		StringTokenizer st = new StringTokenizer(br.readLine());

		N = Integer.parseInt(st.nextToken());
		E = Integer.parseInt(st.nextToken());

		graph = new int[N][N];

		for (int e = 0; e < E; e++) {
			st = new StringTokenizer(br.readLine());
			int s = Integer.parseInt(st.nextToken()) - 1;
			int f = Integer.parseInt(st.nextToken()) - 1;
			int w = Integer.parseInt(st.nextToken());

			graph[s][f] = w;
			graph[f][s] = w;
		}
		
		st = new StringTokenizer(br.readLine());

		int must1 = Integer.parseInt(st.nextToken()) - 1;
		int must2 = Integer.parseInt(st.nextToken()) - 1;

		int result1 = 0;

		result1 += dij(0, must1);
		result1 += dij(must1, must2);
		result1 += dij(must2, N - 1);

		int result2 = 0;

		result2 += dij(0, must2);
		result2 += dij(must2, must1);
		result2 += dij(must1, N - 1);

		int result = Math.min(result1, result2);

		System.out.println(result >= INF ? -1 : result);

	}

}