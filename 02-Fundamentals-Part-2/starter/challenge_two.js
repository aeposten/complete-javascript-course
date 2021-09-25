const calcTip = (bill) => (bill >= 50 && bill <=300) ? (bill * .15) : (bill * .2);

const bills = [125, 555, 44]
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];



let totals = [(tips[0]+bills[0]), (tips[1]+bills[1]), (tips[2]+bills[2])] ;

console.log(tips);
console.log(totals);