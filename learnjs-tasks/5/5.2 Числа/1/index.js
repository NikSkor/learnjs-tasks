'use strict'

let sum = () => {
  let x = +prompt('Введите число x:', 0);
  let y = +prompt('Введите число y:', 0);

  return x + y;
};

alert('Сумма введенных чисел: ' + sum());