'use strict'

let calculator = document.forms.calculator;

let calculate = () => {
  let moneyBefore = document.getElementById('money-before');
  let moneyAfter = document.getElementById('money-after');
  let afterDiagram = document.getElementById('height-after'); 

  let initial = +calculator.money.value;
  let years = calculator.months.value / 12;
  let interest = +calculator.interest.value * 0.01;

  if(initial < 0 || !initial) calculator.money.value = 0;
  if(interest < 0 || !interest) calculator.interest.value = 0;


  let result = Math.round(initial * (1 + interest) ** years);

  if(result < 0) result = 0;
  console.log('result: ', result);

  moneyBefore.innerHTML = initial;
  moneyAfter.innerHTML = result;
  

  let height = (initial === 0) ? 0 : (result / initial) * 100 + 'px';
  afterDiagram.style.height = height
};

calculator.money.addEventListener('input', calculate);
calculator.interest.addEventListener('input', calculate);
calculator.months.addEventListener('change', calculate);

calculate();