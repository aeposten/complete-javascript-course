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

*/
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