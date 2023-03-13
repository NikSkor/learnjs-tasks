'use strict'

let ul = document.createElement('ul');
document.body.append(ul);

let isType = true;

while (isType) {
  let userText = prompt('Введите текст', '');

  if (userText === '' || userText === null) {
    isType = false;
    break;
  };

  let li = document.createElement('li');
  li.textContent = userText;
  ul.append(li);
};
