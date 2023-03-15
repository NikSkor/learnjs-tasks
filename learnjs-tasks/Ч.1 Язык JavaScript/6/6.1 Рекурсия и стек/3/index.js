'use strict'

let fib = (n) => {
  let a = 1;
  let b = 1;
  let c;

  for (let i = 3; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  return c;
};

alert(fib(3));
alert(fib(7));
alert(fib(77));