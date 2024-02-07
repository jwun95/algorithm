import java.io.*;
import java.util.*;

public class Main {

	static int N;
	static int[] arr;
	static boolean[] visited;
	static int[] answer;
	static int R;
	static StringBuilder sb = new StringBuilder();

	static void permutation(int cnt) {
		if (cnt == R) {
			String str = "";

			for (int a : answer) {
				str += Integer.toString(a) + " ";
			}
			sb.append(str.trim()).append("\n");
			return;
		}

		for (int i = 0; i < N; i++) {
			answer[cnt] = arr[i];

			permutation(cnt + 1);

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
		System.out.println(sb.toString());
		br.close();
	}

}