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

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

// repeat(3, console.log);

// let labels = [];
// repeat(5, (i) => labels.push(`Unit ${i + 1}`));

// console.log(labels);

// function greaterThan(n) {
//   return (m) => m > n;
// }

// let greaterThan5 = greaterThan(5);
// console.log(greaterThan5(6));

// function noisy(f) {
//   return (...args) => {
//     console.log("calling with", args);
//     // calling with [3, 2, 1]
//     let result = f(...args);
//     console.log("called with", args, ", returned", result);
//     // called with [3, 2, 1] , returned 1
//     return result;
//   };
// }

// noisy(Math.min)(3, 2, 1);
// The above line of code is the same as the two lines below. The above line works as follows: noisy(Math.min) returns a function which accepts n number of arguments. This function is then called with the parameters 3, 2, 1
// const temp = noisy(Math.min);
// temp(3, 2, 1);

// Using a different function on noisy
// noisy(Math.max)(3, 2, 1);
// const max = noisy(Math.max);
// max(3, 2, 1);

// function provided(test, then) {
//   if (test) then();
// }

// provided(2 === 2, () => {
//   console.log("yeaaaaaaaa");
// });

function unless(test, then) {
  if (!test) then();
}

// unless(2 === 4, () => {
//   console.log("boonk gang");
// });

// repeat(3, (n) => {
//   unless(n % 2 === 1, () => {
//     console.log(n, "is even");
//   });
// });

// ["A", "B"].forEach((l) => console.log(l));

// [1, 2, 3, 4, 5].forEach((x) => console.log(x * 2));

const SCRIPTS = require("./support/scripts.js");

// function filter(array, test) {
//   let result = [];
//   for (let element of array) {
//     if (test) result.push(element);
//   }
//   return result;
// }

// console.log(filter(SCRIPTS, (script) => script.living));

// console.log(SCRIPTS.filter((s) => s.direction == "ttb"));

function map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}

let rtlScrips = SCRIPTS.filter((s) => s.direction == "rtl");
// The below statement takes the array element and performs the function provided. In this case, it pushes the value of name of the current element to the array which will be returned.
// console.log(map(rtlScrips, (s) => s.name));

// The below statement checks if the array element has a property of name. If it does, then the element is pushed to the array being returned.
// console.log(rtlScrips.filter((s) => s.name));

// The filter method checks for a condition, if the condition is true then it adds that array element to the array being returned.
// The map method applies a function to the provided array and returns a new array.

// A simple distinction between the map and the filter method is that filter checks a condition whereas map performs a function on the array element. These are completely different things thought they might seem similar at first.

// function reduce(array, combine, start) {
//   let current = start;
//   for (let element of array) {
//     current = combine(current, element);
//   }
//   return current;
// }

// console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
// console.log([1, 2, 3, 4].reduce((a, b) => a + b));

function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}

console.log(
  SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
  })
);
