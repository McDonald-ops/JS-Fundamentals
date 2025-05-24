const arg = process.argv[2];
const number = parseInt(arg, 10);
// This code takes a command line argument, converts it to an integer, and checks if it is a valid number.

if (!isNaN(number)) {
  console.log(`my number: ${number}`);
} else {
  console.log("Not a number");
}