'use strict'

let table = document.querySelector('table');
let tBody = table.querySelector('tbody');
let allTr = tBody.querySelectorAll('tr');

let sortArr = Array.from(allTr);

sortArr.sort((a, b) => a.cells[0].innerHTML > b.cells[0].innerHTML ? 1 : -1);

tBody.append(...sortArr);

