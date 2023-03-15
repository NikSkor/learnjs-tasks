'use strict'
let clock = document.querySelector('.clock');
let hour = document.querySelector('.hour');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');
let timerId;


let clockUpdate = () => {
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hour.innerHTML = viewTransfer(hours);
  min.innerHTML = viewTransfer(minutes);
  sec.innerHTML = viewTransfer(seconds);
};

let viewTransfer = (prop) => {
  if (prop < 10) prop = '0' + prop;
  return prop;
};

let clockStart = () => {
  timerId = setInterval(clockUpdate, 1000);
  clockUpdate();
};

let clockStop = () => {
  clearInterval(timerId);
  timerId = '';
};