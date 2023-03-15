'use strict'

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

let printRevList = (list) => {
  let n = list;
  let listArr = [];

  while (n != null) {
    listArr.push(n.value)
    n = n.next;
  }

  listArr.reverse();

  for (const elem of listArr) {
    alert(elem);
  }
};

printRevList(list);

let printRevListRec = (list) => {
  
  list.next != null && printRevListRec(list.next);

  alert(list.value);
};

printRevListRec(list);