'use strict'

let users = [
  { name: 'John', age: 20, surname: 'Johnson' },
  { name: 'Pete', age: 18, surname: 'Peterson' },
  { name: 'Ann', age: 19, surname: 'Hathaway' },
];

let byField = (param) => {
  return (a, b) => {
    return (a[param] > b[param]) ? 1 : -1;
  }
};

users.sort(byField('name'));
users.map((elem) => alert(elem.name));

users.sort(byField('age'));
users.map((elem) => alert(elem.age));

