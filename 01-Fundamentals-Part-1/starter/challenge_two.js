const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;

const johnBMI = massJohn / (heightJohn ** 2);
const markBMI = massMark/ (heightMark ** 2);

console.log(johnBMI);
console.log(markBMI);

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI ${Math.floor(markBMI)} is higher than John's BMI ${Math.floor(johnBMI)}`)
} else {
    console.log(`Mark's BMI ${Math.floor(markBMI)} is lower than John's BMI ${Math.floor(johnBMI)}`)
};