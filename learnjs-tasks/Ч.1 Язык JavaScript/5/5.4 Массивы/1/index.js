'use strict'

let styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-ролл');
console.log('styles: ', styles);

let findMiddlePoint = (arr) => {
  if (arr.length === 0) return 0;

  return Math.round((arr.length - 1) / 2);
}

styles[findMiddlePoint(styles)] = 'Классика';
console.log('styles: ', styles);

alert(styles.shift());

styles.unshift('Рэп', 'Регги');
console.log('styles: ', styles);


