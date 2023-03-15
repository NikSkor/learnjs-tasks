'use strict'

Function.prototype.defer = function (ms) {
  let func = this;
  
  return function() {
    setTimeout(() => func.apply(this, arguments), ms);
  };
  
};

function f(a, b) {
  alert(a + b);
}

f.defer(1000)(1, 2);