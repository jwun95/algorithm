
import java.io.*;
import java.util.*;

public class Main {

	static int[] sub;
	static int N, K;
	static boolean[] v;
	static int[] numbers;
	static HashSet<Integer> hs = new HashSet<>();

	static void permutation(int idx) {
		if (idx == K) {
			String str = "";

			for (int k = 0; k < K; k++) {
				str += sub[k];
			}
			hs.add(Integer.parseInt(str));

			return;
		}

		for (int i = 0; i < N; i++) {
			if (v[i])
				continue;

			sub[idx] = numbers[i];
			v[i] = true;
			permutation(idx + 1);
			v[i] = false;
		}
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		N = Integer.parseInt(br.readLine());
		K = Integer.parseInt(br.readLine());

		sub = new int[K];
		v = new boolean[N];
		numbers = new int[N];

		for (int n = 0; n < N; n++) {
			numbers[n] = Integer.parseInt(br.readLine());
		}

		permutation(0);
		
		System.out.println(hs.size());
	}

}
