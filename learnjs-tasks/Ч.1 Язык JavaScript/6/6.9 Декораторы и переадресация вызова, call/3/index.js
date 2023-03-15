'use strict'

function debounce(func, ms) {
  debounce.isPause = false;

  return function() {
    if (debounce.isPause === true) return;

    func.apply(this, arguments);

    debounce.isPause = true;

    setTimeout(() => {
      debounce.isPause = false;
    }, ms);
  };
};

let f = debounce(alert, 1000);

f(1);
f(2);

setTimeout( () => f(3), 100);
setTimeout( () => f(4), 1100);
setTimeout( () => f(5), 1500); 
