import java.io.*;
import java.util.*;

public class Main {

	static class Meeting implements Comparable<Meeting> {

		int start, end;

		Meeting(int start, int end) {
			this.start = start;
			this.end = end;
		}

		@Override
		public int compareTo(Meeting o) {
			return this.end == o.end ? this.start - o.start : this.end - o.end;
		}
		
		@Override
		public String toString() {
			return start + ":" + end;
		}

	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int N = Integer.parseInt(br.readLine());
		
		Meeting[] arr = new Meeting[N];
		StringTokenizer st;
		List<Meeting> answer = new ArrayList<>();
		
		for (int n = 0 ; n < N; n ++) {
			st = new StringTokenizer(br.readLine(), " ");
			arr[n] = new Meeting(Integer.parseInt(st.nextToken()), Integer.parseInt(st.nextToken()));
		}
		
		Arrays.sort(arr);
		answer.add(arr[0]);
		
		for (int i = 1; i < N; i ++) {
			if (answer.get(answer.size() - 1).end <= arr[i].start) answer.add(arr[i]);
		}
		
		System.out.println(answer.size());
	}

}