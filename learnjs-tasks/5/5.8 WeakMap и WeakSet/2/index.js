'use strict'

let messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' },
];

let timeCache = new WeakMap();
timeCache.set(messages[0], new Date(2023, 2, 5));
timeCache.set(messages[1], new Date(2023, 3, 5));

alert(timeCache.get(messages[1]));
alert(timeCache.get(messages[0]));

messages.splice(1, 1);
alert(timeCache.get(messages[1]));


