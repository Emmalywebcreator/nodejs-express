//Modules in Nodejs
const names = require("./names");
const sayHi = require("./utils");
const data = require("./alternativeStyle");
console.log(data);

sayHi(names.firstPerson);
sayHi(names.secondPerson);
sayHi("John");
sayHi();

require('./sum')