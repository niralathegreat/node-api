
const done = true;

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing I built';
    resolve(workDone);
  } else {
    const why = 'Still working on something else';
    reject(why);
  }
});


/*
const baz = () => console.log('baz');
const foo = () => console.log('foo');
const zoo = () => console.log('zoo');
const start = () => {
  console.log('start');
  setImmediate(baz);
  new Promise((resolve, reject) => {
    resolve('bar');
  }).then((resolve) => {
    console.log(resolve);
    process.nextTick(zoo);
  });
  process.nextTick(foo);
};
start();

// start foo bar zoo baz
*/




/*const bar = () => console.log('bar')
const baz = () => console.log('baz')
const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)
  new Promise((resolve, reject) =>
    resolve('should be right after baz, before bar')
  ).then(resolve => console.log(resolve))
  baz()
}
foo()
*/


/*

const inquirer = require('inquirer');
const questions = [
  {
    type: 'input',
    name: 'name',
    message: "What's your name?",
  },
];

inquirer.prompt(questions).then(answers => {
  console.log(`Hi ${answers.name}!`);
});
*/

/* const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`What's your name?`, name => {
  console.log(`Hi ${name}!`);
  readline.close();
});*/


/*const ProgressBar = require('progress');

const bar = new ProgressBar(':bar', { total: 20 });
const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  }
}, 100); */

/*const oranges = ['orange', 'banana'];
const apples = [{"name" : "surya","age" : 24}];
apples.forEach(obj => {
  console.log(obj.age);
});*/



/*
const args = require('minimist')(process.argv.slice(2));
console.log(args.name); 
*/

/*const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hi!');
});
app.listen(3000, () => console.log('Server ready'));

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated');
  });
});
*/

/*process.env.USER_ID=121212; USER_KEY="foobar";
require('dotenv').config();
console.log(process.env.USER_ID);
console.log(process.env.USER_KEY);
//process.exit(1);
console.logg("hello world");
*/


/*
how to exit from node program?
process.exit(1);
REPL : Read Evaluate Print Loop, 
npm install minimist
*/