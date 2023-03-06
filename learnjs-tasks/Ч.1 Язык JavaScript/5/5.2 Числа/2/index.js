'use strict'

let readNumber = () => {
  let userNumber;

  do {
    userNumber = prompt('Введите число: ', 0);
  } while (!isFinite(userNumber));

  if (userNumber === null || userNumber === '') {
    return null;
  }
  
  return +userNumber;
}

alert('Введённое Вами число: ' + readNumber());