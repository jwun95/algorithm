import java.io.*;
import java.util.*;

public class Main {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		List<Integer> list = new ArrayList<>();

		int hap = 0;

		for (int i = 0; i < 9; i++) {
			list.add(Integer.parseInt(br.readLine()));
			hap += list.get(i);
		}
		
		int gap = hap - 100;
		
		label: for (int i = 0 ; i < 8; i ++) {
			for (int j = i + 1; j < 9; j ++) {
				if (list.get(i) + list.get(j) == gap) {
					list.remove(j);
					list.remove(i);
					break label;
				} 
			}
		}
		
		for (int i = 0 ; i < list.size(); i ++) {
			System.out.println(list.get(i));
		}
	}

}