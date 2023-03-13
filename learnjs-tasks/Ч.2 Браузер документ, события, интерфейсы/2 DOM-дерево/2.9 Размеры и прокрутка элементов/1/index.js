'use strict'

let elem = document.querySelector('.main');

elem.style.overflowY = 'scroll';
elem.style.width = '1000px';
elem.style.height = '1000px';

elem.addEventListener('scroll', ()=> {
  let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;
  console.log('scrollBottom: ', scrollBottom);
});