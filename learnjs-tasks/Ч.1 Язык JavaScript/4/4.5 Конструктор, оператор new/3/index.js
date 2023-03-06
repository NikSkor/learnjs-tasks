'use strict'

function  Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    let newValue = +prompt('Введите число: ', 0);
    this.value += newValue;
  }
};

let accumulator = new Accumulator(1);
console.log(accumulator.value);
accumulator.read();
accumulator.read();
console.log(accumulator.value);


alert('Аккумулируемый результат = ' + accumulator.value);
