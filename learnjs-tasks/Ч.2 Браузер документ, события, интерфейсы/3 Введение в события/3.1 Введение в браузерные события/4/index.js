'use strict'

let title = document.querySelector('.title');
let list = document.querySelector('.list');

title.addEventListener('click', ()=> {
  list.classList.toggle('visually-hidden');
  title.classList.toggle('title-open');
  console.log('kuyku');
})


