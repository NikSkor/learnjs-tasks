'use strict'
let view = document.getElementById('view');
view.tabIndex = 0;

let textArea = document.createElement('textarea');
textArea.className = 'edit';
textArea.tabIndex = 0;

view.addEventListener('focus', ()=> {
  textArea.value = view.innerHTML;
  view.replaceWith(textArea);
});

textArea.addEventListener('blur', () => {
  view.innerHTML = textArea.value;
  textArea.replaceWith(view);
});

textArea.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    textArea.blur();
  }
});