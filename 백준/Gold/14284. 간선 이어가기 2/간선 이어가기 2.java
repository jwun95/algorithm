
import java.io.*;
import java.util.*;

class Edge3 {
	int vertex, weight;
	Edge3 next;

	public Edge3(int vertex, int weight, Edge3 next) {
		this.vertex = vertex;
		this.weight = weight;
		this.next = next;
	}
}

public class Main {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		StringTokenizer st = new StringTokenizer(br.readLine());

		int N = Integer.parseInt(st.nextToken());
		int M = Integer.parseInt(st.nextToken());

		Edge3[] edge3 = new Edge3[N];

		for (int m = 0; m < M; m++) {
			st = new StringTokenizer(br.readLine());
			int from = Integer.parseInt(st.nextToken()) - 1;
			int to = Integer.parseInt(st.nextToken()) - 1;
			int weight = Integer.parseInt(st.nextToken());

			edge3[from] = new Edge3(to, weight, edge3[from]);
			edge3[to] = new Edge3(from, weight, edge3[to]);
		}

		st = new StringTokenizer(br.readLine());
		int start = Integer.parseInt(st.nextToken()) - 1;
		int end = Integer.parseInt(st.nextToken()) - 1;

		int[] minEdge = new int[N];
		Arrays.fill(minEdge, Integer.MAX_VALUE);

		PriorityQueue<int[]> pq = new PriorityQueue<>((x, y) -> x[1] - y[1]);

		pq.offer(new int[] { start, 0 });
		boolean[] v = new boolean[N];

		while (!pq.isEmpty()) {
			int[] cur = pq.poll();
			int minVertex = cur[0];
			int min = cur[1];

			if (v[minVertex])
				continue;

			v[minVertex] = true;

			for (Edge3 n = edge3[minVertex]; n != null; n = n.next) {
				if (!v[n.vertex] && minEdge[n.vertex] > min + n.weight) {
					minEdge[n.vertex] = min + n.weight;
					pq.offer(new int[] {n.vertex, minEdge[n.vertex]});
				}
			}
		}
		System.out.println(minEdge[end]);
	}

}
