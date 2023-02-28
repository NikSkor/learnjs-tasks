'use strict'
let sumInput = () => {

  let userNumbers = [];
  let sum = 0;

  while (true) {
    let userNumber = prompt('Введите число: ', 0);

    if (userNumber === '' || userNumber === null || !isFinite(userNumber))
      break;

    userNumbers.push(+userNumber);
  }

  console.log(userNumbers);

  for (let item of userNumbers) {
    sum += item;
  }

  return sum;
};

alert('Сумма введённых Вами чисел: ' + sumInput());