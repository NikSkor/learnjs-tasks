'use strict'

let coverScreen = () => {
  let cover = document.createElement('div');
  cover.id = 'cover-div';

  document.body.style.overflowY = 'hidden';

  document.body.prepend(cover);
};

let unCoverScreen = () => {
  let cover = document.getElementById('cover-div');
  if(cover) cover.remove();

  document.body.style.overflowY = '';
};

let showPrompt = (html, callback) => {
  coverScreen();

  let modal = document.getElementById('prompt-form-container');

  let form = document.getElementById('prompt-form');

  let message = document.getElementById('prompt-message');
  message.innerHTML = html;

  form.text.value = '';

  let funcDone = (result) => {
    unCoverScreen();
    modal.style.display = 'none';
    callback(result);
  };

  form.onsubmit = ()=> {
    let result = form.text.value;
    if (result == '') return false;

    funcDone(result);

    return false;
  };

  form.cancel.onclick = ()=> {
    funcDone(null);
  };

  document.onkeydown = (e)=> {
    if (e.key === 'Escape') {
      funcDone(null);
    }
  };

  let lastElem = form.elements[form.elements.length - 1];
  let firstElem = form.elements[0];

  lastElem.onkeydown = (e) => {
    if (e.key == 'Tab' && !e.shiftKey) {
      firstElem.focus();
      return false;
    }
  };

  firstElem.onkeydown = (e) =>      {
    if (e.key == 'Tab' && e.shiftKey) {
      lastElem.focus();
      return false;
    }
  };

  modal.style.display = 'block';

  form.text.focus();

};

let showBtn = document.getElementById('show-button');


showBtn.addEventListener('click', ()=> {
  showPrompt('Что поём?', (res)=> alert('Вы ввели: ' + res));
});