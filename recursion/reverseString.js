let str = "hello";

function rev(str) {
  if (str.length <= 1) return str;

  return rev(str.slice(-1)) + str.charAt(0);
}

console.log(rev(str));




// ================================
// REVERSE STRING
// ================================

// LOOP SOLUTION
function reverseLoop(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }

  return reversed;
}

// RECURSION SOLUTION
function reverseRecursion(str) {
  if (str === "") return "";
  return reverseRecursion(str.slice(1)) + str[0];
}

// TESTING
console.log("Loop Reverse:", reverseLoop("hello"));
console.log("Recursion Reverse:", reverseRecursion("hello"));



