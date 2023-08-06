'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({ time, address, mainIndex, starterIndex }) {
//     // console.log(
//     //   `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     // );
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },
// };

// restaurant.orderDelivery({
//   time: '22',
//   address: 'Via del SOle, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// -----------------------   STRING METHODS PRACTICE:   ------------------------

// for (const flight of flights.split('+')) {
//   const [type, from, to, time] = flight.split(';');
//   const output = `${type.includes('Delayed') ? '🔴' : ''} ${type.replaceAll(
//     '_',
//     ' '
//   )} from ${from.slice(0, 3).toUpperCase()} to ${to
//     .slice(0, 3)
//     .toUpperCase()} (${time.replace(':', 'h')})`;
//   console.log(output.padStart(36, ' '));
// }

// -----------------------   CODING CHALLENGE #4:   ------------------------

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The inpute will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
  first_name
Some_Variable
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase     ✅
firstName          ✅✅
someVariable       ✅✅✅
calculateAge       ✅✅✅✅
delatedDeparture   ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea '/n'
HINT 2: The solution only nees to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. tackle that only after you have the variable name conversion working
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck.  Then pause and continue!

Afterwards, test with your own test data!



*/

// const camelCase = function (arr) {
//   // console.log(arr);
//   let x = [];
//   let counter;
//   for (const [i, j] of arr.entries()) {
//     // console.log(i);
//     const rows = j.split('_');
//     // console.log(x);
//   }

//   let y = [];
//   for (const [i, j] of x) {
//     let correct = `${
//       i.toLowerCase() + j[0].toUpperCase() + j.slice(1).toLowerCase()
//     }`.trim();
//     // console.log(correct);
//     // let fixedName = i[0].toUpperCase()
//     // console.log(fixedName);
//     // console.log(i, j, arr);
//     console.log(correct);
//   }
// };

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', () => {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');

//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');

//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
//   // console.log(rows);
// });

// -----------------------   WORKING WITH STRINGS PART 3:   ------------------------
// console.log('a+very+nice+string'.split('+'));
// console.log('Steve Arceo Abadilla'.split(' '));

// const [firstName, lastName] = 'Steve Abadilla'.split(' ');
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const word of names) {
//     // namesUpper.push(word[0].toUpperCase() + word.toLowerCase().slice(1));

//     namesUpper.push(word.replace(word[0], word[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('daVid lee oswald');

// // Padding:
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+').padEnd(30, '+'));
// console.log('Steve'.padStart(25, '+').padEnd(30, '+'));
// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   console.log(str);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(3443123099388390));
// console.log(maskCreditCard('331349293911832163788'));

// //Repeat:
// const message2 = 'Bad weather... All departures Delayed... ';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line${'✈️'.repeat(n)}`);
// };

// planesInLine(3);

// // -----------------------   WORKING WITH STRINGS PART 2:   ------------------------
// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());
// const passenger = 'sTeVE';
// const passengerLower = passenger.toLowerCase();

// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passenger, passengerLower, passengerCorrect);
// const fixCaps = function (name) {
//   console.log(name[0].toUpperCase() + name.toLowerCase().slice(1));
// };

// fixCaps('fRaNKy');
// fixCaps('tEdDY');
// fixCaps('liOnEL');

// // Comparing Emails:
// console.log('---------------COMPARING EMAILS:---------------');
// const email = 'hello@steve.io';
// const loginEmail = '  Hello@Steve.Io \n'.toLowerCase().trim();

// // const trimmedEmail = loginEmail.toLowerCase().trim();
// // console.log(trimmedEmail);
// // console.log(email === trimmedEmail);
// console.log(loginEmail === email);

// console.log('---------------REPLACING:---------------');

// // replacing
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceGB, priceUS);

// const announcement = `All passengers come to boarding door 23. Boarding door 23!`;

// // future method: (which is current)
// console.log(announcement.replaceAll('door', 'gate'));
// // current method:
// console.log(announcement.replace(/door/g, 'gate'));

// console.log('---------------BOOLEANS:---------------');

// // Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Airb'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW ARirbus family');
// }

// //Practice excercise:
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard');
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');
// // -----------------------   WORKING WITH STRINGS PART 1:   ------------------------
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);

// console.log('B737'[0]);
// console.log(airline.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('portugal'));

// //slice method
// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat');
//   else console.log('You got lucky');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('jonas'));
// console.log(typeof new String('jonas'));
// console.log(typeof new String('jonas').slice(1));

// -----------------------   CODING CHALLENGE #3:   ------------------------
// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);
// console.log(gameEvents);

// // 1. Create an array 'events' of the different game events that happened (no duplicates).
// // const [, events] = new Set(gameEvents);
// // console.log(gameEvents.values());
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2. After the game has finished, it was found that the yellow card from minute 64 was unfair.  So remove this event from the game events log.
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes);
// console.log(gameEvents.size);
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// // 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
// // [FIRST HALF] 17: ⚽️ GOAL
// for (const [key, value] of gameEvents) {
//   // console.log(key, value);
//   console.log(`[${key <= 45 ? 'FIRST' : 'SECOND'} HALF] ${key}: ${value}`);
// }

// -----------------------   WHICH DATA STRUCTURE TO USE?   ------------------------
/*
Sources of data?
1. from the program itself: Data written directly in source code (e.g. status messages)
2. from the UI: Data input from the user or data written in DOM (e.g. tasks in todo app)
3. from external sources: Data fetched for example from web API (e.g. recipe objects) 

  Do you need...?
    Simple list? - you should use arrays or sets

    Key/Value Pairs? - Objects or Maps * Because keys allows us to describe values.


ARRAYS vs. SETS and OBJECTS vs. MAPS

Arrays:
- use when you need ORDERED list of values (might contain duplicates)
- use when you need to manipulate data

Sets:
- use when you need to work with UNIQUE values
- use when HIGH-PERFORMANCE is really important
- use to remove duplicates from arrays

Objects:
- more "traditional" key/value store ('abused objects')
- easier to write and access values with . and []

- use when you need to include functions (methods)
- use when working with JSON (can conver to map) 

Maps:
- better performance
- keys can have any data type
- easy to iterate
- easy to compute size

- use when you simply need to map keys to values
- use when you need keys that are NOT strings



*/

// -----------------------   MAPS: ITERATION  --------------------------------
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Correct 🍕'],
//   [false, 'Try again!'],
// ]);

// // console.log(question);
// // console.log(openingHours);

// // console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// // console.log(hoursMap);

// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// // Convert map to array
// console.log([...question]);
// // console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

// console.log(console);

// console.log(question.get(question.get('correct') === answer));
// -----------------------   MAPS:   --------------------------------
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));
// console.log(rest);

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// const arr = [1, 2];
// rest.set(arr, 'Test');

// console.log(rest);

// -----------------------   SETS:   --------------------------------

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(ordersSet);

// console.log(new Set('Steve'));

// // get size of a set
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// console.log(ordersSet);

// // ordersSet.clear();

// for (const order of ordersSet) console.log(order);

// // The MAIN reason we would use sets is if we need to delete any duplicate items.

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );

// ALL IN ALL we should typically use arrays when dealing with manipulation or retrieving items

// const properties = Object.keys(restaurant.openingHours);
// // console.log(properties);

// let openStr = `We are open on ${properties.length} days`;
// for (const day of properties) {
//   // console.log(day);
// }

// // console.log(openStr);

// //Property VALUES
// const values = Object.values(restaurant.openingHours);
// // console.log(values);

// // Entire Object
// const entries = Object.entries(restaurant.openingHours);

// // console.log(entries);

// for (const [key, { open, close }] of entries) {
//   // console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// console.log(a, b, c);

// const [x, y, z] = arr;

// console.log(`destructuring method:`, x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp;

// console.log(main, secondary);

// [main, secondary] = [secondary, main];

// console.log(main, secondary);

// // recieve 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);

// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// const [sel1, , [arr1, arr2]] = nested;
// console.log(sel1, arr1, arr2);

// const { name, openingHours, categories } = restaurant;

// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;

// console.log(menu, starters);

// //Mutating Variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// // spread operator
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// // copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// const menuAll = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menuAll);

// const menuAllConcat = restaurant.mainMenu.concat(restaurant.starterMenu);
// console.log(menuAllConcat);

// // Iterables: arrays, strings, maps, sets. BUT NOT OBJECTS!!

// const str = 'Steve';
// const letters = [...str, '', 'S.'];

// console.log(letters);
// // console.log(`${...str} Abadilla`); will not work

// Real World Example:
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// //Objects
// const newRestaurant = { foundedIn: 1997, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// //SPREAD, because its on the right side of =
// const arr = [1, 2, ...[3, 4]];

// //REST, because on the left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFood);
// console.log(`-----OR------`);

// console.log(3 || 'Steve');
// console.log('' || 'Steve');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);
// restaurant.numGuests = 23;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// console.log(`-----AND------`);
// console.log(0 && 'Steve');
// console.log(7 && 'Steve');

// console.log('Hello' && 23 && null && 'steve');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// Nullish Coalescing Operator (??)
// restaurant.numGuests = 0;
// const guest = restaurant.numGuests || 10;
// console.log(guest);

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
//   // numGuests: 20,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// // // OR assignment operator:

// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// // nullish assignment operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // AND assignment operator
// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// Coding Challenge #1:
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Coding Challenge #2:
// console.log(`----PROBLEM 1----`);
// /*
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// */

// const entries = Object.entries(game.scored);
// console.log(entries);

// for (const [goal, player] of entries) {
//   console.log(`Goal ${Number(goal) + 1}: ${player}`);
// }

// console.log(`----PROBLEM 2----`);

// /*
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calulate averages, you can go check if you don't remember)
// */
// let x = 0;
// const entries2 = Object.entries(game.odds);
// for (const [stat, value] of entries2) {
//   // console.log(stat, value);
//   x += value;
//   // console.log(x);
// }
// console.log(x / entries2.length);

// console.log(`----PROBLEM 3----`);

// /*
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
//       Odd of victory Bayern munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names
// */

// const gameInfo = Object.entries(game);
// // console.log(gameInfo);

// for (const [x, odds] of entries2) {
//   console.log(`Odd of ${odds === 3.25 ? 'draw: 3.25' : 'victory'} } `);
//   // console.log(x, odds);
//   console.log(x);
// }
// // 1. Create one player array for each team (variables 'players1' and 'players2')

// const [players1, players2] = game.players;
// // const players2 = [...game.players[1]];
// console.log(`#1:`);
// console.log(players1);
// console.log(players2);

// // 2. The first player in any players array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players.

// const [gk, ...fieldPlayers] = players1;
// console.log(`#2:`);
// console.log(gk, fieldPlayers);

// // 3. Create an array 'allPlayers' containing all players of both teams
// const allPlayers = [...players1, ...players2];
// console.log(`#3:`);
// console.log(allPlayers);

// // 4. During the game, Bayern Munich (team 1) used 3 substitute players.  So create a new array ('playersFinal') containing all the original team1 players plus 'Thiago', 'Coutinho', and 'Perisic'

// const playersFinal = [...game.players[0], 'Thiago', 'Coutinho', 'Perisic'];
// console.log(`#4:`);
// console.log(playersFinal);

// // 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw', 'team2')

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(`#5:`);
// console.log(team1, draw, team2);

// //6. Write a function ('printGoals') that receives an arbirtrary number of player names (NOT and array) and prints each of them to the console, along with the number of Goals that were scored (number of player names passed in)
// console.log(`#6:`);
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };

// printGoals(...game.scored);

// //7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator;
// // const winner =
// console.log(`#7:`);

// team1 < team2 && console.log('Team 1 is more likely to win');
// team2 < team1 && console.log('Team 2 is more likely to win');

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(item);
// }

// console.log([...menu.entries()]);
