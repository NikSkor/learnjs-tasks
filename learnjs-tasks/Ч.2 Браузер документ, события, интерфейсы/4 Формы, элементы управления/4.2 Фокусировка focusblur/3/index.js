'use strict'

let mouse = document.getElementById('mouse');

mouse.addEventListener('click', ()=> {
  mouse.tabIndex = 0;
  mouse.focus();
  mouse.style.position = 'absolute';
});

mouse.addEventListener('keydown', (e) => {
  if (e.code == 'ArrowUp') {
    mouse.style.top = mouse.getBoundingClientRect().top - mouse.offsetHeight + 'px';
  };

  if (e.code == 'ArrowRight') {
    mouse.style.left = mouse.getBoundingClientRect().left + mouse.offsetWidth + 'px';
  };

  if (e.code == 'ArrowDown') {
    mouse.style.top = mouse.getBoundingClientRect().top + mouse.offsetHeight + 'px';
  };
  
  if (e.code == 'ArrowLeft') {
    mouse.style.left = mouse.getBoundingClientRect().left - mouse.offsetWidth + 'px';
  };

});

