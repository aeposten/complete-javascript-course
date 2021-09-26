
const mark = {
    firstName: `Mark`,
    lastName: `Miller`,
    height: 1.69,
    mass: 78,

    calcBMI: function () {
       this.BMI = this.mass / (this.height **2);
       return this.BMI;
    }
}
mark.calcBMI();
console.log(Math.floor(mark.BMI));

const john = {
    firstName: `John`,
    lastName: `Smith`,
    height: 1.95,
    mass: 92,

    calcBMI: function () {
       this.BMI = this.mass / (this.height **2);
       return this.BMI;
    }
}


john.calcBMI();
console.log(Math.floor(john.BMI));