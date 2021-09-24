dolphinsAverage = (97 +112+ 101)/3;
koalasAverage = (109 + 95 + 106)/3;

if (dolphinsAverage >= 100 && dolphinsAverage > koalasAverage) {
    console.log(`Dolphins win!`)
} else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
    console.log(`Koalas win!`)
} else if (dolphinsAverage === koalasAverage) {
    console.log(`It's a tie!`)
} else {
    console.log(`Nobody wins!`)
}