'use strict'

let maxNumber = 10;


for (let i = 2; i <= maxNumber; i++) {
  let count = 0;
  for (let j = 2; j < i; j++) {
    let remainder = i % j;
    if (remainder === 0) count++;
  }
  if (count === 0) {
    alert(i);
  }
}


