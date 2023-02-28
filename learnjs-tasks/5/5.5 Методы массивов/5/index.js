'use strict'

let copySorted = (arr) => {
  let copyArr = arr.slice();
  return copyArr.sort((a, b) => a.localeCompare(b));
};

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert(sorted);
alert(arr);