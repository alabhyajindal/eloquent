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

// A Vector Type

// class Vec {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   plus(other) {
//     return new Vec(this.x + other.x, this.y + other.y);
//   }
//   minus(other) {
//     return new Vec(this.x - other.x, this.y - other.y);
//   }
//   get length() {
//     return Math.sqrt(this.x * this.x + this.y * this.y);
//   }
// }

// console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// console.log(new Vec(3, 4).length);

// let foo = new Vec(1, 2);
// console.log(foo);
// let addedVal = foo.plus(new Vec(2, 3));
// console.log(foo);
// console.log(addedVal);

// let okIterator = 'OK'[Symbol.iterator]();
// console.log(okIterator.next());
// console.log(okIterator.next());
// console.log(okIterator.next());

// let matrix = new Matrix(2, 3, (a, b) => `${a}, ${b}`);
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

class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }

  next() {
    if (this.y == this.matrix.height) return { done: true };

    let value = {
      x: this.x,
      y: this.y,
      value: this.matrix.get(this.x, this.y),
    };

    this.x++;
    if (this.x == this.matrix.width) {
      this.x = 0;
      this.y++;
    }
    return { value, done: false };
  }
}

Matrix.prototype[Symbol.iterator] = function () {
  return new MatrixIterator(this);
};

// let matrix = new Matrix(2, 2, (x, y) => `value ${x}, ${y}`);
// for (let { x, y, value } of matrix) {
//   console.log(x, y, value);
// }

class SymmetricMatrix extends Matrix {
  constructor(size, element = (x, y) => undefined) {
    super(size, size, (x, y) => {
      if (x < y) return element(y, x);
      else return element(x, y);
    });
  }
  set(x, y, value) {
    super.set(x, y, value);
    if (x != y) {
      super.set(y, x, value);
    }
  }
}

let matrix = new SymmetricMatrix(5, (x, y) => `${x}, ${y}`);
// console.log(matrix.get(2, 3));

// console.log(new SymmetricMatrix(2) instanceof SymmetricMatrix);
// console.log(new SymmetricMatrix(2) instanceof Matrix);
// console.log(new Matrix(2, 2) instanceof SymmetricMatrix);
// console.log([1] instanceof Array);

// Groups

class Group {
  constructor(group = []) {
    this.group = group;
  }

  has(value) {
    if (this.group.includes(value)) return true;
    return false;
  }

  add(value) {
    if (!this.has(value)) {
      this.group.push(value);
    }
  }

  delete(value) {
    if (this.has(value)) {
      let newGroup = this.group.filter((item) => item != value);
      this.group = newGroup;
    }
  }

  static from(values) {
    if (Symbol.iterator in values) {
      for (let item of values) {
        this.prototype.add(item);
      }
    }
  }
}

// Getting undefined on the has method because has refrences the the group variable created in the constructor function. But since we are using a static method to instantiate, the constructor has not been used.

let group = Group.from([10, 20]);
console.log(group);
// console.log(group.has(10));
// → true

// const group = new Group();
// group.add(2);
// group.add(3);
// group.add(2);
// group.add(77);
// console.log(group);
// group.delete(77);
// console.log(group);
