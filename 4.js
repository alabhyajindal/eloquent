// const obj = { left: 1, right: undefined };

// const JOURNAL = require("./journal.js");

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

const arrayToList = function (arr) {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }
  return list;
};

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

const deepEqual = function (val1, val2) {
  // Storing the value of Object.keys in variables to make the code less verbose
  let keys1 = Object.keys(val1);
  let keys2 = Object.keys(val2);
  // Value to check if the both the objects contain identical keys
  let count = 0;

  // Checking if the inputs are objects
  if (
    typeof val1 == "object" &&
    val1 != null &&
    typeof val2 == "object" &&
    val2 != null
  ) {
    // Checking if the objects have same number of keys
    if (keys1.length === keys2.length) {
      // Looping over the keys array of the first input
      for (let i = 0; i < keys1.length; i++) {
        // Checking if the current key of the second input is present in the keys array of the first input
        if (keys1.includes(keys2[i])) {
          // Adding one to the count
          count++;
        }
      }
      // If count is equal to the length of the second (or first) keys length then it means that both the objects have identical keys
      if (count === keys2.length) {
        const propCheck = function(val1, val2) {
          if (
            typeof val1 == "object" &&
            val1 != null &&
            typeof val2 == "object" &&
            val2 != null
          ) {
            // Insert a for loop, the value of the loop counter gets preserved
            return propCheck(val1[keys1[  ]])
          }
        }
        // If the objects don't have identical keys then we can return false, there is no need to check for their properties
      } else {
        return false;
      }
    }
  } else {
    return val1 === val2;
  }
};

const obj1 = { here: { is: "an" }, object: 2 };
const obj2 = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj1, obj2));
