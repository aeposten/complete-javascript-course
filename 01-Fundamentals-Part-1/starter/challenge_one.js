massMark = 78;
massJohn = 92;
heightMark = 1.69;
heightJohn = 1.95;

johnBMI = massJohn / (heightJohn ** 2);
markBMI = massMark/ (heightMark ** 2);

console.log(johnBMI);
console.log(markBMI);

markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
