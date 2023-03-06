'use strict'

let messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' },
];

let readMessages = new WeakSet();

readMessages.add(messages[2]);
readMessages.add(messages[1]);

alert('Сообщение прочитано? ' + readMessages.has(messages[0]));
alert('Сообщение прочитано? ' + readMessages.has(messages[2]));

messages.splice(2, 1);

alert('Сообщение прочитано? ' + readMessages.has(messages[2]));
