let calcAverage = (match1, match2, match3) => (match1 + match2 + match3)/3;

const averageDolphin = calcAverage(85, 54, 41);
const averageKoala = calcAverage(23, 34, 27);




const checkWinner = (averageDolphin, averageKoala) => (averageDolphin > averageKoala) ? `Dolphins win!`: `Koalas win!`;

console.log(checkWinner(averageDolphin, averageKoala));

