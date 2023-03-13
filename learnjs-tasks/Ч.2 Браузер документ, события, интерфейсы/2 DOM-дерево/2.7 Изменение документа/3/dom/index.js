'use strict';

let data = {
  Рыбы: {
    форель: {},
    лосось: {},
  },

  Деревья: {
    Огромные: {
      секвойя: {},
      дуб: {},
    },
    Цветковые: {
      яблоня: {},
      магнолия: {},
    },
  },
};

let createTree = (container, data) => {
  container.append(recursiveTree(data));
};

let recursiveTree = (obj) => {

  if (!Object.keys(obj).length) return;

  let ul = document.createElement('ul');

  for (let key in obj) {
    let li = document.createElement('li');
    li.innerText = key;

    if (Object.keys(obj[key]).length) {
      li.append(recursiveTree(obj[key]));
    }

    ul.append(li);
  }

  

  return ul;
};

createTree(document.getElementById('tree'), data);
