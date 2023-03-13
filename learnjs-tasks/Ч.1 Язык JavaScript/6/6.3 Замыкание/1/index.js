'use strict'

let sum = (numA) => {
  return (numB) => {
    return numA + numB;
  }
};


alert(sum(1)(2));
alert(sum(5)(-1));