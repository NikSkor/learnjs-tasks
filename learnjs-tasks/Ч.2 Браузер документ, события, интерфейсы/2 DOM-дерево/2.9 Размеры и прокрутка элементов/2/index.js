'use strict'
let ball = document.querySelector('#ball');
let field = document.querySelector('#field');


let ballPosY = Math.round(field.clientHeight/2 - ball.offsetHeight/2);
let ballPosX = Math.round(field.clientWidth/2 - ball.offsetWidth/2);
ball.style.top = `${ballPosY}px`;
ball.style.left = `${ballPosX}px`;