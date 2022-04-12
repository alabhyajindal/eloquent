// let total = 0,
//   count = 1;
// while (count <= 10) {
//   total += count;
//   count++;
// }

// console.log(total);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// function repeatLog(n) {
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }
// }

// function repeat(n, action) {
//   for (let i = 0; i < n; i++) {
//     action(i);
//   }
// }

// repeat(3, console.log);

// let labels = [];
// repeat(5, (i) => labels.push(`Unit ${i + 1}`));

// console.log(labels);

// function greaterThan(n) {
//   return (m) => m > n;
// }

// let greaterThan5 = greaterThan(5);
// console.log(greaterThan5(6));

function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    // calling with [3, 2, 1]
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    // called with [3, 2, 1] , returned 1
    return result;
  };
}

// noisy(Math.min)(3, 2, 1);
// The above line of code is the same as the two lines below. The above line works as follows: noisy(Math.min) returns a function which accepts n number of arguments. This function is then called with the parameters 3, 2, 1
// const temp = noisy(Math.min);
// temp(3, 2, 1);

// Using a different function on noisy
noisy(Math.max)(3, 2, 1);
// const max = noisy(Math.max);
// max(3, 2, 1);
