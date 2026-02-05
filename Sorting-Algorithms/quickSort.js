// quickSort.js

function quickSort(arr) {
  // base case
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[arr.length - 1]; // choose pivot
  let left = [];
  let right = [];

  // partition
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // recursion
  return [...quickSort(left), pivot, ...quickSort(right)];
}

let arr = [2, 4, 1, 5, 25, 6];
console.log(quickSort(arr));