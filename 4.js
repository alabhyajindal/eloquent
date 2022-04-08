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

const listToArray = function (list) {
  let result = [];
  const recurse = function (list) {
    if (typeof list != "object" || list === null) {
      return result;
    } else {
      result.push(list.value);
      recurse(list.rest);
    }
  };
  recurse(list);
  return result;
};

const prepend = function (element, list) {
  return { value: element, rest: list };
};

const nth = function (list, index) {
  let count = 0;
  const recurse = function (list, index) {
    if (count === index) {
      return list.value;
    } else {
      count++;
      return recurse(list.rest, index);
    }
  };
  return recurse(list, index);
};

// console.log(arrayToList([10, 20, 30]));

// console.log(
// listToArray({
//   value: 10,
//   rest: { value: 20, rest: { value: 30, rest: null } },
// })
// );

// console.log(prepend(10, prepend(20, null)));

// console.log(nth(arrayToList([10, 20, 30]), 1));
