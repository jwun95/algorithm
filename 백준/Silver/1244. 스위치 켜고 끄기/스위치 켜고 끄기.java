import java.io.*;
import java.util.*;

public class Main {

	static int[] switches;
	static int N;

	static void man(int idx) {

		for (int i = idx; i <= N; i++) {
			if ((i) % idx == 0) {
				switches[i - 1] = Math.abs(switches[i - 1] - 1);
			}
		}
	}

	static void woman(int idx) {
		int f = idx, l = idx;

		while (f >= 0 && l < N) {
			if (switches[f] != switches[l]) {
				break;
			}
			f--;
			l++;
		}
		
		f++;
		l--;
		
		for (int i = f; i <= l; i++) {
			switches[i] = Math.abs(switches[i] - 1);
		}
		
		return;
	}

	public static void main(String[] args) throws Exception {
		//System.setIn(new FileInputStream("res/input.txt"));
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		N = Integer.parseInt(br.readLine());

		StringTokenizer st = new StringTokenizer(br.readLine(), " ");

		switches = new int[N];

		for (int n = 0; n < N; n++) {
			switches[n] = Integer.parseInt(st.nextToken());
		}

		int S = Integer.parseInt(br.readLine());

		for (int s = 0; s < S; s++) {
			StringTokenizer str = new StringTokenizer(br.readLine(), " ");
			int sex = Integer.parseInt(str.nextToken());
			int num = Integer.parseInt(str.nextToken());
			if (sex == 1) {
				man(num);
			} else {
				woman(num - 1);
			}
		}
		
		String str = "";
		
		for (int i = 1; i <= N; i ++) {
			str += Integer.toString(switches[i-1]);
			if (i % 20 == 0) {
				str += "\n";
			} else {
				str += " ";
			}
		}
		
		System.out.println(str.trim());

		br.close();
	}
}