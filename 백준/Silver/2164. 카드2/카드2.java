import java.io.*;
import java.util.*;

public class Main {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int N = Integer.parseInt(br.readLine());
		
		ArrayDeque<Integer> queue = new ArrayDeque<>();
		for (int i = 1; i <= N; i ++) {
			queue.offer(i);
		}
		
		
		while (queue.size() > 1) {
			queue.poll();
			int temp = queue.poll();
			queue.offer(temp);
		}
		
		System.out.println(queue.poll());
	}

}