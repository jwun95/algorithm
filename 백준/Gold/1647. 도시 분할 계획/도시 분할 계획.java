
import java.util.*;
import java.io.*;

class Edge implements Comparable<Edge> {
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

public class Main {

	static int N, M;
	static int[] parent;

	static int find(int a) {
		if (a == parent[a])
			return a;

		return parent[a] = find(parent[a]);
	}

	static boolean union(int a, int b) {
		int aRoot = find(a);
		int bRoot = find(b);

		if (aRoot == bRoot)
			return false;

		parent[bRoot] = aRoot;
		return true;
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		StringTokenizer st = new StringTokenizer(br.readLine());

		N = Integer.parseInt(st.nextToken());
		M = Integer.parseInt(st.nextToken());

		Edge[] edges = new Edge[M];

		for (int m = 0; m < M; m++) {
			st = new StringTokenizer(br.readLine());
			int from = Integer.parseInt(st.nextToken()) - 1;
			int to = Integer.parseInt(st.nextToken()) - 1;
			int weight = Integer.parseInt(st.nextToken());

			edges[m] = new Edge(from, to, weight);
		}

		parent = new int[N];

		Arrays.sort(edges);

		for (int n = 0; n < N; n++) {
			parent[n] = n;
		}

		int answer = 0;
		int cnt = 0;

		for (Edge edge : edges) {
			if (!union(edge.from, edge.to)) {
				continue;
			}

			if (++cnt == N - 1)
				break;

			answer += edge.weight;
		}

		
		System.out.println(answer);
	}

}
