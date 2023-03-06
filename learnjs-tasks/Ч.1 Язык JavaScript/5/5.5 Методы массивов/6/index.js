'use strict'

function Calculator() {
  this.methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  },

  this.calculate = function(str) {
    let splitArr = str.split(' ');
    let a = +splitArr[0];
    let b = +splitArr[2];
    let operator = splitArr[1];

    if( !this.methods[operator] || !isFinite(a) || !isFinite(b)) {
      return NaN;
    } 
    return this.methods[operator](a, b);
  },
  
  this.addMethod = function(str, func) {
    this.methods[str] = func;
  }
}

let calc = new Calculator();

alert(calc.calculate('3 + 7'));

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert(result);