
import java.io.*;
import java.util.*;

class Edge2 {
	int vertex, weight;
	Edge2 next;

	public Edge2(int vertex, int weight, Edge2 next) {
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

		int[] minEdge = new int[N];
		Arrays.fill(minEdge, Integer.MAX_VALUE);

		Edge2[] edge2 = new Edge2[N];

		for (int m = 0; m < M; m++) {
			st = new StringTokenizer(br.readLine());
			int from = Integer.parseInt(st.nextToken()) - 1;
			int to = Integer.parseInt(st.nextToken()) - 1;
			int weight = Integer.parseInt(st.nextToken());
			edge2[from] = new Edge2(to, weight, edge2[from]);
			edge2[to] = new Edge2(from, weight, edge2[to]);
		}

		PriorityQueue<int[]> pq = new PriorityQueue<>((x, y) -> x[1] - y[1]);
		boolean[] v = new boolean[N];
		
		pq.offer(new int[] {0, 0});
		minEdge[0] = 0;

		while (!pq.isEmpty()) {
			int[] cur = pq.poll();
			int minVertex = cur[0];
			int min = cur[1];

			if (v[minVertex])
				continue;
			v[minVertex] = true;

			for (Edge2 n = edge2[minVertex]; n != null; n = n.next) {
				if (!v[n.vertex] && minEdge[n.vertex] > min + n.weight) {
					minEdge[n.vertex] = min + n.weight;
					pq.offer(new int[] { n.vertex, minEdge[n.vertex] });
				}
			}
		}
		System.out.println(minEdge[N - 1]);
	}

}
