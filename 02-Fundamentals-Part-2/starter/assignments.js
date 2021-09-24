'use strict';
/*
function describeCountry (country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`
}

const unitedStates = describeCountry(`The UnitedStates`, 320, `Washington DC`);

console.log(unitedStates);


function percentageOfWorld1 (populationCountry) {
    const populationWorld = 7900;
    return (populationCountry/populationWorld) * 100;
}
const USA = 331;
const portugal = 10;
const china = 1441;


let  percentageOfWorld2 = function (populationCountry) {
    const populationWorld = 7900;
    return (populationCountry/populationWorld) * 100;
}


const populationWorld = 7900;
let percentageOfWorld3 = populationCountry => (populationCountry/populationWorld) * 100

console.log(percentageOfWorld3(331));

*/
const USA = 331;
const portugal = 10;
const china = 1441;

const describePopulation = (country, population) => {
    const populationWorld = 7900;
    const percentageofWorld = (population/populationWorld) * 100;
    return `${country} has ${population} million which is ${Math.floor(percentageofWorld)}% of the world's population.`;
}

console.log(describePopulation(`UnitedStates`, 331));