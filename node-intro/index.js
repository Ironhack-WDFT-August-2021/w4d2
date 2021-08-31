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



// read and write from and to the file system
// require the filesystem module
const fs = require('fs');

// read content from a file (filename, character ecoding);
// fs.readFile('example.txt', 'utf-8', (err, data) => {
// 	if (err) {
// 		console.log(err);
// 	}
// 	const content = data;
// 	console.log(content);
// 	// write the content to a txt file - if the file does not exist
// 	// it is created
// 	fs.writeFileSync('newFile.txt', data);
// });

// passing in a parameter to the terminal command - we can 
// access it via process.argv
const param = process.argv.slice(2)[0];
// deleting a file using unlink
if (param === 'delete') fs.unlinkSync('./newFile.txt');