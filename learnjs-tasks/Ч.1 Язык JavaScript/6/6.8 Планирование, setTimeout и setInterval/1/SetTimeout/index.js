'use strict'

let printNumbers = (from, to) => {
  let currentNumber = from;

  let timerId = setTimeout(function print() {
    alert(currentNumber);

    timerId = setTimeout(print, 1000);

    if (currentNumber === to) {
      clearTimeout(timerId);
    }

    currentNumber++;
  }, 1000);
};

printNumbers(5, 10);