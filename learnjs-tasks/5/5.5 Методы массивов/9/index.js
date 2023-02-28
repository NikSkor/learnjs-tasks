'use strict'

let sortByAge = (users) => {
  users.sort((a, b) => a.age - b.age);
};

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

alert(arr[0].name);
alert(arr[1].name);
alert(arr[2].name);