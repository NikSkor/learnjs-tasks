'use strict'

let currentUser = prompt('Введите логин.', '');

if (currentUser === 'Админ') {
  let password = prompt('Введите пароль.', '');
  if (password === 'Я главный') {
    alert('Здравствуйте!');
  } else if (password === '' || password === null) {
    alert('Отменено.');
  } else {
    alert('Неверный пароль.');
  }
} else if (currentUser === '' || currentUser === null) {
  alert('Отменено.');
} else {
  alert('Я Вас не знаю.');
}

