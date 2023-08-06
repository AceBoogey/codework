// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// function logger() {
//     console.log('My name is... tcka tcka slim shady');
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const juice1 = fruitProcessor(5, 0);
// console.log(juice1);

// const juice2 = fruitProcessor(2, 4);
// console.log(juice2);

// function calcAge1(birthYear) {
//     return 2023 - birthYear;
// }

// console.log(calcAge1(1989));

// const calcAge2 = function (birthYear) {
//     return 2023 - birthYear;
// }

// console.log(calcAge2(1992));

// const calcAge1 = birthYear => 2037 - birthYear

// console.log(calcAge1(1990));

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2023 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1989, 'Steve'));
// console.log(yearsUntilRetirement(2000, 'Benjamin'));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const cutApple = cutFruitPieces(apples);
//     const cutOrange = cutFruitPieces(oranges);
//     console.log(apples, oranges);
//     const juice = `A super juice with a whopping ${cutApple} pieces of apple and ${cutOrange} pieces of orange. A juice squeezed for a King!`;
//     return juice;
// }

// console.log(fruitProcessor(3, 6));

// const calcAge = function (birthYear) {
//     return 2023 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(1992, 'Farrah'));
// console.log(yearsUntilRetirement(1957, 'Mike'));

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Micheal', 'Steven', 'Peter'];

// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2021);

// console.log(years);

// console.log(years[0]);

// console.log(years.length);
// console.log(years[years.length - 1]);

// years[4] = 1962;
// console.log(years);

// const steve = ['Steve', 'Abadilla', 2023 - 1989, 'LSA', friends];
// console.log(steve);

// const calcAge = function (birthYear) {
//     return 2023 - birthYear;
// }
// const years = [1990, 1967, 2003, 1996, 1988, 2006];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

// friends.push('Larry');
// console.log(friends);
// friends.pop(friends.length - 1);
// console.log(friends);
// friends.pop('Peter');
// console.log(friends);
// friends.unshift('Mario');
// console.log(friends);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     age: 2023 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: false,

//     calcAge: function (birthYear) {
//         return 2023 - this.birthYear;
//     },

//     informer: function (jonas) {
//         this.bio = `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he ${this.hasDriversLicense ? "has a driver's license" : "does not have a driver's license"}`
//     }
// };

// jonas.informer();

// console.log(jonas);

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function (mass, height) {
//         this.BMI = this.mass / (this.height * this.height);
//     }
// }

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function (mass, height) {
//         this.BMI = this.mass / (this.height * this.height);
//     }
// }

// john.calcBMI();
// mark.calcBMI();

// console.log(john);
// console.log(`${john.BMI > mark.BMI ? john.fullName : mark.fullName}'s BMI (${john.BMI > mark.BMI ? john.BMI : mark.BMI}) is higher than ${john.BMI > mark.BMI ? mark.fullName : john.fullName}'s (${john.BMI > mark.BMI ? mark.BMI : john.BMI})`);

// for (let x = 1; x <= 10; x++) {
//     console.log(`Lifting weights repetition ${x}🏋️`);
// }

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2023 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
// ];

// for (let i = 0; i <= jonasArray.length - 1; i++) {
//     console.log(jonasArray[i]);
// }

// const years = [1991, 2005, 2001, 1932, 1955];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2023 - years[i]);
// }

// console.log(ages);

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2023 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
// ];

// for (i = jonas.length - 1; i >= 0; i--) {
//     console.log(jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`------- Starting exercise ${exercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Lifting weight repetition ${rep} 🏋️`);
//     }
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weights repetition ${rep} 🏋️`);
//     rep++;
// }

// let num = 1;
// while (num !== 6) {
//     num = Math.floor(Math.random() * 6 + 1)
//     if (num === 6) {
//         console.log('First Try')
//     } else {
//         console.log(`You rolled a ${num}`);
//     }

// }

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

/* Write your code below. Good luck! 🙂 */

const bills = new Array(22, 295, 176, 440, 37, 105, 10, 1100, 86, 52);

// console.log(bills);

// const tips = [];
// const totals = [];

// for (i = 0; i < bills.length; i++) {
//     tips.push(calcTip(bills[i]));
//     totals.push([bills[i] + tips[i]]);
// }

// console.log(tips, totals);

// const bills = new Array(22, 295, 176, 440, 37, 105, 10, 1100, 86, 52);

// console.log(bills);

// const tips = [];
// const totals = [];

// for (i = 0; i < bills.length; i++) {
//     tips.push(calcTip(bills[i]));
//     totals.push([bills[i] + tips[i]]);
// }

// console.log(tips, totals);

// const calcAverage = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//         return sum;
//     }
//     return sum / arr.length
// }

// console.log(calcAverage(totals));