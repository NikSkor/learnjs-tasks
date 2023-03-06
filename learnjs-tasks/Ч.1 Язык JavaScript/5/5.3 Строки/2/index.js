'use strict'

let checkSpam = (str) => {
  let checkStr = str.toLowerCase();

  return checkStr.includes('viagra') || checkStr.includes('xxx');

};

alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam('innocent rabbit'));