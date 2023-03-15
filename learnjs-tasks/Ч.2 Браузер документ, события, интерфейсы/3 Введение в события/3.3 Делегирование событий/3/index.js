'use strict'

let grid = document.querySelector('#grid');

let sortTable = (col, type) => {
  let tbody = grid.querySelector('tbody');

  let rowsArr = Array.from(tbody.rows);

  let sortBlock;

  if (type === 'number') {
    sortBlock = (a, b) => {
      return (a.cells[col].innerHTML - b.cells[col].innerHTML);
    };
  }

  if (type === 'string') {
    sortBlock = (a, b) => {
      return (a.cells[col].innerHTML > b.cells[col].innerHTML ? 1 : -1);
    };
  }

  rowsArr.sort(sortBlock);

  tbody.append(...rowsArr);
};

grid.addEventListener('click', (e) => {
  let target = e.target;

  if(target.tagName.toLowerCase() != 'th') return;

  console.log(target.cellIndex);

  sortTable(target.cellIndex, target.dataset.type);
});






