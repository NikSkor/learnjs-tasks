'use strict'

let user = {
  name: 'Василий Иванович',
  age: 35,
};

let json = JSON.stringify(user);

let newUser = JSON.parse(json);

console.log(newUser);