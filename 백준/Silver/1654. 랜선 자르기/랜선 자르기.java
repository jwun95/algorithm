import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {
  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    StringTokenizer st = new StringTokenizer(br.readLine());

    int K = Integer.parseInt(st.nextToken());
    int N = Integer.parseInt(st.nextToken());

    long[] lines = new long[K];

    for (int k = 0; k < K; k ++) {
      lines[k] = Long.parseLong(br.readLine());
    }

    Arrays.sort(lines);

    long low = 1;
    long high = lines[K - 1];
    long mid = 0;
    int num = 0;
    int result = 0;

    while (low <= high) {
      mid = (low + high) / 2;
      num = 0;

      for (int k = 0; k < K; k ++) {
        num += (int) (lines[k] / mid);
      }

      if (num >= N) {
        result = (int) mid;
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    System.out.println(result);
    br.close();
  }
}
