# simple console logger
echo 'Fibonacci Sequence!<br>';

# Fibonacci Sequence
function FibSeq($a, $b) {
  echo $a . "   " . $b . "<br>";
  $a += $b;
  if ( $a < 500 ){
      FibSeq($b, $a);
  }
}

FibSeq(0, 1);