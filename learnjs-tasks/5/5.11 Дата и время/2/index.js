'use strict'

let getWeekDay = (date) => {
  let day = date.getDay();
  let nameOfDay = '';
  
  switch (day) {
    case 0:
      nameOfDay = 'ВС';
      break;
    case 1:
      nameOfDay = 'ПН';
      break;
    case 2:
      nameOfDay = 'ВТ';
      break;
    case 3:
      nameOfDay = 'СР';
      break;
    case 4:
      nameOfDay = 'ЧТ';
      break;
    case 5:
      nameOfDay = 'ПТ';
      break;
    case 6:
      nameOfDay = 'СБ';
      break;
  }
  return nameOfDay;
};

let date = new Date(2012, 0, 3);
alert(getWeekDay(date));