import java.io.*;
import java.util.*;

public class Main {

	static class Line implements Comparable<Line> {
		int left, right;

		Line(int left, int right) {
			this.left = Math.min(left, right);
			this.right = Math.max(left, right);
		}

		@Override
		public int compareTo(Line o) {
			return Integer.compare(right, o.right);
		}

	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		int N = Integer.parseInt(br.readLine());
		StringTokenizer st;

		Line[] lines = new Line[N];

		for (int n = 0; n < N; n++) {
			st = new StringTokenizer(br.readLine());
			int left = Integer.parseInt(st.nextToken());
			int right = Integer.parseInt(st.nextToken());
			lines[n] = new Line(left, right);
		}

		int d = Integer.parseInt(br.readLine());

		Arrays.sort(lines);

		PriorityQueue<Integer> pq = new PriorityQueue<>();
		
		int max = 0;
		
		for (int n = 0; n < N; n ++) {
			pq.offer(lines[n].left);
			
			while (!pq.isEmpty() && pq.peek() < lines[n].right - d) pq.poll();
			
			max = Math.max(max, pq.size());
		}
		
		System.out.println(max);
	}

}