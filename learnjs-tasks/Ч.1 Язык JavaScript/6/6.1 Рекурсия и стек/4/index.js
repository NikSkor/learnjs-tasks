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

let printList = (list) => {
  let n = list;

  while (n != null) {
    alert(n.value);
    n = n.next;
  }

};

printList(list);

let printListRec = (list) => {

  alert(list.value);

  (list.next != null) && printListRec(list.next);

};

printListRec(list);