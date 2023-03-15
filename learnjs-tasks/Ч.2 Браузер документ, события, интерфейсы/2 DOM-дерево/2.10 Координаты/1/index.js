'use strict'

let elemCoords = document.querySelector('#coords');

document.onclick = function (e) {
  // показывает координаты точки клика
  elemCoords.innerHTML = e.clientX + ':' + e.clientY;
};

let elem = document.querySelector('#field');


let coords = elem.getBoundingClientRect();

let upLeftOuterAngle = [coords.left, coords.top];
let downRightOuterAngle = [coords.right, coords.bottom];
let upLeftInterAngle = [
  coords.left + field.clientLeft,
  coords.top + field.clientTop,
];
let downRightInterAngle = [
  coords.left + elem.clientLeft + elem.clientWidth,
  coords.top + elem.clientTop + elem.clientHeight,
];

let result = [
  upLeftOuterAngle,
  downRightOuterAngle,
  upLeftInterAngle,
  downRightInterAngle,
];

console.log(result.join(' '));