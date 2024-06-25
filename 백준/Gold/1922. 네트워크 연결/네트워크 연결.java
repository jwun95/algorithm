import java.io.*;
import java.util.*;

public class Main {

	static int N, M;
	static int[] parents;

	static class Edge implements Comparable<Edge> {
		int from, to, weight;

		public Edge(int from, int to, int weight) {
			this.from = from;
			this.to = to;
			this.weight = weight;
		}

		@Override
		public int compareTo(Edge o) {
			return Integer.compare(this.weight, o.weight);
		}
	}

	static void make() {
		parents = new int[N + 1];

		for (int n = 0; n < N; n++) {
			parents[n] = n;
		}

	}

	static int find(int a) {
		if (a == parents[a])
			return a;
		return parents[a] = find(parents[a]);
	}

	static boolean union(int a, int b) {
		int aRoot = find(a);
		int bRoot = find(b);
		if (aRoot == bRoot)
			return false;

		parents[bRoot] = aRoot;
		return true;
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		N = Integer.parseInt(br.readLine());
		M = Integer.parseInt(br.readLine());

		StringTokenizer st;

		Edge[] edges = new Edge[M];

		for (int m = 0; m < M; m++) {
			st = new StringTokenizer(br.readLine());

			int from = Integer.parseInt(st.nextToken());
			int to = Integer.parseInt(st.nextToken());
			int weight = Integer.parseInt(st.nextToken());

			edges[m] = new Edge(from, to, weight);
		}

		Arrays.sort(edges);
		make();

		int weight = 0;
		int cnt = 0;

		for (Edge edge : edges) {
			if (!union(edge.from, edge.to))
				continue;

			weight += edge.weight;
			if (++cnt == N - 1)
				break;
		}

		System.out.println(weight);
	}

}
