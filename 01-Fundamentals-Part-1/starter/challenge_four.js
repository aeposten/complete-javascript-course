const bill = 275;
const tip = (bill >= 50 && bill <=300) ? (bill * .15) : (bill * .2);
const total = bill + tip;

console.log(`The total was ${total}, the bill was ${bill}, and the tip was ${tip}.`);
