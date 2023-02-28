'use strict'
let object = {}

function A() {
  return object;
}
function B() {
  return object;
}

let a = new A();
let b = new B();

alert( a == b );