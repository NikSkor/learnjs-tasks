'use strict'

let field = document.querySelector('#field');
let ball = document.querySelector('#ball');

field.addEventListener('click', (event)=>{
  let coords = field.getBoundingClientRect();

  let ballPosX = Math.round(
    event.clientX - coords.left - field.clientLeft - ball.clientWidth / 2
  );
  let ballPosY = Math.round(
    event.clientY - coords.top - field.clientTop - ball.clientHeight / 2
  );

  if (ballPosY < 0) ballPosY = 0;
  if(ballPosX < 0) ballPosX = 0;

  if(ballPosX + ball.clientWidth > field.clientWidth) {
    ballPosX = field.clientWidth - ball.clientWidth;
  }

  if(ballPosY + ball.clientHeight > field.clientHeight) {
    ballPosY = field.clientHeight - ball.clientHeight;
  }

  ball.style.top = `${ballPosY}px`;
  ball.style.left = `${ballPosX}px`;

});



