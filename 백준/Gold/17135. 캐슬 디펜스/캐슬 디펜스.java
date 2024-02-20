import java.io.*;
import java.util.*;

public class Main {

	static int N, M, D, answer, count;
	static int[][] arr;
	static int[][] tArr;
	static int[] archers = new int[3];
	static List<Integer[]> enemy = new ArrayList<>();

	static void movement() { // 적군 한칸씩 이동. 적군 enemy 리스트에 추가

		for (int x = N - 1; x >= 0; x--) {
			for (int y = 0; y < M; y++) {
				if (tArr[x][y] == 1) {
					int nx = x + 1;
					if (nx >= N) {
						tArr[x][y] = 0;
					} else {
						tArr[nx][y] = 1;
						tArr[x][y] = 0;
					}
				}
			}
		}
	}

	static boolean getEnemy() {
		enemy = new ArrayList<>();
		for (int x = 0; x < N; x++) {
			for (int y = 0; y < M; y++) {
				if (tArr[x][y] == 1) {
					enemy.add(new Integer[] { x, y });
				}
			}
		}

		return enemy.isEmpty() ? false : true;
	}

	// 적 제거 메소드
	static void kill() {
		ArrayList<Integer[]> sub = new ArrayList<>();
		for (int e = 0; e < enemy.size(); e++) {
			int archer1 = Math.abs(enemy.get(e)[0] - N) + Math.abs(enemy.get(e)[1] - archers[0]);
			int archer2 = Math.abs(enemy.get(e)[0] - N) + Math.abs(enemy.get(e)[1] - archers[1]);
			int archer3 = Math.abs(enemy.get(e)[0] - N) + Math.abs(enemy.get(e)[1] - archers[2]);

			if (archer1 <= D) {
				sub.add(new Integer[] { enemy.get(e)[0], enemy.get(e)[1], 0, archer1 });
			}
			if (archer2 <= D) {
				sub.add(new Integer[] { enemy.get(e)[0], enemy.get(e)[1], 1, archer2 });
			}
			if (archer3 <= D) {
				sub.add(new Integer[] { enemy.get(e)[0], enemy.get(e)[1], 2, archer3 });
			}
		}

		Collections.sort(sub, (x, y) -> x[3] != y[3] ? x[3] - y[3] : x[2] != y[2] ? x[2] - y[2] : x[1] != y[1] ? x[1] - y[1] : y[0] - x[0]);

		boolean[] k = new boolean[3];

		for (int s = 0; s < sub.size(); s++) {
			if (!k[sub.get(s)[2]]) {
				k[sub.get(s)[2]] = true;
				if (tArr[sub.get(s)[0]][sub.get(s)[1]] == 1) {
					tArr[sub.get(s)[0]][sub.get(s)[1]] = 0;
					count++;
				}
			}
		}
	}

	// 궁수 조합 메소드
	static void comb(int cnt, int start) {
		if (cnt == 3) {
			tArr = new int[N][M];
			for (int x = 0; x < N; x++) { // 조합 별로 계산 위해 배열 복사
				for (int y = 0; y < M; y++) {
					tArr[x][y] = arr[x][y];
				}
			}

			while (true) {
				boolean flag = getEnemy();
				if (!flag) {
					answer = Math.max(answer, count);
					count = 0;
					break;
				}
				kill();
				movement();
			}
			return;
		}

		for (int m = start; m < M; m++) {
			archers[cnt] = m; // archers 배열에 궁수 위치 저장
			comb(cnt + 1, m + 1);
		}
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		StringTokenizer st = new StringTokenizer(br.readLine());

		N = Integer.parseInt(st.nextToken());
		M = Integer.parseInt(st.nextToken());
		D = Integer.parseInt(st.nextToken());

		arr = new int[N][M];

		for (int n = 0; n < N; n++) {
			st = new StringTokenizer(br.readLine());
			for (int m = 0; m < M; m++) {
				arr[n][m] = Integer.parseInt(st.nextToken());
			}
		}
		comb(0, 0);
		System.out.println(answer);
	}

}