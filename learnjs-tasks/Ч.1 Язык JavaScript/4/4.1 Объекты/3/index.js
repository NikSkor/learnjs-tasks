'use strict'

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};


let sumSalaries = (obj) => {
  let result = 0;

  for (let key in obj) {
    result += obj[key];
  }

  return result;
};

let sum = sumSalaries(salaries);
alert(sum);

