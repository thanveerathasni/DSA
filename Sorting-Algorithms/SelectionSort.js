// selectionSort.js

let arr = [1, 3, 5, 4, 2];

for (let i = 0; i < arr.length; i++) {

  let minIndex = i;

  // find the minimum element
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[minIndex]) {
      minIndex = j;
    }
  }

  // swap only once per pass
  let temp = arr[i];
  arr[i] = arr[minIndex];
  arr[minIndex] = temp;
}

console.log(arr); // [1,2,3,4,5]