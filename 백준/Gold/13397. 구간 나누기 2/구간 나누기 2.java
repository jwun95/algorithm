

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

  static int N, M;
  static int[] arr;

  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    StringTokenizer st = new StringTokenizer(br.readLine());

    N = Integer.parseInt(st.nextToken());
    M = Integer.parseInt(st.nextToken());

    int min = Integer.MAX_VALUE;
    int max = Integer.MIN_VALUE;

    st = new StringTokenizer(br.readLine());

    arr = new int[N];

    for (int n = 0; n < N; n++) {
      arr[n] = Integer.parseInt(st.nextToken());
      min = Math.min(arr[n], min);
      max = Math.max(arr[n], max);
    }

    int low = 0;
    int high = max;
    int mid;
    int answer = 0;

    while (low <= high) {
      mid = (high + low) / 2;
      if (canDivide(mid)) {
        answer = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    System.out.println(answer);
  }

  static boolean canDivide(int mid) {
    int min = arr[0];
    int max = arr[0];
    int count = 1;

    for (int n = 1; n < N; n++) {
      min = Math.min(min, arr[n]);
      max = Math.max(max, arr[n]);

      if (max - min > mid) {
        min = arr[n];
        max = arr[n];

        count++;
      }
    }

    return count <= M;
  }
}
