'use strict'

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

let topSalary = (salaries) => {
  if (!Object.keys(salaries).length) return null;

  let highLevelSalary = 0;
  let highLevelName = '';
  
  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > highLevelSalary) {
      highLevelSalary = salary;
      highLevelName = name;
    }
  }

  return highLevelName;

};

alert(topSalary(salaries));
