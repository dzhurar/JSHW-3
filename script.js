'use strict'
// 1
const result = 5 + 5 + '5';
console.log(typeof result);


// 2
const email = 'romadzhura8822@gmail.com';
console.log(email.includes('@'));
console.log(email.length);


// 3
const wordOne = 'My';
const wordTwo = 'name';
const wordThree = 'is';
const fullName = `${wordOne} ${wordTwo} ${wordThree} Viktor`
console.log(fullName);


// 4
const userName = 'babapunk';
const payment = 400;
alert(`<<Дякуємо, ${userName}! До сплати ${payment} гривень.>>`);