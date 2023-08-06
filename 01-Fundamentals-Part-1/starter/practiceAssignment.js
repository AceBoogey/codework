const country = 'USA';
const continent = "North America";
const population = 200000000;

console.log(country, continent, population);

const isIsland = false;
let language = '';

console.log(isIsland, population, country, language);

language = 'English';

//1
console.log(population / 2);

//2
console.log(population + 1);

const country2 = 'Finland';
const population2 = 6000000;

if (population > population2) {
    console.log(`${country2} does not have more people then the ${country}`);
}

if (population > 33000000) {
    console.log(`${country} has more people then 33,000,000`);
}

const Portugal = {
    country: "Portugal",
    continent: "Europe",
    population: 11,
    border: 1,
    language: "Portuguese",
    isIsland: false,
}


const Australia = {
    country: "Australia",
    continent: "Australia",
    language: "English",
    border: 0,
    population: 25,
    isIsland: true,
}

const USA = {
    country: "USA",
    continent: "North America",
    population: 200,
    language: "English",
    border: 2,
    isIsland: false,
}

const Canada = {
    country: "Canada",
    continent: "North America",
    population: 39.5,
    language: "English",
    border: 1,
    isIsland: false,
}

let a = USA;

if (a.population > 300) {
    console.log(`${a.country} population is above average`);
} else {
    console.log(`${a.country}'s population is  ${(300 - a.population) / 2} million below average`);
}

console.log('9' - '5');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);


const numNeighbours = function (a) {
    if (a.border === 1) {
        console.log("Only 1 border!")
    } else if (a.border > 1) {
        console.log("More than 1 border")
    } else {
        console.log("This is a motherfuckin Island dog!")
    }
}

const aboutCountry = function (a) {
    console.log(`${a.country} is on the continent of ${a.continent}, and its ${a.population} million people speak ${a.language} `)
}

aboutCountry(Portugal);
numNeighbours(USA);

numNeighbours(Portugal);

aboutCountry(Australia);

const Sara = function (a) {
    if (a.population < 50 && a.language == "English" && !a.isIsland) {
        console.log(`Sara would love to live here in ${a.country} as it meets all the necessary criteria 👍`)
    } else {
        console.log(`Sara does not like this place as it does not meet her criteria 😠`)
    }
}

Sara(USA);
Sara(Portugal);
Sara(Australia);
Sara(Canada);

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

console.log(
    `${country}'s population is ${population > 33 ? 'above' : 'below'} average`
)
