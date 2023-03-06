'use strict'

function checkAge(age) {

  return (age > 18) ? true : confirm('Родители разрешили?');

}

checkAge(15);

function checkAge2(age) {
  return (age > 18) || confirm('Родители разрешили?');
}

checkAge2(7);
