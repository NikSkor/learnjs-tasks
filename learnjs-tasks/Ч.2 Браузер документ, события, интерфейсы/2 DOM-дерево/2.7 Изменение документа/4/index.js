'use strict'

let list = document.querySelectorAll('li');

for (let elem of list) {
  let childCount = elem.querySelectorAll('li').length;
  if (childCount) {
      elem.firstChild.data += `[${childCount}]`;
      console.log(childCount);
  };
};


