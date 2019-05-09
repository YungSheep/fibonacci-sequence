// simple console logger
#include <stdio.h>

// Fibonacci Sequence
void fibSeq(int a, int b) {
    printf("%d   %d\n", a, b);
    a += b;
    if ( a < 500) {
        fibSeq(b, a);
    }
}

int main()
{
    printf("Hello World\n");
    fibSeq(0,1);
    return 0;
}
