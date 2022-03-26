// for (let i = 1; i <= 7; i++) {
//   let currentLine = "";
//   for (let j = 0; j < i; j++) {
//     currentLine += "#";
//   }
//   console.log(currentLine);
// }

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
