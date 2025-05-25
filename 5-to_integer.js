const arg = process.argv[2];
// This code takes a command line argument, converts it to an integer, and checks if it is a valid number.

if (!isNaN(parseInt(arg))) {
  console.log("my number:" + parseInt(arg));
} else {
  console.log("Not a number");
}