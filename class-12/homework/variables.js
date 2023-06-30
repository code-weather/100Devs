// VARIABLES

// const name = 'John';
// const admin = name;

// // alert(admin);

// // let admin, name; // can declare two variables at once

// // name = 'John';

// // admin = name;

// // alert(admin); // "John"

// let earth;
// const yaBoy = 'Jay';

// const birthday = '18.04.1982'

// const age = BIRTHDAY;

// console.log(age);

// --------------------------------------------
// Function Basics

// // Rewrite the function using '?' or '||'
// function checkAge(age) {
//   return age > 18 ? 18 : 'Did your parents allow you?'
// }

// console.log(checkAge(17));

// function checkAge(age) {
//   return age > 18 || 'Did parents allow you?'
// }

// console.log(checkAge(17));

// // Function min(a, b)
// function min(a, b) {
//   if (a < b) {
//     return a
//   } else {
//     return b
//   }
// }

// function min(a, b) {
//   return a < b ? a : b
// }

// Function pow(x,n)
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert( pow(x, n) );
}