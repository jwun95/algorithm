import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());

        int[] arr = new int[N];
        st = new StringTokenizer(br.readLine());

        for (int i = 0; i < N; i ++) {
            arr[i] = Integer.parseInt(st.nextToken());
        }

        Arrays.sort(arr);

        int high = arr[N - 1];
        int low = 0;
        int mid = 0;

        while (low <= high) {
            mid = low + (high - low) / 2;
            long rest = 0;
            for (int i = 0; i < N; i ++) {
                if (arr[i] - mid <= 0) continue;
                rest += arr[i] - mid;
            }
            if (rest >= M) low = mid + 1;
            else high = mid - 1;
        }

        System.out.println(high);
        br.close();
    }
}
