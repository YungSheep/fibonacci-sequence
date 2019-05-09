# simple console logger, Python's elegance is beautiful

# Fibonacci Sequence
def fibSeq(a, b):
    print(a, b)
    a += b
    if a < 500:
        fibSeq(b, a)

fibSeq(0,1)

