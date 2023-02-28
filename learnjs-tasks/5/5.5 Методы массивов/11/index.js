'use strict'

let getAverageAge = (users) => {
  let sumAge = users.reduce((sum, user) => sum + user.age, 0);

  return sumAge / users.length;
};

let vasya = {name: "Вася", age: 25};
let petya = {name: "Петя", age: 30};
let masha = {name: "Маша", age: 29};

let arr = [vasya, petya, masha];

alert(getAverageAge(arr));