// const obj = { left: 1, right: undefined };

// const JOURNAL = require("./support/journal.js");

// console.log(Object.keys(obj));

// const birthdays = {
//   alabhya: 12121999,
//   goku: "3BCE",
//   buddha: "4BCE",
//   "darth vader": "1890",
// };

// Object.assign(birthdays, { alabhya: 12121998 });
// console.log(birthdays);

// let animal = "cat";
// console.log(animal[0]);
// animal[0] = "r";
// console.log(animal);

// const object1 = { value: 10 };
// const object2 = object1;
// const object3 = { value: 10 };

// console.log(object1 == object2);

// console.log(JOURNAL);

// for (let entry of JOURNAL) {
//   console.log(`${entry.events.length} events`);
// }

// const remove = function (array, index) {
//   return array.slice(0, index).concat(array.slice(index + 1));
// };

// console.log(remove(["a", "b", "c", "d", "e"], 2));

// const myArray = ["a", "b", "c"];
// const fooArray = myArray.concat(["d"]);

// console.log(myArray);
// console.log(fooArray);

// console.log("6".padStart(3, "0"));

// const max = function (...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     if (number > result) result = number;
//   }
//   return result;
// };

// let numbers = [5, 1, 7];
// console.log(max(8, ...numbers, 44, 2));

// console.log(Math.PI);

// let { name } = { godMode: true, name: "Alabhya Jindal" };
// console.log(name);

// The Sum of a Range
// console.log(sum([1, 2, 3]));

// const foo = function (bar) {
//   console.log(bar);
// };

// foo([1, 2, 3, 4, 5]);

// const range = function (start, end, step = 1) {
//   const result = [];
//   // if (step > 0) {
//   //   for (let i = start; i <= end; i += step) {
//   //     result.push(i);
//   //   }
//   // } else {
//   //   for (let i = start; i >= end; i += step) {
//   //     result.push(i);
//   //   }
//   // }
//   for (let i = start; step > 0 ? i <= end : i >= end; i += step) {
//     result.push(i);
//   }
//   return result;
// };

// console.log(range(5, 2, -1));

// const sum = function (numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   return result;
// };

// console.log(sum(range(1, 10)));

// Reversing an Array

// const reverseArray = function (arr) {
//   const result = [];
//   for (let item of arr) {
//     result.unshift(item);
//   }
//   return result;
// };
// // console.log(reverseArray(["A", "B", "C"]));

// const reverseArrayInPlace = function (arr) {
//   for (let i = 0; i < Math.floor(arr.length / 2); i++) {
//     const last = arr[arr.length - 1 - i];
//     arr[arr.length - 1 - i] = arr[i];
//     arr[i] = last;
//   }
//   return arr;
// };

// let arrayValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);

// A List
// let list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null,
//     },
//   },
// };

// const foo = { value: 0, rest: list };
// const bar = { value: -1, rest: list };

// console.log(foo);
// console.log(bar);

// const arrayToList = function (arr) {
//   let list = null;
//   for (let i = arr.length - 1; i >= 0; i--) {
//     list = { value: arr[i], rest: list };
//   }
//   return list;
// };

// const listToArray = function (list) {
//   let result = [];
//   const recurse = function (list) {
//     if (typeof list != "object" || list === null) {
//       return result;
//     } else {
//       result.push(list.value);
//       recurse(list.rest);
//     }
//   };
//   recurse(list);
//   return result;
// };

// The solution as shown in the hints by the author
// const listToArray = function (list) {
//   const result = [];
//   for (let node = list; node; node = node.rest) {
//     result.push(node.value);
//   }
//   return result;
// };

// const prepend = function (element, list) {
//   return { value: element, rest: list };
// };

// const nth = function (list, index) {
//   let count = 0;
//   const recurse = function (list, index) {
//     if (count === index) {
//       return list.value;
//     } else {
//       count++;
//       return recurse(list.rest, index);
//     }
//   };
//   return recurse(list, index);
// };

// As shown by the author in the hint
// const nth = function (list, index) {
//   let count = 0;
//   for (let node = list; node; node = node.rest) {
//     if (count === index) {
//       return node.value;
//     } else {
//       count++;
//     }
//   }
// };

// console.log(arrayToList([10, 20, 30]));

// console.log(
//   listToArray({
//     value: 10,
//     rest: { value: 20, rest: { value: 30, rest: null } },
//   })
// );

// console.log(prepend(10, prepend(20, null)));

// console.log(nth(arrayToList([10, 20, 30]), 1));

// Deep Comparison

// My final solution before giving up. I rewrote this 10+ times over 3 days and still was not able to make it work. Comparing the property, if the property is an object is the point where I kept on failing. I finally had to look at the solution provided by the author.
// const deepEqual = function (val1, val2) {
//   // Storing the value of Object.keys in variables to make the code less verbose
//   let keys1 = Object.keys(val1);
//   let keys2 = Object.keys(val2);
//   // Value to check if the both the objects contain identical keys
//   let count = 0;

//   // Checking if the inputs are objects
//   if (
//     typeof val1 == "object" &&
//     val1 != null &&
//     typeof val2 == "object" &&
//     val2 != null
//   ) {
//     // Checking if the objects have same number of keys
//     if (keys1.length === keys2.length) {
//       // Looping over the keys array of the first input
//       for (let i = 0; i < keys1.length; i++) {
//         // Checking if the current key of the second input is present in the keys array of the first input
//         if (keys1.includes(keys2[i])) {
//           // Adding one to the count
//           count++;
//         }
//       }
//       // If count is equal to the length of the second (or first) keys length then it means that both the objects have identical keys
//       if (count === keys2.length) {
//         // It is the code below that should check the properties of objects in a recursive manner (it should deal with values which are objects themselves)
//         const propCheck = function (val1, val2) {
//           if (
//             typeof val1 == "object" &&
//             val1 != null &&
//             typeof val2 == "object" &&
//             val2 != null
//           ) {
//             // For loop, the value of the loop counter gets preserved
//             for (let key of keys1) {
//               return propCheck(val1[key], val2[key]);
//             }
//           } else {
//             return val1 === val2;
//           }
//         };
//         return propCheck(val1, val2);
//         // If the objects don't have identical keys then we can return false, there is no need to check for their properties
//       } else {
//         return false;
//       }
//     }
//   } else {
//     return val1 === val2;
//   }
// };

// const obj1 = { here: { is: "wow" }, object: 2 };
// const obj2 = { here: { is: "an" }, object: 2 };
// console.log(deepEqual(obj1, obj2));

// The solution as provided by the author

// let obj = { here: { is: "an" }, object: 2 };
// console.log(deepEqual(obj, obj));
// // → true
// console.log(deepEqual(obj, { here: 1, object: 2 }));
// // → false
// console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// // → true

// Going over the chapter one more time, specially the Weresquirell parts to get even more comfortable with data structures
// let sequence = [1, 2, 3];
// sequence.push(4);
// sequence.push(5);
// sequence.pop();
// console.log(sequence);

// let day1 = {
//   squirell: false,
//   events: ["work", "touched tree", "pizza", "running"],
// };

// console.log(day1.squirell);
// console.log(day1.wolf);
// day1.wolf = false;
// console.log(day1.wolf);

// let descriptions = {
//   work: "went to work",
//   "touched tree": "Touched a tree",
// };

// let anObject = { left: 1, right: 2 };
// console.log(anObject.left);
// // 1
// delete anObject.left;
// console.log(anObject.left);
// // undefined
// console.log("left" in anObject);
// // false
// console.log("right" in anObject);
// // true

// console.log(Object.keys({ x: 0, y: 0, z: 2 }));

// let objectA = { a: 1, b: 2 };
// Object.assign(objectA, { b: 3, c: 4 }, { b: 55 });
// console.log(objectA);

// let journal = [
//   { events: ["work", "pizza", "running", "touched tree"], squirell: false },
// ];

// let object1 = { value: 10 };
// let object2 = object1;
// let object3 = { value: 10 };

// console.log(object1 === object2);
// // This will return true since both the variables are pointing to the same object
// console.log(object1 === object3);
// // This will return false as they are both pointing to different objects. So in JavaScript, the equal operator returns true if both the variables point to the same object, if not then it returns false

// object1.value = 15;
// console.log(object2.value);
// // 15
// console.log(object3.value);
// // 10

// const score = { visitors: 0, home: 0 };
// // score.visitors = 1;
// score = { visitors: 1, home: 0 };
// // The above statement will cause an error as we cannot reassign an object when it is declared with const. The above will work however if we were to declare the object and bind it to score using the let keyword. The contents of the objects remain mutable when using const.
// console.log(score);

// let { name } = { name: "Alabhya", age: 23 };
// console.log(name);

// let journal = [];
// function addEntry(events, squirrel) {
//   journal.push({ events, squirrel });
// }

// addEntry(["work", "touched tree", "pizza", "running", "television"], false);
// // console.log(journal);

// function phi([n00, n01, n10, n11]) {
//   return (
//     (n11 * n00 - n10 * n01) /
//     Math.sqrt((n10 + n11) * (n00 + n01) * (n01 + n11) * (n00 + n10))
//   );
// }
// // console.log(phi([76, 9, 4, 1]));

// function tableFor(event, journal) {
//   let table = [0, 0, 0, 0];
//   for (let i = 0; i < journal.length; i++) {
//     let entry = journal[i],
//       index = 0;
//     if (entry.events.includes(event)) index += 1;
//     if (entry.squirrel) index += 2;
//     table[index] += 1;
//   }
//   return table;
// }

// // console.log(tableFor("pizza", JOURNAL));

// function journalEvents(journal) {
//   let events = [];
//   for (let entry of journal) {
//     for (let event of entry.events) {
//       if (!events.includes(event)) {
//         events.push(event);
//       }
//     }
//   }
//   return events;
// }

// // console.log(journalEvents(JOURNAL));

// // for (let event of journalEvents(JOURNAL)) {
// //   let correlations = phi(tableFor(event, JOURNAL));
// //   if (correlations > 0.1 || correlations < -0.1) {
// //     console.log(event + ":", correlations);
// //   }
// // }

// for (entry of JOURNAL) {
//   if (
//     entry.events.includes("peanuts") &&
//     !entry.events.includes("brushed teeth")
//   ) {
//     entry.events.push("peanut teeth");
//   }
// }

// console.log(phi(tableFor("peanut teeth", JOURNAL)));

// Attempting Deep Equal again after looking at the solution provided by the author
const deepEqual = function (a, b) {
  // If the values compare directly then true is returned
  if (a === b) return true;
  // If the value is null or if the value is not an object then false is returned. We are checking if the value is not an object and returning false because if it's not and is equal then it would have returned true above.
  if (a == null || typeof a != "object" || b == null || typeof b != "object")
    return false;
  // Assigning the keys of both parameters for easier readability
  let keysA = Object.keys(a),
    keysB = Object.keys(b);
  // Checking if both the objects have same number of keys
  if (keysA.length != keysB.length) return false;
  // Looping over one of the key arrays
  for (let key of keysA) {
    // If the key is not present in the other key array || the recursive call to deep equal is not true, then return false
    // I was writing the below statement incorrectly and failed to debug it after multiple attempts. I was trying to do:
    // if (!keysB.includes(key) || !deepEqual(keysA[key], keysB[key])) return false;
    // While debugging I noticed that the recursive deepEqual call was passing undefined as parameters but couldn't figure out why. I had to see the author's solution again to find my mistake.
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }
  // Final return statment. If the call execution reaches to this point it means that none of the false statemens got executed, hence returning true.
  return true;
};

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
