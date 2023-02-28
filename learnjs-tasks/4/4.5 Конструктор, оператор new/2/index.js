'use strict'

function Calculator() {
  this.read = function() {
    this.a = +prompt('Введите число a:', 0);
    this.b = +prompt('Введите число b:', 0);
  },
  this.sum = function() {
    return this.a + this.b;
  },
  this.mul = function() {
    return this.a * this.b;
  }
};

let calculator = new Calculator();
calculator.read();

alert('Сумма = ' + calculator.sum());
alert('Произведение = ' + calculator.mul());