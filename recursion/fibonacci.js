// LOOP SOLUTION
function fibLoop(n) {
  if (n <= 1) return n;

  let a = 0, b = 1;

  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }

  return b;
}

console.log("Loop Fib:", fibLoop(7)); 










// RECURSION SOLUTION
function fibRecursion(n) {
  // base cases
  if (n <= 1) return n;

  // recursive case
  return fibRecursion(n - 1) + fibRecursion(n - 2);
}

console.log("Recursion Fib:", fibRecursion(7)); 