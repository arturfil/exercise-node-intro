// chalk

// Defining constants
const chalk = require('chalk');
const log = console.log;

// Nerds package, using Star Wards
const nerds = require('nerds');

// Superheroes package
const superheroes = require('superheroes');

// kirby-dance
const kirbyDance = require('kirby-dance')

// implementation
log(chalk.green(kirbyDance(5)));
log(chalk.red("Doing the kirby dance!"))

// implementation
var name = "Node.js!"

log(chalk.green("Hello " + name));

log(chalk.magenta("This is another text with magenta color!"));

log(superheroes.all);
