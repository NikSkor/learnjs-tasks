'use strict'

let getMaxSubSum = (arr) => {
  let max = 0;
  let current = 0;

  for (let elem of arr) {
    current += elem;
    if (current > max) {
      max = current;
    }
    if (current < 0) {
      current = 0;
    }
  }
  return max;
};

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));
console.log(getMaxSubSum([-1, -2, -3]));