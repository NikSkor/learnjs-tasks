'use strict'

let btn = '<button class="remove-button">[x]</button>';

let panes = document.querySelectorAll('.pane');
console.log('panes: ', panes);

for (let elem of panes){
  elem.insertAdjacentHTML(
    'afterbegin',
    btn
  );

  elem.addEventListener('click', ()=> {
    elem.remove();
  })
};

