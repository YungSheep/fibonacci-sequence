// simple console logger
using System;
					
public class Program
{
	public static void fibSeq(int a, int b){
		Console.WriteLine(a + "   " + b);
		a += b;
		if ( a < 500 ) {
			fibSeq(b, a);	
		}
	}
	
	public static void Main()
	{
		fibSeq(0, 1);
	}
}