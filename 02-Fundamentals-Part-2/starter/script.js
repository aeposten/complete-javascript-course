'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive!`);


function logger () {
    console.log(`My name is Jonas.`);
}

logger(23);
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(2, 7);
console.log(appleJuice);
console.log(fruitProcessor(2, 7));

const appleOrangeJuice = fruitProcessor(8,6);
console.log(appleOrangeJuice);

const num = Number(`23`);
console.log(num);



// function declaration
const age1 = calcAge1(1991);

function calcAge1 (birthYear) {
    return (2037 - birthYear);
}



console.log(age1);

//function expression

const calcAge2 = function (birthYear) {
    return (2037 - birthYear);
}

const age2 = calcAge2(1991);
console.log(age2);



//Arrow Function

const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = (2037 - birthYear);
    const retirement = (65 - age);
    // return retirement;
    return `${firstName} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(1991, `Jonas`));

function cutFruitPieces (fruit) {
    return (fruit * 4);
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces (apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

function yearsUntilRetirement  (birthYear, firstName)  {
    const age = calcAge(birthYear)
    const retirement = (65 - age);
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
    } else {
        console.log(`${firstName}  is already retired.`);
    }
}

yearsUntilRetirement(1950, `Mike`);


const friends = [`Michael`, `Steven`, `Peter`];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);

console.log(friends[friends.length - 1]);

friends[2] = `Jay`;
console.log(friends);

const firstName = `Jonas`
const jonas = [firstName, `Schmedtmann`, (2037 - 1991), `teacher`,friends];
console.log(jonas);

console.log(jonas.length);

//Exercise 
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [age1, age2, age3];
console.log(ages);


//Add Elements
const friends = [`Michael`, `Steven`, `Peter`];

const newLength = friends.push(`Jay`);

console.log(newLength);

friends.unshift(`John`);
console.log(friends);

//Remove Elements

const popped = friends.pop();
console.log(popped);

friends.pop();
console.log(friends);

friends.shift();

friends.push(23);
console.log(friends);

console.log(friends.indexOf(`Steven`));

if (friends.includes(`Steven`)){
    console.log(`You have a friend called Steven`)
};

const jonasArray = [
    `Jonas`,
    `Schmedtmann`,
    (2037 - 1991),
    `teacher`,
    [`Michael`, `Peter`, `Steven`]

];




const jonas = {
    firstName: `Jonas`,
    lastName: `Schmedtmann`,
    age: (2037 - 1991),
    job: `teacher`,
    friends: [`Michael`, `Peter`, `Steven`]
};

// console.log(jonas);

console.log(jonas.lastName);
console.log(jonas[`lastName`]);

const nameKey = `Name`;
console.log(jonas[`first` + nameKey]);
console.log(jonas[`last` + nameKey]);


// const interestedIn = prompt(`What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends.`);

// console.log(jonas[interestedIn]);

// if (jonas[interedtedIn]) {
//     console.log(jonas[interestedIn])
// } else {
//     console.log(`Choose between firstName, lastName, age, job, and friends.`)
// }

jonas.location = `Portugal`
jonas[`twitter`] = `@jonasschmedtman`

console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}.`)

*/

const jonas = {
    firstName: `Jonas`,
    lastName: `Schmedtmann`,
    birthYear: 1991,
    job: `teacher`,
    friends: [`Michael`, `Peter`, `Steven`],
    hasDriversLicense: true,

    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return (`${jonas.firstName} is a ${jonas.calcAge()} year old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`)
    }
};

console.log(jonas.calcAge());
console.log(jonas.age);


console.log(`${jonas.firstName} is a ${jonas.age} year old ${jonas.job} and he has a.`)

console.log(jonas.getSummary());