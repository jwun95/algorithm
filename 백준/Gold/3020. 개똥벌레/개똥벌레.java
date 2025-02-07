

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {

  static int N, H;
  static int[] bottoms;
  static int[] ups;

  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringBuilder sb = new StringBuilder();

    StringTokenizer st = new StringTokenizer(br.readLine());

    N = Integer.parseInt(st.nextToken());
    H = Integer.parseInt(st.nextToken());
    int count = 0;
    int standard = Integer.MAX_VALUE;

    bottoms = new int[N / 2];
    ups = new int[N / 2];

    for (int n = 0; n < N / 2; n++) {
      bottoms[n] = Integer.parseInt(br.readLine());
      ups[n] = Integer.parseInt(br.readLine());
    }

    Arrays.sort(bottoms);
    Arrays.sort(ups);

    for (int h = 1; h <= H; h ++) {
      int bottom = bottoms.length - binarySearch(h, bottoms);
      int up = ups.length - binarySearch(H - h + 1, ups);

      if (bottom + up < standard) {
        standard = bottom + up;
        count = 1;
      } else if (bottom + up == standard) count++;
    }

    sb.append(standard).append(" ").append(count);
    System.out.println(sb.toString());

    br.close();
  }

  static int binarySearch(int num, int[] arr) {
    int low = 0;
    int high = arr.length - 1;
    int mid = 0;

    while (low <= high) {
      mid = (low + high) / 2;

      if (arr[mid] >= num) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return low;
  }
}
