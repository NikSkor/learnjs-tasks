'use strict'

async function getUsers(names) {
  let users = [];
  // let url = 'https://api.github.com/users/USERNAME';

  for (let name of names) { 
    let response = await fetch(`https://api.github.com/users/${name}`);
    let result;

    if (response.ok) {
      result = await response.json();
    } else {
      result = null;
    }
    users.push(result);
  }
  return users;
}
