'use strict'

  let slider = document.querySelector('.slider');
  let list = document.querySelector('.list');
  let li = list.querySelectorAll('li');

  let arrowLeft = document.querySelector('.prev');
  let arrowRight = document.querySelector('.next');

  let listMargin = getComputedStyle(list);

  let size = 130;


  arrowRight.addEventListener('click', ()=> {
    let res = parseInt(listMargin.marginLeft);
    if (res >= 0) return;

    let shift = res + size;
    list.style.marginLeft = shift + 'px';
  });

  arrowLeft.addEventListener('click', () => {
    let res = parseInt(listMargin.marginLeft);
    if (res <  -size  * (li.length - 4)) return;
    
    let shift = res - 130;
    list.style.marginLeft = shift + 'px';
  });

