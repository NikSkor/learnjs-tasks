'use strict'

function work(a, b) {
  alert(a + b);
}

function spy(func) {

  function spyWrapper(...args) {
    spyWrapper.calls.push(args);
    return func.apply(this, args);
  };

  spyWrapper.calls = [];


  return spyWrapper;
};

work = spy(work);

work(1, 2);
work(4, 5);

for (let args of work.calls) {
  alert('call:' + args.join());
}