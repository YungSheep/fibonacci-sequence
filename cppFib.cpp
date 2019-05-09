// simple console logger
#include <iostream>

using namespace std;

// Fibonacci Sequence
void fibSeq(int a, int b) {
    cout << a << " " << b << endl;
    a += b;
    if ( a < 500 ) {
        fibSeq(b, a);
    }
}

int main()
{
    fibSeq(0, 1);
    return 0;
}
