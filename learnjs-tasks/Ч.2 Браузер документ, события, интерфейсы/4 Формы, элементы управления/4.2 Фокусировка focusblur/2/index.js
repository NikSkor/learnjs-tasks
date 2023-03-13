'use strict'

let table = document.getElementById('bagua-table');
let isOneTextArea = true;

table.addEventListener('click', (e)=> {
  if (!isOneTextArea) return;

  let target = e.target.closest('td');
  if(!target) return;
  if (!table.contains(target)) return;

  let textArea = document.createElement('textarea');
  textArea.className = 'edit';
  textArea.style.resize = 'none';
  textArea.tabIndex = 0;

  textArea.style.width = target.clientWidth + 'px';
  textArea.style.height = target.clientHeight + 'px';

  let control = document.createElement('div');
  control.className = 'control';

  let btnOk = document.createElement('button');
  btnOk.className ='ok';
  btnOk.innerHTML = 'OK';

  let btnCancel = document.createElement('button');
  btnCancel.className = 'cancel';
  btnCancel.innerHTML = 'Отмена';

  control.append(btnOk);
  control.append(btnCancel);

  textArea.value = target.innerHTML;
  let originalText = target.innerHTML;
  target.innerHTML = '';
  target.append(textArea);
  textArea.focus();

  target.append(control);

  isOneTextArea = false;

  btnOk.addEventListener('click', ()=> {
    target.innerHTML = textArea.value;
    textArea.remove();
    btnOk.remove();
    btnCancel.remove();
    isOneTextArea = true;
  });

  btnCancel.addEventListener('click', ()=> {
    target.innerHTML = originalText;
    textArea.remove();
    btnOk.remove();
    btnCancel.remove();
    isOneTextArea = true;
  });
});
