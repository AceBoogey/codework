// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
The Four Steps to Problem Solving:

Example:
    Project Manager: "We need a function that reverses whatever we pass into it"   

1. Make sure you 100% understand the problem. Ask the right questions to get a clear picture of the problem.

       - keyword is "whatever", what exactly would we wanna put through the function that can acutally be REVERSED?
        that would leave strings, numbers, and arrays... the other types wouldnt make sense

        -also what do we do if something else is passed in other than the 3 types described above?

       - what should be returned? should it always be a string, or should the type be the same as passed in?

       - how to recognize whether the argument is a number, a string, or an array?

       - how to reverse a number, a string, and an array?

2. Divide and conquer: Break a big problem into smaller sub-problems.

        -sub-problems:
            1.check if argument is a number, a string, or an array

            2. implement reversing a number

            3. implement reversing a string

            4. implement reversing an array

            5. return reversed value

            *essentially turns into a task list making it easier to digest.

3.  Dont be afraid to do as much research as you have to 
    THINGS TO RESEARCH:
        -how to check if a value is a number in Javascript?
        -how to check if a value is a string in Javascript?
        -how to check if a value is an array in Javascript
        -how to reverse a number in Javascript?
        -how to reverse a string in Javascript?
        -how to reverse an array in Javascript?

4. For bigger problems, write pseudo- code before writing the actual code
        
        example:
        function reverse(value)
            if value type !string && !number && !array
                return value

            if value type == string
                reverse string
            if value type == number
                reverse number
            if value type == array
                reverse array

            return reversed value
*/

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: prompt('Degrees Celsius:'),
//   };

//   const kelvin = Number(measurement.value) + 273;
//   return kelvin;
// };

//A) Identify
// console.log(measureKelvin());

// Problem: take an array of "temperatures", then produce a string that shows the temp in celsius with corresponding day i.e "...17℃ in 1 days... 21℃ in 2 days... 23℃ in 3 days...''"

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// 1. loop through the array
const printForcast = function (arr) {
  let forcast = '';
  for (let i = 0; i < arr.length; i++) {
    //2. adds the number with string added to a variable holding an empty string
    forcast += `... ${arr[i]}℃ in ${arr.indexOf(arr[i]) + 1} days`;
  }
  return forcast;
};

//3. returns variable at the end of the iteration.
console.log(printForcast(data1));
console.log(printForcast(data2));
