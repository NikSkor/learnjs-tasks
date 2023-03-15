'use strict'

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    left: box.left + window.pageXOffset,
  };
}

function positionAt(anchor, position, elem) {
  let coords = getCoords(anchor);

  if (position === 'top') {
    elem.style.left = coords.left + 'px';
    elem.style.top =
      coords.top - elem.offsetHeight + 'px';
  };

  if (position === 'right') {
    elem.style.left = coords.left + anchor.offsetWidth + 'px';
    elem.style.top = coords.top + 'px';
  };

  if (position === 'bottom') {
    elem.style.left = coords.left + 'px';
    elem.style.top = coords.top + anchor.offsetHeight + 'px';
  }
}


function showNote(anchor, position, html) {
  let note = document.createElement('div');
  note.className = 'note';
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}

// test it
let blockquote = document.querySelector('blockquote');

showNote(blockquote, 'top', 'note above');
showNote(blockquote, 'right', 'note at the right');
showNote(blockquote, 'bottom', 'note below');