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
