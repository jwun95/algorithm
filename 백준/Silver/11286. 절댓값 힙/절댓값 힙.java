import java.io.*;
import java.util.*;

public class Main {
	
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		PriorityQueue<Integer> heap = new PriorityQueue<>((o1, o2) -> Math.abs(o1) == Math.abs(o2)? o1 - o2 : Math.abs(o1) - Math.abs(o2));
		StringBuilder sb = new StringBuilder();
		
		int N = Integer.parseInt(br.readLine());
		
		for (int n = 0 ; n < N; n ++) {
			int k = Integer.parseInt(br.readLine());
			if (heap.isEmpty() && k == 0) {
				sb.append(0).append("\n");
				continue;
			} else if (k == 0) {
				sb.append(heap.poll()).append("\n");
			} else {
				heap.offer(k);
			}
		}
		
		System.out.println(sb.toString());
		
		br.close();
	}

}