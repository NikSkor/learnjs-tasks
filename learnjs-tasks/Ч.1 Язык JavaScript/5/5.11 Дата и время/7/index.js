'use strict'

let getSecondsToTomorrow = () => {
  let nowDate = new Date();

  let tomorrow = new Date(
    nowDate.getFullYear(),
    nowDate.getMonth(),
    nowDate.getDate() + 1
  );

  let result = Math.round((tomorrow - nowDate) / 1000);
  return result;
};

alert(getSecondsToTomorrow());


