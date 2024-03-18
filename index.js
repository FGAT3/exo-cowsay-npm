const sayMyName = require('./information.js');
const cowsay = require('cowsay');
const sayIt = `My name is ${sayMyName.names} and my campus is ${sayMyName.campus}`;

console.log(cowsay.say({text: sayIt}));
// console.log(cowsay.say({sayMyName}));