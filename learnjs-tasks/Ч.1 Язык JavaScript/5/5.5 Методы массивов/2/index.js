'use strict'

let filterRange = (arr, a, b) => {
  let resultArr = arr.filter(item => (item >= a && item <= b));
  return resultArr;
};

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert(filtered);

alert(arr);