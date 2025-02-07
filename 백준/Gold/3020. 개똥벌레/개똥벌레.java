
import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

  public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    StringTokenizer st = new StringTokenizer(br.readLine());

    int N = Integer.parseInt(st.nextToken());
    int H = Integer.parseInt(st.nextToken());

    int[] bottoms = new int[H + 2];
    int[] tops = new int[H + 2];

    for (int n = 0; n < N / 2; n++) {
      bottoms[Integer.parseInt(br.readLine())] += 1;
      tops[Integer.parseInt(br.readLine())] += 1;
    }

    for (int i = H; i >= 1; i --) {
      bottoms[i] += bottoms[i + 1];
      tops[i] += tops[i + 1];
    }

    int minStandard = Integer.MAX_VALUE;
    int count = 0;

    for (int h = 1; h <= H; h ++) {
      int standard = bottoms[h] + tops[H - h + 1];

      if (standard < minStandard) {
        minStandard = standard;
        count = 1;
      } else if (standard == minStandard) count ++;
    }

    StringBuilder sb = new StringBuilder();

    sb.append(minStandard).append(" ").append(count);

    System.out.println(sb.toString());

    br.close();
  }
}
