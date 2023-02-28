'use strict'

let unique = (arr) => {
  let uniqueArr = [];
  arr.forEach((item) => {
    if (!uniqueArr.includes(item)) {
      uniqueArr.push(item);
    }
  })
  return uniqueArr;
};

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert(unique(strings));