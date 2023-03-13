'use strict'

let largeImg = document.querySelector('#largeImg');

let thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (event)=> {
  event.preventDefault();
  let target = event.target.closest('a');
  if (!target) return; 

  let href = target.getAttribute('href');
  let title = target.title;

  largeImg.src = href;
  largeImg.alt = title;

});