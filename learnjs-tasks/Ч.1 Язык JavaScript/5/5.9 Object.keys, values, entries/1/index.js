'use strict'

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

let sumSalaries = (obj) => {
  let result = 0;

  for (let item of Object.values(obj)) {
    result += item;
  }

  return result;
};

let sum = sumSalaries(salaries);
alert(sum);
