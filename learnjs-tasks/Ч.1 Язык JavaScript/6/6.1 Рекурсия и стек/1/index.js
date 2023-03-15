'use strict'

let sumTo = (n) => {
  let sum = 0;

  for (let i = 1; i <= n ; i++) {
    sum += i;
  }

  return sum;
};

alert(sumTo(4));
alert(sumTo(100));

let sumToRec = (n) => {
  return (n === 1)
    ? 1
    : n + sumToRec(n - 1);
};

alert(sumToRec(4));
alert(sumToRec(100));

let sumToProgressive = (n) => {
  return ((1 + n) / 2) * n;
};

alert(sumToProgressive(4));
alert(sumToProgressive(100));