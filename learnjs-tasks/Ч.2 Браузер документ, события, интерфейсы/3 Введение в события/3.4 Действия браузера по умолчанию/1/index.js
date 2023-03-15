'use strict'

let contents = document.querySelector('#contents');

contents.addEventListener('click', (event)=> {

  let target = event.target.closest('a');

  if(!target) return; 

  let href = target.getAttribute('href');
  
  let question = confirm(`Вы хотите перейти по ссылке ${href}`);

  if (!question) event.preventDefault();
});
