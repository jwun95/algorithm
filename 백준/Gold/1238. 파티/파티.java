import java.io.*;
import java.util.*;

public class Main {
	static int N, M, X;
	static int[][] graph;
	static int[] x;

	static int[] dij(int idx) {
		int[] minEdge = new int[N];
		Arrays.fill(minEdge, Integer.MAX_VALUE);
		minEdge[idx] = 0;
		boolean[] v = new boolean[N];

		for (int i = 0; i < N; i++) {
			int min = Integer.MAX_VALUE;
			int minVertex = -1;

			for (int k = 0; k < N; k++) {
				if (!v[k] && minEdge[k] < min) {
					min = minEdge[k];
					minVertex = k;
				}
			}

			if (minVertex == -1)
				break;

			v[minVertex] = true;

			for (int j = 0; j < N; j++) {
				if (!v[j] && minEdge[j] > min + graph[minVertex][j] && graph[minVertex][j] != 0) {
					minEdge[j] = min + graph[minVertex][j];
				}
			}
		}
		return minEdge;
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		StringTokenizer st = new StringTokenizer(br.readLine());
		N = Integer.parseInt(st.nextToken());
		M = Integer.parseInt(st.nextToken());
		X = Integer.parseInt(st.nextToken());
		graph = new int[N][N];

		for (int m = 0; m < M; m++) {
			st = new StringTokenizer(br.readLine());
			int a = Integer.parseInt(st.nextToken()) - 1;
			int b = Integer.parseInt(st.nextToken()) - 1;
			int c = Integer.parseInt(st.nextToken());

			graph[a][b] = c;
		}

		x = dij(X - 1);
		int answer = 0;

		for (int n = 0; n < N; n++) {
			int[] result = dij(n);
			answer = Math.max(answer, x[n] + result[X - 1]);
		}
		
		System.out.println(answer);
	}

}