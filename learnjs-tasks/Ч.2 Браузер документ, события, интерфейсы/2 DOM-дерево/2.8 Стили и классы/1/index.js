'use strict'

let body = document.body;

function showNotification({ top = 0, right = 0, className, html }) {
  let div = document.createElement('div');
  div.className = 'notification';

  div.style.top = top + 'px';
  div.style.right = right + 'px';

  div.classList.toggle(className);

  div.innerHTML = html;

  setTimeout(() => div.remove(), 1500);

  body.prepend(div);
}

let i = 1;
setInterval(() => {
  showNotification({
    top: 10,
    right: 10,
    html: 'Hello ' + i++,
    className: 'welcome',
  });
}, 2000);
