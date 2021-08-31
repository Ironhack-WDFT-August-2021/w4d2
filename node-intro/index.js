console.log('hello node');
// console.log(document); //  -> this does not work
// console.log(process.platform);

const chalk = require('chalk');

// console.log(chalk)


console.log(chalk.red('Hello world!'));

// this is node internal package (module) we don't need to install it
// but we need to require it
const crypto = require('crypto');
const randomString = crypto.randomBytes(64).toString('Hex');
// console.log(randomString)

// run npm init -y
// go to : https://github.com/sindresorhus/awesome-nodejs#weird
// choose a package
// install it 
// run it
const supervillains = require('supervillains');

//=> ['Abattoir', 'Able Crown', …]

const randomVillain = supervillains.random();
// console.log(randomVillain);

// we have access to these variables
// console.log(__dirname);
// console.log(__filename);

// import the add function from add.js
const addNumbers = require('./add');
const sum = addNumbers(3, 5);
// console.log(sum)

// import the object from functions.js - here we import the whole object
const functions = require('./functions');
console.log(functions);

// here we use object destructuring to choose what we need
const { greetFunction, goodByeFunction } = require('./functions')

console.log(greetFunction())

// console.log(functions.greetFunction())