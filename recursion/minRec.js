function minRec(arr, index = 0) {
  if (index === arr.length - 1) return arr[index];

  let minRest = minRec(arr, index + 1);
  return arr[index] < minRest ? arr[index] : minRest;
}

console.log(minRec([5, 2, 8, 1])); // 1