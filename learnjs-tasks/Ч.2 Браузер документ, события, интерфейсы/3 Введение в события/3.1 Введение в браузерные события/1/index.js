'use strict'

let btn = document.querySelector('#hider');

let text = document.querySelector('#text');

btn.addEventListener('click', ()=> {
  text.style.display = 'none';
});

