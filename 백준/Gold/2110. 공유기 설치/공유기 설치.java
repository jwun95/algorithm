import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {

  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    StringTokenizer st = new StringTokenizer(br.readLine());

    int N = Integer.parseInt(st.nextToken());
    int C = Integer.parseInt(st.nextToken());

    int[] routers = new int[N];

    for (int n = 0; n < N; n++) {
      routers[n] = Integer.parseInt(br.readLine());
    }

    Arrays.sort(routers);

    int low = 1;
    int high = routers[N - 1] - routers[0];
    int mid = 0;
    int min = 0;

    while (low <= high) {
      mid = (high + low) / 2;
      int standard = routers[0];
      int count = 1;
      for (int n = 1; n < N; n++) {
        if (standard + mid <= routers[n]) {
          standard = routers[n];
          count++;
        }
      }

      if (count >= C) {
        low = mid + 1;
        min = mid;
      } else {
        high = mid - 1;
      }
    }
    System.out.println(min);
  }
}
