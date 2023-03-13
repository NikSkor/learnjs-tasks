'use strict'

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
  container.innerHTML = recursiveTree(data);
};

let recursiveTree = (obj) => {
  let ul = '';
  let li = '';

  for (let key in obj) {
    li += `<li>${key}${recursiveTree(obj[key])}</li>`
  }

  if(li) {
    ul += `<ul>${li}</ul>`
  }

  return ul || '';
}

createTree(document.getElementById('tree'), data);