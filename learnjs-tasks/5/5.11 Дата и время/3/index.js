'use strict'

let getLocalDay = (date) => {
  let day = date.getDay();
  return (day !== 0) ? day : 7;
};

let date = new Date(2012, 0, 3);
alert(getLocalDay(date)); 