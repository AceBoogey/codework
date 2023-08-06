'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Steve Abadilla',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Displaying account movements onto the application
function displayMovements(movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type
      movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

function calcDisplaySummary(acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;
  const withdrawals = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(withdrawals)}€`;
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
}
// calcDisplaySummary(account1.movements);

function calcDisplayBalance(acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
}

function createUsernames(accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
}

createUsernames(accounts);

function updateUI(acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
}
// EVENT HANDLERS:
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // To prevent a form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginUsername.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);

  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
  inputClosePin.blur();
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/*
                                  NOTES:
*/
// -------------------  CODING CHALLENGE #4: ---------------------
// /*
// Julia and Kate are still studying dogs and this time they are styudying if dogs are eating too much or too little.
// Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).
// */
// // TEST DATA:

// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// /*
// 1. Loop over the array containing objects, and for each dog, claculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array.
// Formula: recommendedFood = weight ** .75 * 28. (The result is in grams of food, and the weight needs to be in kg)
// */
// dogs.forEach(dog => {
//   dog.recFood = Math.floor(dog.weight ** 0.75 * 28);
// });
// /*
// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, so this is is a bit tricky (on purpose)
// */
// const sarahDog = dogs.find(i => i.owners.includes('Sarah'));
// console.log(
//   `${sarahDog.owners[0]}'s dog is eating too ${
//     sarahDog.curFood > sarahDog.recFood ? 'much' : 'little'
//   }`
// );

// /*
// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch) and an array with all owners of dogs who eat too little ('ownersEatTooLittle).
// */
// const ownersEatTooMuch = dogs
//   .filter(dog => dog.curFood > dog.recFood)
//   .flatMap(dog => dog.owners);
// console.log(ownersEatTooMuch);

// const ownersEatTooLittle = dogs
//   .filter(dog => dog.curFood < dog.recFood)
//   .flatMap(dog => dog.owners);
// console.log(ownersEatTooLittle);

// /*
// 4. Log a string to the console for each array created in 3., like this: 'Matilda and Alice and Bob's dogs eat too much!' and 'Sarah and John and Michael's dogs eat too little!'
// */
// console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little`);

// console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`);
// /*
// 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
// */
// console.log(dogs.some(dog => dog.recFood === dog.curFood));
// /*
// 6. Log to the console. whether there is any dog eating an OKAY amount of food (just true or false)
// */
// console.log(
//   dogs.some(
//     dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
//   )
// );
// /*
// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition in 6)
// */
// const dogsOkay = dogs.filter(
//   dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
// );
// console.log(dogsOkay);
// /*
// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions inside the array's object)
// */

// const sortedShallow = dogs.slice().sort((a, b) => a.recFood - b.recFood);

// console.log(sortedShallow);
// -------------------  ARRAY METHODS PRACTICE: ---------------------
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, cur) => sum + cur, 0);

// console.log(bankDepositSum);

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

// console.log(numDeposits1000);

// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );

// console.log(deposits, withdrawals);

// function convertTitleCase(title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);
//   const expectations = [
//     'a',
//     'an',
//     'and',
//     'the',
//     'but',
//     'or',
//     'on',
//     'in',
//     'with',
//   ];
//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word =>
//       expectations.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join(' ');
//   return capitalize(titleCase);
// }
// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));
// -------------------  MORE WAYS OF CREATING AND FILLING ARRAYS: ---------------------
// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// // this will return an array with 7 blank spaces.  Be aware of this as it could put weird bugs into your code
// const x = new Array(7);
// console.log(x);

// // FILL METHOD: *MUTATES*
// x.fill(1, 3, 5); // what it gets filled with, what index to start at, what index to end at
// console.log(x);

// arr.fill(23, 2, 6);
// console.log(arr);

// //Array.from
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// const diceRoll = Array.from({ length: 100 }, (_, i) => i + 1);
// console.log(diceRoll);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => el.textContent.replace('€', '')
//   );
//   console.log(movementsUI);
// });
// -------------------  SORTING ARRAYS: ---------------------
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // Strings:
// const owners = ['Steve', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners);

// // Numbers:
// console.log(movements);

// //return < 0 (A, B) => they keep the order
// //return > 0 (B, A) => they switch their places
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
// console.log(movements);

// // Simplified:
// movements.sort((a, b) => a - b);
// -------------------  FLAT AND FLATMAP: ---------------------
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];

// // flat
// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, cur) => acc + cur, 0);

// console.log(overallBalance);

// // flatMap
// const overallBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, cur) => acc + cur, 0);

// console.log(overallBalance2);

// -------------------  SOME AND EVERY: ---------------------
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // -----SOME-----
// // Checks for equality:
// console.log(movements.includes(-130));

// // Checks per condition:
// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);

// // -----EVERY-----
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// -------------------  THE FIND METHOD: ---------------------
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const firstWithdrawal = movements.find(mov => mov < 0);

// console.log(firstWithdrawal);

// console.log(accounts.find(acc => acc.owner));

// const account = accounts.find(acc => (acc.owner = 'Jessica Davis'));

// console.log(account);

// -------------------  CODING CHALLENGE #3: ---------------------
// The same solution as in coding challenge #2 since I orginally did it this way.
// -------------------  THE MAGIC OF CHAINING METHODS: ---------------------
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsD = 1.1;
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsD)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

// -------------------  CODING CHALLENGE #2: ---------------------
// /*
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages('ages') and does the following things in order:
// */

// /*
// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge.  If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
// */

// function calcAverageHumanAge(arr) {
//   let humanAge = arr
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age > 18)
//     .reduce((acc, cur, _, arr) => acc + cur / arr.length, 0);
//   /*
//   2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
//   */
//   /*
//   3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calulate averages)
//   */
//   return humanAge;
// }

// /*
// 4. Run the function for both test datasets
// */
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
// -------------------  THE REDUCE METHOD: ---------------------
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const balance = movements.reduce((acc, cur, i, arr) => (acc += cur), 0);
// console.log(balance);

// // Maximum Value:
// const max = movements.reduce((acc, cur) => (cur > acc ? cur : acc));
// console.log(max);
// -------------------  THE FILTER METHOD: ---------------------
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const withdrawals = movements.filter(mov => mov < 0);
// const deposits = movements.filter(mov => mov > 0);

// console.log(movements, deposits, withdrawals);
// -------------------  THE MAP METHOD: ---------------------
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;

// const movementsUsd = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUsd);

// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

// const movementsDescriptions = movements.map((mov, i, arr) => {
//   return `Movement ${i + 1}: You ${
//     mov > 0 ? `deposited ${mov}` : `withdrew ${Math.abs(mov)}`
//   }`;
// });

// console.log(movementsDescriptions);
// -------------------  DATA TRANSFORMATIONS: MAP, FILTER, REDUCE ---------------------
//The Map method 'maps' out each element from the array to a new array, its similar to using the foreach method but the big difference is that map builds you a new array with the results of the given function.

//The Filter method 'filters' out each element that does not pass the criteria specified, and keeps the remaining elements in a new array

//The Reduce method 'reduces' all array elemnts down to one single value (e.g add all elements together).  acc + current element

// -------------------  CODING CHALLENGE #1: ---------------------
// const julia = [3, 5, 2, 12, 7];
// const kate = [4, 1, 15, 8, 3];
// const julia2 = [9, 16, 6, 8, 3];
// const kate2 = [10, 5, 6, 1, 4];

// /*
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
// */
// function checkDogs(dogsJulia, dogsKate) {
//   const juliaCorrect = dogsJulia.slice();
//   juliaCorrect.splice(0, 1);
//   juliaCorrect.splice(-2);
//   const allDogs = [...juliaCorrect, ...dogsKate];
//   allDogs.forEach(function (dog, index, arr) {
//     console.log(
//       `Dog number ${index + 1} is ${
//         dog >= 3 ? `an adult, and is ${dog} years old` : 'still a puppy 🐶'
//       }`
//     );
//   });
// }

// checkDogs(julia, kate);
// checkDogs(julia2, kate2);

/*
1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs!  So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
*/

// -------------------  FOREACH WITH MAPS AND SETS: ---------------------
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });
// -------------------  LOOPING ARRAYS: FOR EACH ---------------------
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(`------ USING FOR OF LOOP ------`);

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}:You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log(`------ USING THE FOR EACH METHOD ------`);
// movements.forEach(function (movement, i, array) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// });

// -------------------  THE NEW 'AT' METHOD: ---------------------
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// // how we wouldve originally chose the last element of an array without knowing the length of the array
// console.log(arr[arr.length - 1]); // solution 1

// console.log(arr.slice(-1)[0]); // solution 2

// console.log(arr.at(-1)); // with the new AT method

// console.log('steve'.at(0));
// console.log('steve'.at(-1));

// -------------------  SIMPLE ARRAY METHODS: ---------------------
// let arr = ['a', 'b', 'c', 'd', 'e'];

// // SLICE:
// console.log(`----SLICE----`);
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// // SPLICE: *MUTATES THE ORIGINAL ARRAY*
// // console.log(arr.splice(2));
// console.log(`----SPLICE----`);
// arr.splice(-1);
// arr.splice(1, 1);
// console.log(arr);

// // REVERSE: *MUTATES THE ORIGINAL ARRAY*
// console.log(`----REVERSE----`);
// arr = ['a', 'b', 'c', 'd', 'e'];
// let arr2 = ['f', 'g', 'h', 'i', 'j'];

// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT:
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN
// console.log(letters.join(' - '));
