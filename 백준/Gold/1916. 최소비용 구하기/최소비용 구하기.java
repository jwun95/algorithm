
import java.io.*;
import java.util.*;

class Edge1 {
	int vertex, weight;
	Edge1 next;

	public Edge1(int vertex, int weight, Edge1 next) {
		this.vertex = vertex;
		this.weight = weight;
		this.next = next;
	}
}

public class Main {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		int N = Integer.parseInt(br.readLine());
		int M = Integer.parseInt(br.readLine());

		Edge1[] edge1 = new Edge1[N];

		for (int m = 0; m < M; m++) {
			StringTokenizer st = new StringTokenizer(br.readLine());
			int from = Integer.parseInt(st.nextToken()) - 1;
			int to = Integer.parseInt(st.nextToken()) - 1;
			int weight = Integer.parseInt(st.nextToken());

			edge1[from] = new Edge1(to, weight, edge1[from]);
		}

		StringTokenizer st = new StringTokenizer(br.readLine());
		int start = Integer.parseInt(st.nextToken()) - 1;
		int end = Integer.parseInt(st.nextToken()) - 1;
		boolean[] v = new boolean[N];
		int[] minEdge = new int[N];
		Arrays.fill(minEdge, Integer.MAX_VALUE);

		PriorityQueue<int[]> pq = new PriorityQueue<>((x, y) -> x[1] - y[1]);
		pq.offer(new int[] { start, 0 });

		while (!pq.isEmpty()) {
			int[] cur = pq.poll();
			int minVertex = cur[0];
			int weight = cur[1];

			if (v[minVertex])
				continue;

			v[minVertex] = true;

			for (Edge1 n = edge1[minVertex]; n != null; n = n.next) {
				if (!v[n.vertex] && minEdge[n.vertex] > n.weight + weight) {
					minEdge[n.vertex] = n.weight + weight;
					pq.offer(new int[] { n.vertex, n.weight + weight });
				}
			}
		}
		System.out.println(minEdge[end]);
	}
}
