'use strict'

let getDateAgo = (date, days) => {
  let nowDate = Date.parse(date);

  let backDate = days * 24 * 3600 * 1000;

  let resultDay = new Date(nowDate - backDate);

  return resultDay.getDate();

};

let date = new Date(2015, 0, 2);

alert(getDateAgo(date, 1));
alert(getDateAgo(date, 2));
alert(getDateAgo(date, 365));