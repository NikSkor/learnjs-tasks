'use strict'

function pow(x, n) {
  return x**n;
}

let x = +prompt('Введите число x:', '');
let n = +prompt('Введите степень n:', '');

if (n < 1) {
  alert('Неверно введена степень n, нужны натуральные цифры!');
} else {
  alert(`Число ${x} в степени ${n} будет равно: ${pow(x, n)}`);
}


