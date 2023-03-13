'use strict'

function f(a) {
  console.log(a)
}

function throttle(func, ms) {
  throttle.isPause = false;
  throttle.isThis;
  throttle.args;

  function wrapper() {
    if (throttle.isPause){
      throttle.args = arguments;
      throttle.isThis = this;
      return;
    }

    func.apply(this, arguments);

    throttle.isPause = true;

    setTimeout(() => {
      throttle.isPause = false;
      if (throttle.args) {
        wrapper.apply(throttle.isThis, throttle.args);
        throttle.args = null;
        throttle.isThis = null;
      };
    }, ms);
  };
  return wrapper;
};

let f1000 = throttle(f, 1000);

f1000(1);
f1000(2);
f1000(3);