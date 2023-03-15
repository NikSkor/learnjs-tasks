'use strict'

let printNumbers = (from, to) => {
  let currentNumber = from;
  
  let timerId = setInterval(()=> {
    alert(currentNumber);
    if (currentNumber === to) {
      clearInterval(timerId);
    };
    currentNumber++;
  }, 1000);
};

printNumbers(5, 10);
