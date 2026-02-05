

/*
Bubble Sort Algorithm

Idea:
- Compare two adjacent elements
- Swap them if they are in the wrong order
- Repeat this process multiple times
*/

let arr = [5, 1, 4, 2, 8];

// Outer loop → number of passes
for (let i = 0; i < arr.length; i++) {

  // Inner loop → comparing adjacent elements
  for (let j = 0; j < arr.length - 1; j++) {

    // If left element is bigger, swap
    if (arr[j] > arr[j + 1]) {

      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr); // [1, 2, 4, 5, 8]




// Why two loops?

// Outer loop → how many rounds (passes)

// Inner loop → comparison in each round