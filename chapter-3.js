// Examples

// const hummus = function (factor) {
//   const ingredient = function (amount, unit, name) {
//     let ingredientAmount = amount * factor;
//     if (ingredientAmount > 1) {
//       unit += "s";
//     }
//     console.log(`${ingredientAmount} ${unit} ${name}`);
//   };
//   ingredient(1, "can", "chickpeas");
//   ingredient(0.25, "cup", "tahini");
//   ingredient(0.25, "cup", "lemon juice");
//   ingredient(1, "clove", "garlic");
//   ingredient(2, "tablespoon", "olive oil");
//   ingredient(0.5, "teaspoon", "cumin");
// };

// hummus(2);

// const power = function (base, exponent = 2) {
//   let result = 1;
//   for (let i = 0; i < exponent; i++) {
//     result *= base;
//   }

//   console.log(result);
// };

// power(4, 3);

// function multiplier(factor) {
//   return (number) => number * factor;
// }

// let twice = multiplier(2);
// let thrice = multiplier(3);

// console.log(twice(5));
// console.log(thrice(5));

// function printFarmInventory(cows, chickens, pigs) {
//   zeroes(cows, "Cows");
//   zeroes(chickens, "Chickens");
//   zeroes(pigs, "Pigs");
// }

// function zeroes(animalCount, animal) {
//   let animalString = String(animalCount);
//   while (animalString.length < 3) {
//     animalString = "0" + animalString;
//   }
//   console.log(`${animalString} ${animal}`);
// }

// printFarmInventory(7, 11, 3);

// Minimum
// const min = function (a, b) {
//   return a < b ? a : b;
// };

// console.log(min(0, 10));
// console.log(min(0, -10));

// Recursion
// const isEven = function (n) {
//   if (Math.abs(n) === 0) {
//     return true;
//   } else if (Math.abs(n) === 1) {
//     return false;
//   } else {
//     return isEven(Math.abs(n) - 2);
//   }
// };

// console.log(isEven(-1));

// Bean Counting
// const countBs = function (str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     str[i] === "B" && count++;
//   }
//   return count;
// };

const countChar = function (str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    str[i] === char && count++;
  }
  return count;
};

// console.log(countBs("BBC"));
// console.log(countChar("kakkerlak", "k"));

const countBs = function (str) {
  return countChar(str, "B");
};

console.log(countBs("BBC"));
