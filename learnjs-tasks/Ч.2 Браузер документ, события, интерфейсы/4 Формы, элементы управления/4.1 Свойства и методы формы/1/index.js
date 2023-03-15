'use strict'

let genres = document.querySelector('#genres');

let index = genres.selectedIndex;

let selected = genres.options[index];

console.log(selected.value);
console.log(selected.text);

let option = new Option('Классика', 'classic');

genres.append(option);

option.selected = 'true';