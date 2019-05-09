/*
 * Fibonacci Sequence:
 * By running the command "tsc TsFib.ts" (with typescript installed) generates 
 * a TsFib.js file is created. Open the index.html to see output
 */
// Fibonacci Sequence
function fibSeq(a, b, iterations) {
  document.body.innerHTML += a + " " + b + "<br>";
  iterations -= 1;
  a += b;
  while (iterations > 0) {
    return fibSeq(b, a, iterations);
  }
  return;
}
