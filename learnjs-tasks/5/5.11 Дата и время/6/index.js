'use strict'

let getSecondsToday = () => {
  let nowDate = new Date();

  let today = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate());
  
  let result = Math.round((nowDate - today) / 1000); 
  return result;
};

alert(getSecondsToday());
