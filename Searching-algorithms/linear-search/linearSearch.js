// Linear Search Implementation

function linearSearch(arr, target) {
  // Step 1: loop through the array
  for (let i = 0; i < arr.length; i++) {

    // Step 2: compare each element with target
    if (arr[i] === target) {
      // Step 3: return index if found
      return i;
    }
  }

  // Step 4: return -1 if not found
  return -1;
}

// Testing the function
const numbers = [10, 5, 8, 3, 9];
const result = linearSearch(numbers, 8);

console.log(result); // Expected output: 2








// Now Understand Each Step (IMPORTANT)
// 🔹 What is happening here?

// We start from index 0

// Check one element at a time

// Stop immediately when found

// If nothing matches → return -1

// 🔹 Why return -1?

// In programming, -1 usually means “not found”

// This is a standard convention (interviewers expect this)