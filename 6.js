// let rabbit = {};
// rabbit.speak = function (line) {
//   console.log(`The rabbit says '${line}'`);
// };

// rabbit.speak(`I'm alive`);

// function speak(line) {
//   console.log(`The ${this.type} rabbit says '${line}'`);
// }

// let whiteRabbit = { type: 'white', speak };
// let hungryRabbit = { type: 'hungry', speak };

// whiteRabbit.speak(`Oh my ears and whiskers, how late it's getting!`);
// hungryRabbit.speak('I could use a carrot right now.');

// speak.call(hungryRabbit, 'Burp!');

// function normalize() {
//   console.log(this.coords.map((n) => n / this.length));
// }

// normalize.call({ coords: [0, 2, 3], length: 5 });

// let empty = {};
// console.log(empty.toString);
// console.log(empty.toString());

// console.log(Object.prototype);

// console.log(Object.getPrototypeOf({}) === Object.prototype);
// console.log(Object.getPrototypeOf(Object.prototype));

// console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
// console.log(Object.getPrototypeOf([]) == Array.prototype);

let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  },
};

// let killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = 'killer';
// killerRabbit.speak('SKREEEE!');

// Classes

// function makeRabbit(type) {
//   let rabbit = Object.create(protoRabbit);
//   rabbit.type = type;
//   return rabbit;
// }

// function Rabbit(type) {
//   this.type = type;
// }

// Rabbit.prototype.speak = function (line) {
//   console.log(`The ${this.type} rabbit says '${line}`);
// };

// let weirdRabbit = new Rabbit('weird');

// console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
// console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype);

// class Rabbit {
//   constructor(type) {
//     this.type = type;
//   }
//   speak(line) {
//     console.log(`The ${this.type} rabbit says '${line}'`);
//   }
// }

// let killerRabbit = new Rabbit('killer');
// let blackRabbit = new Rabbit('black');

// let object = new (class {
//   getWord() {
//     return 'hello';
//   }
// })();

// console.log(object.getWord());

// Overriding Derived Properties
class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let whiteRabbit = new Rabbit('white');
let blackRabbit = new Rabbit('black');
let killerRabbit = new Rabbit('killer');

// console.log(Rabbit.prototype == Object.getPrototypeOf(whiteRabbit));

Rabbit.prototype.teeth = 'small';
// console.log(killerRabbit.teeth);
// killerRabbit.teeth = 'long, sharp, and bloody';
// console.log(killerRabbit.teeth);
// console.log(blackRabbit.teeth);
// console.log(Rabbit.prototype.teeth);

// I am running the code on Chrome Dev Tools because it provides look-up on the prototype chain and instant feedback.

// Maps

// let ages = {
//   Boris: 39,
//   Liang: 22,
//   Julia: 62,
// };

// console.log(`Julia is ${ages.Julia}`);
// console.log(`Is Jack's age known? ${'Jack' in ages}`);
// console.log(`Is toString's age known? ${'toString' in ages}`);

// console.log('toString' in Object.create(null));

// let ages = new Map();
// console.log(ages);

// console.log();

// Polymorphism

// Rabbit.prototype.toString = function () {
//   return `a ${this.type} rabbit`;
// };

// console.log(String(blackRabbit));

// Symbols

const toStringSymbol = Symbol('toString');
Array.prototype[toStringSymbol] = function () {
  return `${this.length} cm of blue yarn`;
};

// console.log([1, 2].toString());
// console.log([1, 2][toStringSymbol]());

let stringObject = {
  [toStringSymbol]() {
    return 'a jute rope';
  },
};

// console.log(stringObject[toStringSymbol]());
