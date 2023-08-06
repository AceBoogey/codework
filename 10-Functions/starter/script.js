'use strict';

//     ----------------------  CODING CHALLENGE #2:  --------------------------
// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';

//   document.querySelector('body').addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();

//     ----------------------  MORE CLOSURES EXAMPLES:  --------------------------
// // Example 1:
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);

// // Re-assigning f function
// h();
// f();

// console.dir(f);

// // Example 2:
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const perGroup = 1000; // would use this variable if it werent for closures.  Showing that closures have priority over the scope-chain.
// boardPassengers(180, 3);
//     ----------------------  CLOSURES:  --------------------------
// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// The BIG KEY TAKEAWAY from this is that, closures PRESERVE the scope-chain.
// because a function has access to the variable environment (VE) of the execution context in which it was created. (Its... BIRTHPLACE)

//     -----------  IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE):  ---------------
// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce();

// // function expressions:
// (function () {
//   console.log('This will never run again');
// })();

// // arrow functions:
// (() => console.log('This will ALSO never run again'))();

// /*
// What were IIFE's created for?

//       Answer:  To encapsulate  your data, i.e. variables, so that other parts of your program or outside libraries cannot mutate the data.
// */

// {
//   const isPrivate = 23;
//   var notPrivate = 46;
// }

// //console.log(isPrivate)  ;
// console.log(notPrivate);

//     -----------------------  CODING CHALLENGE #1:  -----------------------------
// const poll = {
//   question: 'WHat is your favourite programming language?',
//   options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0,0,0,0]
//   answers: new Array(4).fill(0),
// };

// //1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
// // 1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
// /*
//     What is your favorite programming language?
//     0: Javascript
//     1: Python
//     2: Rust
//     3: C++
//     (Write option number)
// */
// poll.registerNewAnswer = function () {
//   let ans = Number(
//     prompt(
//       `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//     )
//   );

//   /*
//   1.2. Based on the input number update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1.  Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
// */
//   if (
//     typeof ans === 'number' &&
//     ans < this.answers.length &&
//     this.answers[Number(ans)]++
//   ) {
//   }
//   this.displayResults('string');
//   this.displayResults();
// };
// // poll.registerNewAnswer();

// /*
// 2.  Call this method whenever the user clicks the 'Answer poll' button.
// */

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// /*
// 3.  Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log().  This should be the default option.  If type is 'string', display a string like " poll results are 13, 2, 4, 1".
// */

// poll.displayResults = function (type = 'array') {
//   if (type === 'string') {
//     console.log(`Poll results are ${this.answers.join(', ')}`);
//   } else if (type === 'array') {
//     console.log(this.answers);
//   }
// };

// /*
// 4.  Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
// */

// /*
// BONUS:  Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array'  and the 'string' option. Do NOT put the arrays in the poll object! So what should the this keyword look like in this situation?
// */

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

// poll.displayResults.call({ answers: [1, 5, 3, 9, 6] }, 'string');
//     -----------------------  THE BIND METHOD:  -----------------------------
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };
// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };
// const book = lufthansa.book;
// const swiss = { airline: 'Swiss Air Lines', iataCode: 'LX', bookings: [] };

// //Bind method:
// const bookEW = book.bind(eurowings); //returns new function with 'this' pointing to eurowings.
// bookEW(23, 'Steven Williams');
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Martha Cooper');
// bookEW23('Steve Abadilla');

// //with Event Listeners:
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };
// // lufthansa.buyPlane();

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial Application:
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(100));

// function addTaxRate(rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// }

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));

//     -----------------------  THE CALL AND APPLY METHODS:  -----------------------------
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Steve Abadilla');
// lufthansa.book(635, 'John Smith');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// // Will not work, because the 'this' keyword is pointing to nothing. i.e. the window object - undefined
// // console.log(book(23, 'Sarah Williams'));

// // Call method:
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = { airline: 'Swiss Air Lines', iataCode: 'LX', bookings: [] };

// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);

// // Apply method:
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// //same as:
// book.call(swiss, ...flightData);
//     -----------------------  FUNCTIONS RETURNING FUNCTIONS:  -----------------------------
// function greet(greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// }

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hello')('Steve');

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// greetArr('Hi')('Jonas');

//     -----------------------  FUNCTIONS ACCEPTING CALLBACK FUNCTIONS:  -----------------------------
// function oneWord(str) {
//   return str.replace(/ /g, '').toLowerCase();
// }

// function upperFirstWord(str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// }

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// // JS uses callbacks all the time
// function high5() {
//   console.log('🖐️');
// }
// document.body.addEventListener('click', high5);
// ['Steve', 'Kelsey', 'Farrah', 'David', 'Dan'].forEach(high5);
//     -----------------------  FIRST-CLASS AND HIGHER-ORDER FUNCTIONS:  -----------------------------
/*
First-Class Functions:
-Javascript treats functions as FIRST-CLASS CITIZENS
-This means that functions are SIMPLY VALUES
-Functions are just another 'type' of object

Higher-Order Functions:
-A function that receives another function as an argument, that returns a new function, or BOTH.
-This is only possible because of FIRST-CLASS FUNCTIONS

*/

//     -----------------------  HOW PASSING ARGUMENTS WORKS: VALUE VS. REFERENCE:  -----------------------------
// const flight = 'LH234';
// const steve = {
//   name: 'Steve Arceo Abadilla',
//   passport: 23429929933,
// };

// function checkIn(flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 23429929933) {
//     alert('Check In');
//   } else {
//     alert('Wrong Passport');
//   }
// }

// checkIn(flight, steve);
// console.log(flight);
// console.log(steve);

// // Is the same as doing...
// const flightNum = flight;
// const passenger = steve;

// function newPassport(person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// }

// newPassport(steve);
// checkIn(flight, steve);
// console.log(steve, flight);
//     -----------------------  DEFAULT PARAMETERS:  -----------------------------
// const bookings = [];
// // ES6: directly into the arguments ex: numPassengers = 1,
// const createBooking = function (flightNum, numPassengers = 1, price = 199) {
//   // // ES5:
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// createBooking('LH123', undefined, 1000);

// console.log(bookings);
