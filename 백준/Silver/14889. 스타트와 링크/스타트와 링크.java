import java.io.*;
import java.util.*;

public class Main {
	static int[][] arr;
	static int R, N;
	static List<Integer> list;
	static int[] b;
	static int sum = 0;
	static int[] b2 = new int[2];
	
	static void comb2(int cnt, int idx) {
		if (cnt == 2) {
			sum += (arr[b2[0]][b2[1]] + arr[b2[1]][b2[0]]);
			
			return;
		}
		for (int i = idx; i < b.length; i++) {
			b2[cnt] = b[i] - 1;
			comb2(cnt + 1, i + 1);
		}
	}
	

	static void comb(int cnt, int idx) {
		if (cnt == R) {
			
			sum = 0;
			comb2(0, 0);
			list.add(sum);
			
			return;
		}

		for (int i = idx; i < N; i++) {
			b[cnt] = i + 1;
			comb(cnt + 1, i + 1);
		}
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		//int T = Integer.parseInt(br.readLine());

		for (int tc = 1; tc <= 1; tc++) {
			int answer = Integer.MAX_VALUE;
			N = Integer.parseInt(br.readLine());
			arr = new int[N][N];
			R = N / 2;
			b = new int[N / 2];
			list = new ArrayList<>();

			for (int x = 0; x < N; x++) {

				StringTokenizer st = new StringTokenizer(br.readLine(), " ");

				for (int y = 0; y < N; y++) {
					arr[x][y] = Integer.parseInt(st.nextToken());
				}
			}
			comb(0,0);
			for (int i = 0 ; i < list.size(); i ++) {
				int gap = Math.abs(list.get(i) - list.get(list.size() - i - 1));
				answer = Math.min(answer, gap);
			}
			System.out.println(answer);
		}
	}

}