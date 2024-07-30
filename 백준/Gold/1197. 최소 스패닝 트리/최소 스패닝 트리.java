
import java.io.*;
import java.util.*;

class Node {
	int vertex, weight;
	Node next;

	public Node(int vertex, int weight, Node next) {
		this.vertex = vertex;
		this.weight = weight;
		this.next = next;
	}
}

public class Main {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		StringTokenizer st = new StringTokenizer(br.readLine());

		int V = Integer.parseInt(st.nextToken());
		int E = Integer.parseInt(st.nextToken());

		Node[] graph = new Node[V];

		for (int e = 0; e < E; e++) {
			st = new StringTokenizer(br.readLine());
			int from = Integer.parseInt(st.nextToken()) - 1;
			int to = Integer.parseInt(st.nextToken()) - 1;
			int weight = Integer.parseInt(st.nextToken());

			graph[from] = new Node(to, weight, graph[from]);
			graph[to] = new Node(from, weight, graph[to]);
		}

		boolean[] v = new boolean[V];

		int[] minEdge = new int[V];
		Arrays.fill(minEdge, Integer.MAX_VALUE);
		minEdge[0] = 0;
		int answer = (int) 0;

		for (int i = 0; i < V; i++) {
			int min = Integer.MAX_VALUE;
			int minVertex = -1;

			for (int k = 0; k < V; k++) {
				if (!v[k] && minEdge[k] < min) {
					min = minEdge[k];
					minVertex = k;
				}
			}

			if (minVertex == -1)
				break;

			answer += min;
			v[minVertex] = true;

			for (Node temp = graph[minVertex]; temp != null; temp = temp.next) {
				if (!v[temp.vertex] && minEdge[temp.vertex] > temp.weight) {
					minEdge[temp.vertex] = temp.weight;
				}
			}
		}

		System.out.println(answer);
	}
}
