import java.io.*;
import java.util.*;

public class Main {

	static int N, M;
	static int[][] maps;
	static int[][] accu;

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine(), " ");

		N = Integer.parseInt(st.nextToken());
		M = Integer.parseInt(st.nextToken());

		maps = new int[N][M];
		accu = new int[N + 1][M + 1];

		for (int y = 0; y < N; y++) {
			st = new StringTokenizer(br.readLine(), " ");
			for (int x = 0; x < M; x++) {
				maps[y][x] = Integer.parseInt(st.nextToken());
			}
		}
		for (int y = 1; y < N + 1; y++) {
			for (int x = 1; x < M + 1; x++) {
				accu[y][x] = Math.max(Math.max(accu[y - 1][x], accu[y][x - 1]), accu[y - 1][x - 1])
						+ maps[y - 1][x - 1];
			}
		}
		
		System.out.println(accu[N][M]);
	}

}