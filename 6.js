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

// Getters, Setters, and Statics
let varyingSize = {
  get size() {
    return Math.floor(Math.random() * 100);
  },
};

// console.log(varyingSize.size);
// console.log(varyingSize.size);

class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }
  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}

// let temp = new Temperature(22);
// console.log(temp.fahrenheit);
// temp.fahrenheit = 86;
// console.log(temp.celsius);

// let temp = new Temperature(22);
// console.log(temp.fahrenheit);
// temp = Temperature.fromFahrenheit(86);
// console.log(temp.celsius);

// The Iterator Interface

// let okIterator = 'OK'[Symbol.iterator]();
// console.log(okIterator.next());
// console.log(okIterator.next());
// console.log(okIterator.next());

// A two-dimensional array
// let arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// console.log(arr[0]);

// Function to create a matrix
// function createMatrix(height, width, value) {
//   let main = [];
//   for (let i = 0; i < height; i++) {
//     main.push([]);
//     for (let j = 0; j < width; j++) {
//       main[i].push(value);
//     }
//   }
//   return main;
// }

// let matrix = createMatrix(4, 3, 7);
// console.log(matrix);

class Matrix {
  constructor(width, height, element = (x, y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = element(x, y);
      }
    }
  }
  get(x, y) {
    return this.content[y * this.width + x];
  }
  set(x, y, value) {
    this.content[y * this.width + x] = value;
  }
}

let matrix = new Matrix(2, 3, (x, y) => `value ${x}, ${y}`);
console.log(matrix);
