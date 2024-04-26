import java.util.*;
import java.io.*;

public class Main {

	static int N, D, C, answer, cnt;
	static boolean[] v;

	static class Node {
		int vertex, weight;
		Node next;

		public Node(int vertex, int weight, Node next) {
			this.vertex = vertex;
			this.weight = weight;
			this.next = next;
		}
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		StringBuilder sb = new StringBuilder();

		int T = Integer.parseInt(br.readLine());

		for (int tc = 1; tc <= T; tc++) {
			st = new StringTokenizer(br.readLine(), " ");

			N = Integer.parseInt(st.nextToken());
			D = Integer.parseInt(st.nextToken());
			C = Integer.parseInt(st.nextToken());
			answer = 0;
			cnt = 0;

			v = new boolean[N];
			Node[] adjList = new Node[N];
			int[] minD = new int[N];
			Arrays.fill(minD, Integer.MAX_VALUE);
			minD[C - 1] = 0;

			for (int d = 0; d < D; d++) {
				st = new StringTokenizer(br.readLine(), " ");
				int a = Integer.parseInt(st.nextToken());
				int b = Integer.parseInt(st.nextToken());
				int c = Integer.parseInt(st.nextToken());

				adjList[b - 1] = new Node(a - 1, c, adjList[b - 1]);
			}

			int min = 0, minV = 0, count = 0;
			for (int i = 0; i < N; i++) {
				min = Integer.MAX_VALUE;
				minV = -1;

				for (int j = 0; j < N; j++) {
					if (!v[j] && minD[j] < min) {
						min = minD[j];
						minV = j;
					}
				}

				if (minV == -1)
					break;
				v[minV] = true;
				count++;

				for (Node temp = adjList[minV]; temp != null; temp = temp.next) {
					if (!v[temp.vertex] && minD[temp.vertex] > temp.weight + min) {
						minD[temp.vertex] = temp.weight + min;
					}
				}
			}
			int last = 0;
			
			for (int n = 0; n < N; n ++) {
				if (minD[n] != Integer.MAX_VALUE) {
					last = Math.max(last, minD[n]);
				}
			}
			
			
			sb.append(count).append(" ").append(last).append("\n");
		}
		System.out.println(sb.toString());
	}

}