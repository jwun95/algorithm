import java.io.*;
import java.util.*;

public class Main {

	static int N;
	static int[] arr;
	static boolean[] visited;
	static int[] answer;
	static int R;

	static void permutation(int cnt) {
		if (cnt == R) {
			String str = "";
			
			for (int a: answer) {
				str += Integer.toString(a) + " ";
			}
			System.out.println(str.trim());
			return;
		}

		for (int i = 0; i < N; i++) {
			if (!visited[i]) {
				answer[cnt] = arr[i];
				visited[i] = true;
				permutation(cnt + 1);
				visited[i] = false;
			}
		}
	}

	public static void main(String[] args) throws Exception {
		//System.setIn(new FileInputStream("res/input.txt"));
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		StringTokenizer st = new StringTokenizer(br.readLine(), " ");

		N = Integer.parseInt(st.nextToken());
		R = Integer.parseInt(st.nextToken());

		arr = new int[N];
		visited = new boolean[N];
		answer = new int[R];

		for (int i = 0; i < N; i++) {
			arr[i] = i + 1;
		}

		permutation(0);

		br.close();
	}

}