// const obj = { left: 1, right: undefined };

const JOURNAL = require("./journal.js");

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

const myArray = ["a", "b", "c"];
const fooArray = myArray.concat(["d"]);

console.log(myArray);
console.log(fooArray);
