'use strict'

let tree = document.querySelector('.tree');

let lis = tree.querySelectorAll('li');

for (let elem of lis) {
  let span = document.createElement('span');

  elem.prepend(span);
  span.append(span.nextSibling);
};

tree.addEventListener('click', (e)=> {
  let text = e.target;

  if (text.tagName.toLowerCase() != 'span') return;

  let children = text.parentNode.querySelector('ul');

  if (!children) return;

  children.classList.toggle('visually-hidden');
});