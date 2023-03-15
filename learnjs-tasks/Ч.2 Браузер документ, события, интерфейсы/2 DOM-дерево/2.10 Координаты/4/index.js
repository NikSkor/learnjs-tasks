'use strict'

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    left: box.left + window.pageXOffset,
  };
};

function showNote(anchor, position, html) {
  let note = document.createElement('div');
  note.className = 'note';
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
};

function positionAt(anchor, position, elem) {
  let coords = getCoords(anchor);

  if (position === 'top-out') {
    elem.style.left = coords.left + 'px';
    elem.style.top =
      coords.top - elem.offsetHeight + 'px';
  };

  if (position === 'right-out') {
    elem.style.left = coords.left + anchor.offsetWidth + 'px';
    elem.style.top = coords.top + 'px';
  };

  if (position === 'bottom-out') {
    elem.style.left = coords.left + 'px';
    elem.style.top = coords.top + anchor.offsetHeight + 'px';
  }

  if (position === 'top-in') {
    elem.style.left = coords.left + 'px';
    elem.style.top = coords.top + 'px';
  }

  if (position === 'right-in') {
    elem.style.left =
      anchorCoords.left + anchor.offsetWidth - elem.offsetWidth + 'px';
    elem.style.top = coords.top + 'px';
  }

  if (position === 'bottom-in') {
    elem.style.left = coords.left + 'px';
    elem.style.top =
      coords.top + anchor.offsetHeight - elem.offsetHeight + 'px';
  }
}




// test it
let blockquote = document.querySelector('blockquote');

showNote(blockquote, 'top-in', 'note top-in');
showNote(blockquote, 'top-out', 'note top-out');
showNote(blockquote, 'right-out', 'note right-out');
showNote(blockquote, 'bottom-in', 'note bottom-in');