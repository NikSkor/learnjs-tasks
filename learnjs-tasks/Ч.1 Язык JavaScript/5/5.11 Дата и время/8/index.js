'use strict'

let formatDate = (date) => {
  let timeDifferense = new Date() - date;

  let year =
    String(date.getFullYear()).at(-2) + String(date.getFullYear()).at(-1);
  let month =
    (date.getMonth() > 8) ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  let day =
    (date.getDate() > 9) ? date.getDate() : `0${date.getDate()}`;
  let hour = 
    (date.getHours() > 9) ? date.getHours() : `0${date.getHours()}`;
  let minute = 
    (date.getMinutes() > 9) ? date.getMinutes() : `0${date.getMinutes()}`;
  if (timeDifferense < 1000) return 'прямо сейчас';

  let secDifferense = Math.round(timeDifferense / 1000);

  if (secDifferense < 60) return `${secDifferense} сек. назад`;

  let minDifferense = Math.round(secDifferense / 60);

  if (minDifferense < 60) return `${minDifferense} мин. назад`;

  let normalDate = `${day}.${month}.${year} ${hour}:${minute}`;
  return normalDate;
};

alert(formatDate(new Date(new Date() - 1)));

alert(formatDate(new Date(new Date() - 30 * 1000))); 

alert(formatDate(new Date(new Date() - 5 * 60 * 1000)));

alert(formatDate(new Date(new Date() - 86400 * 1000)));
