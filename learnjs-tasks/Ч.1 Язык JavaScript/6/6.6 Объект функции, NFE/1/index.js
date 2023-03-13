'use strict'

function makeCounter() {

  function counter() {
    return counter.count++;
  };

  counter.count = 0;

  counter.set = function(value) {
    counter.count = value;
  };

  counter.decrease = function() {
    counter.count--;
  };

  return counter;
}

  let counter = makeCounter();
  
  alert(counter());
  alert(counter());
  
  counter.set(10);
  
  alert(counter()); 
  
  counter.decrease();
  
  alert(counter());

  // ? Другой вариант решения

  // function makeCounter() {
  //   let count = 0;

  //   function counter() {
  //     return count++;
  //   };

  //   counter.set = function (value) {
  //     count = value;
  //   };

  //   counter.decrease = function () {
  //     count--;
  //   };

  //   return counter;
  // }