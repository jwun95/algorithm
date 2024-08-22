
import java.io.*;
import java.util.*;

class Node2 {

	int vertex, weight;
	Node2 next;

	public Node2(int vertex, Node2 next, int weight) {
		this.vertex = vertex;
		this.next = next;
		this.weight = weight;
	}
}

public class Main {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();

		StringTokenizer st = new StringTokenizer(br.readLine());

		int V = Integer.parseInt(st.nextToken());
		int E = Integer.parseInt(st.nextToken());
		int K = Integer.parseInt(br.readLine()) - 1;

		int[] minEdge = new int[V];
		boolean[] v = new boolean[V];
		Arrays.fill(minEdge, Integer.MAX_VALUE);
		minEdge[K] = 0;
		Node2[] node2 = new Node2[V];

		for (int e = 0; e < E; e++) {
			st = new StringTokenizer(br.readLine());
			int from = Integer.parseInt(st.nextToken()) - 1;
			int to = Integer.parseInt(st.nextToken()) - 1;
			int weight = Integer.parseInt(st.nextToken());

			node2[from] = new Node2(to, node2[from], weight);
		}

		PriorityQueue<int[]> pq = new PriorityQueue<>((x, y) -> x[1] - y[1]);
		pq.offer(new int[] { K, 0 });

		while (!pq.isEmpty()) {
			int[] cur = pq.poll();
			int minVertex = cur[0];
			int min = cur[1];

			if (v[minVertex])
				continue;

			v[minVertex] = true;

			for (Node2 n = node2[minVertex]; n != null; n = n.next) {
				if (!v[n.vertex] && minEdge[n.vertex] > n.weight + min) {
					minEdge[n.vertex] =  n.weight + min;
					pq.offer(new int[] { n.vertex, minEdge[n.vertex] });
				}
			}
		}

		for (int a: minEdge) {
			sb.append(a == Integer.MAX_VALUE ? "INF" : a).append("\n");
		}
		
		System.out.println(sb.toString());
	}
}
