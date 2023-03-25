'use strict'

function* pseudoRandom(seed) {

  let res = seed;

  do {
    res = res * 16807 % 2147483647;
    yield res;
  } while(true);

}

let generator = pseudoRandom(1);

alert(generator.next().value); // 16807
alert(generator.next().value); // 282475249
alert(generator.next().value); // 1622650073