// Binary Search - Recursive Version
// NOTE: Array MUST be sorted

function binarySearchRecursive(arr, target, left, right) {
  // Base case: element not found
  if (left > right) {
    return -1;
  }

  let mid = Math.floor((left + right) / 2);

  // If element is found
  if (arr[mid] === target) {
    return mid;
  }

  // If target is smaller, search left half
  if (target < arr[mid]) {
    return binarySearchRecursive(arr, target, left, mid - 1);
  }

  // If target is larger, search right half
  return binarySearchRecursive(arr, target, mid + 1, right);
}

// Test cases
const arr = [1, 3, 5, 7, 9, 11];

console.log(binarySearchRecursive(arr, 7, 0, arr.length - 1)); // 3
console.log(binarySearchRecursive(arr, 4, 0, arr.length - 1)); // -1