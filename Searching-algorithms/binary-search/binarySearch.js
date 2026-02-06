// Binary Search Implementation (Iterative)
// NOTE: Array MUST be sorted

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // element found
    }

    if (target < arr[mid]) {
      right = mid - 1; // search left half
    } else {
      left = mid + 1; // search right half
    }
  }

  return -1; // element not found
}

// Test cases
console.log(binarySearch([1, 3, 5, 7, 9, 11], 7));  // 3
console.log(binarySearch([1, 3, 5, 7, 9, 11], 4));  // -1