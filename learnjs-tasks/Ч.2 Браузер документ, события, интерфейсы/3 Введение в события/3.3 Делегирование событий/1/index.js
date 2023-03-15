'use strict'

let container = document.querySelector('#container');

container.addEventListener('click', (e)=> {
  let btn = e.target;
  if(btn.classList.contains('remove-button')) {
    let pane = e.target.closest('.pane');
    pane.remove();
  };
});
