// function test(label, body) {
//   if (!body) return `Failed ${label}`;
// }

// test('convert Latin text to uppercase', () => {
//   return 'hello'.toUpperCase === 'HELLO';
// });

// test('convert Greek text to uppercase', () => {
//   return 'Χαίρετε'.toUpperCase === 'ΧΑΊΡΕΤΕ';
// });

// test("don't convert case-less characters", () => {
//   return 'سلام'.toUpperCase === 'سلام';
// });

// function promptDirection(question) {
//   let result = prompt(question);
//   if (result.toLowerCase() == 'left') return 'L';
//   if (result.toLowerCase() == 'right') return 'R';
//   throw new Error(`Invalid direction: ${result}`);
// }

// function look() {
//   if (promptDirection('Which way') == 'L') {
//     return 'a house';
//   } else {
//     return 'two angry bears';
//   }
// }

// try {
//   console.log('You see', look());
// } catch (e) {
//   console.error(`Something went wrong: ${e}`);
// }

// const accounts = { a: 100, b: 0, c: 20 };

// function getAccount() {
//   let accountName = prompt('Enter an account name');
//   if (!accounts.hasOwnProperty(accountName)) {
//     throw new Error(`No such account: ${accountName}`);
//   }
//   return accountName;
// }

// function transfer(from, amount) {
//   if (accounts[from] < amount) return;
//   accounts[from] -= amount;
//   accounts[getAccount()] += amount;
// }

// function transfer(from, amount) {
//   if (accounts[from] < amount) return;
//   let progress = 0;
//   try {
//     accounts[from] -= amount;
//     progress = 1;
//     accounts[getAccount()] += amount;
//     progress = 2;
//   } finally {
//     if (progress == 1) {
//       accounts[from] += amount;
//     }
//   }
// }

// Retry

// class MultiplicatorUnitFailure extends Error {}

// function primitiveMultiply(a, b) {
//   if (Math.random() < 0.2) {
//     return a * b;
//   } else {
//     throw new MultiplicatorUnitFailure('Klunk');
//   }
// }

// function reliableMultiply(a, b) {
//   // Your code here.
//   for (;;) {
//     try {
//       return primitiveMultiply(a, b);
//     } catch (e) {
//       if (e instanceof MultiplicatorUnitFailure) {
//         console.log('Trying again');
//       } else {
//         throw e;
//       }
//     }
//   }
// }

// console.log(reliableMultiply(8, 8));

// The Locked Box

const box = {
  locked: true,
  unlock() {
    this.locked = false;
  },
  lock() {
    this.locked = true;
  },
  _content: [],
  get content() {
    if (this.locked) throw new Error('Locked!');
    return this._content;
  },
};

function withBoxUnlocked(body) {
  // Your code here.
  let isLocked = box.locked;
  try {
    if (isLocked) box.unlock();
    return body();
  } finally {
    if (isLocked) box.lock();
  }
}

withBoxUnlocked(function () {
  box.content.push('gold piece');
});

try {
  withBoxUnlocked(function () {
    throw new Error('Pirates on the horizon! Abort!');
  });
} catch (e) {
  console.log('Error raised: ' + e);
}
console.log(box.locked);
// → true
