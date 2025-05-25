function add(a, b) {
  return a + b;
}

const a = parseInt(process.argv[2], 10);
const b = parseInt(process.argv[3], 10);
// This code takes two command line arguments, converts them to integers, and adds them together.
// If either argument is not a number, it prints "NaN".
// If both arguments are valid numbers, it prints the sum.

console.log(add(a, b));