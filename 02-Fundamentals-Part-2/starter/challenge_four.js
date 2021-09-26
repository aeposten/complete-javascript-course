 const calcTip = function(bill) { 
     return (bill >= 50 && bill <=300) ? (bill * .15) : (bill * .2);
}

const bills = [22, 295, 176, 440, 37, 105, 10, 110, 86, 52];

let tips = [];
let totals = [];

for (let amt = 0; amt < bills.length; amt ++) {
    const tip = calcTip(bills[amt]);
    tips.push(tip);
    totals.push((bills[amt]) + tip);
    
      
}

console.log(tips);
console.log(totals);
