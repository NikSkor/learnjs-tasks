'use strict'

let arr = [1, 2, 3, 4, 5, 6, 7];

let inBetween = (a, b) => {
  return (result) => {
    return (result >= a && result <= b);
  }
};

alert( arr.filter(inBetween(3, 6)) );

let inArray = (arr) => {
  return (result) => {
    return arr.includes(result);
  }
}

alert( arr.filter(inArray([1, 2, 10])) );