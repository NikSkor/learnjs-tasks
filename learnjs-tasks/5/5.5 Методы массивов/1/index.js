'use strict'

let camelize = (str) => {
  let strArr = str.split('-');
  
  let formatedArr = strArr.map((item, i) => {
    if (i === 0) return item;
    return item[0].toUpperCase() + item.slice(1);
  });

  str = formatedArr.join('');

  return str;
};

alert(camelize('background-color'));
alert(camelize('list-style-image'));
alert(camelize('-webkit-transition'));