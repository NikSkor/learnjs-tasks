'use strict'

let list = document.querySelectorAll('li');

console.log('Содержимое всех li:');

for (let elem of list) {
  let title = elem.firstChild.data.trim();

  let childCount = elem.querySelectorAll('li').length;

  console.log(`${title}: ${childCount}`)
};

