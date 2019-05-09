// simple console logger
public class Main {
	
	// Fibonacci Sequence
	public static void fibSeq(int a, int b) {
		System.out.println(a + " .. " + b);
		a += b;
		if (a < 500) {
			fibSeq(b, a);
		}
	}

	public static void main(String[] args) {
		System.out.println("Fibonacci Sequence!");
		fibSeq(0, 1);
	}
}
