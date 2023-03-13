'use strict'

let elem = document.querySelector('#one');

let text = `<li>2</li><li>3</li>`;

elem.insertAdjacentHTML('afterend', text);