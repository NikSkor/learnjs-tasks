'use strict'

let aclean = (arr) => {
  let map = new Map();

  for (let item of arr) {
    let sortedArray = item.toLowerCase().split('').sort().join('');
    map.set(sortedArray, item);
  }
  return Array.from(map.values());
};

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

console.log(aclean(arr));
alert(aclean(arr));
