function multiplyLoop(a, b) {
  let result = 0;

  for (let i = 0; i < b; i++) {
    result += a;
  }

  return result;
}

console.log(multiplyLoop(3, 4)); // 12