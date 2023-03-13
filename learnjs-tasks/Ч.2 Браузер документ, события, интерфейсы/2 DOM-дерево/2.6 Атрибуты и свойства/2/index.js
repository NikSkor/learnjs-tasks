'use strict'

let list = document.querySelectorAll('a');

for (let elem of list) {
  let attr = elem.getAttribute('href');
  if (
    attr &&
    !attr.includes('http://internal.com') &&
    attr.includes('://')
  ) {
    elem.style.color = 'orange';
  }
}