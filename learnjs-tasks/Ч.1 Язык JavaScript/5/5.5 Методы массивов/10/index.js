'use strict'

let randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

let shuffle = (array) => {
  let maxPositionNumber = array.length;
  let randPosition;
  let elemPosition;

  while (maxPositionNumber) {
    randPosition = randomInteger(0, maxPositionNumber--);

    elemPosition = array[maxPositionNumber];
    array[maxPositionNumber] = array[randPosition];
    array[randPosition] = elemPosition;
  }
};

let arr = [1, 2, 3];

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);


shuffle(arr);
console.log(arr);




