
import java.io.*;
import java.util.*;

class Node implements Comparable<Node> {
	int y, x, cost;

	public Node(int y, int x, int cost) {
		this.y = y;
		this.x = x;
		this.cost = cost;
	}

	@Override
	public int compareTo(Node o) {
		return this.cost - o.cost;
	}

}

public class Main {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		StringTokenizer st;
		int T = 1;

		final int[] dy = { -1, 1, 0, 0 };
		final int[] dx = { 0, 0, -1, 1 };

		while (true) {
			int N = Integer.parseInt(br.readLine());
			if (N == 0)
				break;

			int[][] graph = new int[N][N];
			int[][] memo = new int[N][N];

			for (int n = 0; n < N; n++) {
				Arrays.fill(memo[n], Integer.MAX_VALUE);
			}

			for (int y = 0; y < N; y++) {
				st = new StringTokenizer(br.readLine());
				for (int x = 0; x < N; x++) {
					graph[y][x] = Integer.parseInt(st.nextToken());
				}
			}

			PriorityQueue<Node> pq = new PriorityQueue<>();
			memo[0][0] = graph[0][0];
			pq.offer(new Node(0, 0, graph[0][0]));

			while (!pq.isEmpty()) {
				Node node = pq.poll();

				if (node.y == N - 1 && node.x == N - 1) {
					sb.append("Problem ").append(T).append(": ").append(node.cost).append("\n");
					break;
				}

				for (int d = 0; d < 4; d++) {
					int ny = node.y + dy[d];
					int nx = node.x + dx[d];

					if (ny >= N || ny < 0 || nx >= N || nx < 0)
						continue;

					if (memo[ny][nx] > node.cost + graph[ny][nx]) {
						pq.offer(new Node(ny, nx, node.cost + graph[ny][nx]));
						memo[ny][nx] = node.cost + graph[ny][nx];
					}
				}
			}
			T++;
			
		}
		System.out.println(sb.toString());
		br.close();
	}

}
