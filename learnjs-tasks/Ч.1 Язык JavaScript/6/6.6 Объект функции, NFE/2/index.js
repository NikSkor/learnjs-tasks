'use strict'

function sum(a){

  let result = a;

	function resSum(b) {
    result += b;
    return resSum;
  }

  resSum.toString = () => {
    return result;
  }

  return resSum;
};

alert(sum(1)(2));
alert(sum(5)(-1)(2) );
alert(sum(6)(-1)(-2)(-3));
alert(sum(0)(1)(2)(3)(4)(5));