import java.io.*;
import java.util.*;

public class Main {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		int N = Integer.parseInt(br.readLine());
		HashMap<String, String> hm = new HashMap<>();

		StringTokenizer st;

		for (int n = 0; n < N; n++) {
			st = new StringTokenizer(br.readLine());
			String name = st.nextToken();
			String state = st.nextToken();
			hm.put(name, state);
		}
		
		ArrayList<String> arr = new ArrayList<>();
		
		for (String name: hm.keySet()) {
			if (hm.get(name).equals("enter")) {
				arr.add(name);
			}
		}
		
		Collections.sort(arr, Collections.reverseOrder());
		
		StringBuilder sb = new StringBuilder();
		
		for (String a : arr) {
			sb.append(a).append("\n");
		}
		
		System.out.println(sb.toString());
	}

}
