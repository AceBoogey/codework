'use strict';

/*
Parsing, takes all variables and such and inserts them in a  AST (Tree)
tree is not related to the DOM, just a structure to store our info

execution of the code happens within the CALL STACK

VARIABLES (var) ARE FUNCTION SCOPED!!!!


*/

// function calcAge(birthYear) {
//   const age = 2023 - birthYear;

//   function printAge() {
//     const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);
//   }

//   if (birthYear >= 1981 && birthYear <= 1996) {
//     var millenial = true;
//     const str = `Oh, and you're a millenial, ${firstName}`;
//     console.log(str);

//     function add(a, b) {
//       return a + b;
//     }
//     console.log(add(2, 3));
//   }
//   console.log(millenial);

//   printAge();
//   return age;
// }

// const firstName = 'Steve';
// calcAge('1991');

// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Steve';
// let job = 'programmer';
// const year = 1989;

// // Functions
// console.log(addDecl(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = arr => arr[0] + arr[1];
// console.log(addExpr(4, 3));

// const numbers = [1, 33];

// console.log(addArrow(numbers));

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2023 - birthYear);
//   console.log(this);
// };

// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2023 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1980);

// const steve = {
//   year: 1989,
//   calcAge: function () {
//     console.log(this);
//     console.log(2023 - this.year);
//   },
// };

// steve.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = steve.calcAge;
// matilda.calcAge();

// var firstName = 'Matilda';

// const steve = {
//   firstName: 'Steve',
//   year: 1989,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2023 - this.year);

//     // const self = this;

//     const isMillenial = () => {
//       console.log(this);

//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => {
//     console.log(`Hey ${this.firstName}`);
//     console.log(this.firstName, this);
//   },
// };

// steve.calcAge();
// steve.greet();

// // arguments keyword
// const addExpr = function (a, b) {
//   return a + b;
// };

// // this example shows that FUNCTION EXPRESSIONS and DECLARATIONS have the arguments keyword, ARROW FUNCTIONS do not
// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(12, 14, 33, 75);

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Steve',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log('Friend:', friend);
// console.log('Me', me);

// Primitive Types:

let lastName = 'Williams';
let oldlastName = lastName;
lastName = 'Davis';
console.log(lastName, oldlastName);

// Reference Types:
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log(`Before marriage:`, jessica.lastName);
console.log(`After marriage:`, marriedJessica.lastName);

// Copying Objects:

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

console.log(jessica2, jessicaCopy);
