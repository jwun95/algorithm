import java.io.*;
import java.util.*;

class Ed implements Comparable<Ed> {
	int from, to, weight;

	public Ed(int from, int to, int weight) {
		this.from = from;
		this.to = to;
		this.weight = weight;
	}

	@Override
	public int compareTo(Ed o) {
		return Integer.compare(this.weight, o.weight);
	}

}

public class Main {
	static int M, N;
	static int[] parent;

	static boolean union(int a, int b) {
		int aRoot = find(a);
		int bRoot = find(b);

		if (aRoot == bRoot)
			return false;
		parent[bRoot] = aRoot;
		return true;
	}

	static int find(int a) {
		if (parent[a] == a)
			return a;
		return parent[a] = find(parent[a]);
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		while (true) {

			StringTokenizer st = new StringTokenizer(br.readLine());
			M = Integer.parseInt(st.nextToken());
			N = Integer.parseInt(st.nextToken());

			if (M == 0 && N == 0)
				break;

			parent = new int[M];

			for (int m = 0; m < M; m++) {
				parent[m] = m;
			}

			Ed[] eds = new Ed[N];

			int origin = 0;

			for (int n = 0; n < N; n++) {
				st = new StringTokenizer(br.readLine());
				int from = Integer.parseInt(st.nextToken());
				int to = Integer.parseInt(st.nextToken());
				int weight = Integer.parseInt(st.nextToken());
				origin += weight;
				eds[n] = new Ed(from, to, weight);
			}

			Arrays.sort(eds);
			int cnt = 0;
			int answer = 0;

			for (Ed ed : eds) {
				if (!union(ed.from, ed.to))
					continue;

				answer += ed.weight;
				if (++cnt == M - 1)
					break;
			}
			System.out.println(origin - answer);
		}
		br.close();
	}
}