// insertionSort.js

let arr = [1, 3, 5, 4, 2];

for (let i = 1; i < arr.length; i++) {

  let key = arr[i];   // element to insert
  let j = i - 1;

  // shift elements to the right
  while (j >= 0 && arr[j] > key) {
    arr[j + 1] = arr[j];
    j--;
  }

  // insert key at correct position
  arr[j + 1] = key;
}

console.log(arr); // [1, 2, 3, 4, 5]