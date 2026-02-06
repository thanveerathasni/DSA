// ================================
// FACTORIAL PROBLEM
// ================================
// n! = n * (n-1) * (n-2) * ... * 1


// ----------------
// LOOP SOLUTION
// ----------------
function factorialLoop(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = result * i;
  }

  return result;
}


// ----------------
// RECURSION SOLUTION
// ----------------
function factorialRecursion(n) {
  // BASE CASE (stop condition)
  if (n === 1) {
    return 1;
  }

  // RECURSIVE CASE
  return n * factorialRecursion(n - 1);
}


// ----------------
// TESTING
// ----------------
console.log("Loop Factorial:", factorialLoop(5));
console.log("Recursion Factorial:", factorialRecursion(5));




































