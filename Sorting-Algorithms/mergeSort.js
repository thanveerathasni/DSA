// mergeSort.js

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  // compare and merge
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // add remaining elements
  return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSort(arr) {
  // base case
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);

  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

let arr = [2, 4, 1, 5, 25, 6];
console.log(mergeSort(arr));