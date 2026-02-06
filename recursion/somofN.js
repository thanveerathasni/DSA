// ================================
// SUM OF N
// ================================

// LOOP SOLUTION
function sumLoop(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }

  return sum;
}

// RECURSION SOLUTION
function sumRecursion(n) {
  if (n === 0) return 0;
  return n + sumRecursion(n - 1);
}

// TESTING
console.log("Loop Sum:", sumLoop(5));
console.log("Recursion Sum:", sumRecursion(5));