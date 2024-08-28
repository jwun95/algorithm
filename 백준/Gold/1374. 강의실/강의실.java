
import java.io.*;
import java.util.*;

public class Main {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		PriorityQueue<int[]> pq = new PriorityQueue<>((x, y) -> x[0] - y[0]); // 시작시간 끝나는 시간
		PriorityQueue<Integer> classRoom = new PriorityQueue<>((x, y) -> x - y); // 끝나는 시간, 강의실 번호

		int N = Integer.parseInt(br.readLine());

		StringTokenizer st;

		for (int n = 0; n < N; n++) {
			st = new StringTokenizer(br.readLine());
			int no = Integer.parseInt(st.nextToken());
			int start = Integer.parseInt(st.nextToken());
			int end = Integer.parseInt(st.nextToken());

			pq.offer(new int[] { start, end });
		}

		while (!pq.isEmpty()) {
			int[] cur = pq.poll();
			if (classRoom.isEmpty()) {
				classRoom.offer(cur[1]);
				continue;
			}
			int sub = classRoom.peek();
			if (sub <= cur[0]) {
				classRoom.poll();
			}
			
			classRoom.offer(cur[1]);
		}
		System.out.println(classRoom.size());
	}

}
