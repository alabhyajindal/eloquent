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

const SCRIPTS = require('./Higer-order Functions/scripts.js');

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

let rtlScrips = SCRIPTS.filter((s) => s.direction == 'rtl');
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

// console.log(
//   SCRIPTS.reduce((a, b) => {
//     return characterCount(a) < characterCount(b) ? b : a;
//   })
// );

// let biggest = null;
// for (let script of SCRIPTS) {
//   if (biggest == null || characterCount(biggest) < characterCount(script)) {
//     biggest = script;
//   }
// }

// console.log(biggest.name);

function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

// Average origin year for living languages
// console.log(
//   Math.round(average(SCRIPTS.filter((s) => s.living).map((s) => s.year)))
// );

// console.log(Math.round(average(SCRIPTS.filter(s ))))
// console.log(SCRIPTS.filter((s) => s.living).map((s) => s.year));

// Average origin year for dead languages
// console.log(
//   Math.round(average(SCRIPTS.filter((s) => !s.living).map((s) => s.year)))
// );

let total = 0,
  count = 0;
for (let script of SCRIPTS) {
  if (script.living) {
    total += script.year;
    count++;
  }
}

// console.log(Math.round(total / count));

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}

// console.log(characterScript(121));

let horseShoe = '🐴👟';
// console.log(horseShoe);
// console.log(horseShoe.length);
// console.log(horseShoe[0]);
// console.log(horseShoe.charCodeAt(0));
// console.log(horseShoe.codePointAt(0));

let roseDragon = '🌹🐉';
// for (let char of roseDragon) {
//   console.log(char);
// }
// console.log(roseDragon.codePointAt(2));

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex((c) => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

// console.log(countBy([1, 2, 3, 4, 5], (n) => n > 2));

function textScripts(text) {
  let scripts = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : 'none';
  }).filter((s) => s.name != 'none');

  let total = scripts.reduce((n, { count }) => n + count, 0);
  if (total == 0) return 'No scripts found';

  return scripts
    .map(({ name, count }) => {
      return `${Math.round((count * 100) / total)}% ${name}`;
    })
    .join(', ');
}

// console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
// → 61% Han, 22% Latin, 17% Cyrillic

// Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];
// console.log(arrays.reduce((a, b) => a.concat(b)));

// Your Own Loop

// My solution
// const loop = function (value, test, update, body) {
//   if (update(0) < 0) {
//     for (let i = value; i > 0; i--) {
//       if (!test(i)) return;
//       body(i);
//       update(i);
//     }
//   } else {
//     for (let i = 0; i < value; i++) {
//       if (!test(i)) return;
//       body(i);
//       update(i);
//     }
//   }
// };

// Solution provided by the author
function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}
// loop(
//   3,
//   (n) => n > 0,
//   (n) => n - 1,
//   console.log
// );

// Everything

// First version using a loop
// function every(array, test) {
//   let count = 0;
//   for (let item of array) {
//     if (test(item)) {
//       count++;
//     }
//   }
//   return count === array.length;
// }

// Second version using the some method. I don't like the edge case where the empty array returns true. It would be much better if the function returns false. That's what my function does below but I have added an if condition at the start to comply with the author's expected answer to the solution. I'll be now looking at the solution provided by the author. This is getting slightly demoralizing because even if I write a working solution, the author's solution is way cleaner.
// function every(array, test) {
//   if (array.length === 0) return true;
//   return array.some((element, index) => {
//     return index === array.length - 1 && test(element);
//   });
// }

// Author's solution, first version
// function every(array, predicate) {
//   for (let item of array) {
//     if (!predicate(item)) return false;
//   }
//   return true;
// }

// Author's solution, second version
// function every(array, predicate) {
//   return !array.some((element) => !predicate(element));
// }

// console.log(every([1, 3, 5], (n) => n < 10));
// // → true
// console.log(every([2, 4, 16], (n) => n < 10));
// → false
// console.log(every([], (n) => n < 10));
// // → true

// Attempting the exercise again after looking at the Author's solution and hints.

// Loop based version
// function every(array, predicate) {
//   for (let item of array) {
//     if (!predicate(item)) return false;
//   }
//   return true;
// }

function every(array, predicate) {
  return !array.some((element) => !predicate(element));
}

// console.log(every([2, 4, 16], (n) => n < 10));
// → false

// Dominant Writing Direction

// Completed the assignment to my liking successfully on the first attempt!
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex((c) => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

// function dominantDirection(text) {
//   let scripts = countBy(text, (char) => {
//     let script = characterScript(char.codePointAt(0));
//     return script ? script.name : 'none';
//   }).filter((s) => s.name != 'none');

//   let max = scripts.reduce((previous, current) => {
//     return previous.count > current.count ? previous : current;
//   });

//   return SCRIPTS.find((script) => script.name === max.name).direction;
// }

// Solution provided by the author
function dominantDirection(text) {
  let counted = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : 'none';
  }).filter(({ name }) => name != 'none');

  if (counted.length == 0) return 'ltr';

  return counted.reduce((prev, current) => {
    return (prev.count > current.count ? prev : current).name;
  });
}

// console.log(dominantDirection('Hello!'));
// → ltr
console.log(dominantDirection('Hey, مساء الخير'));
// → rtl
