// var myLogModule = require('./log.js');
// myLogModule.info('Node.js started');
// var msg = require('./log.js');
// msg.log('Hello World');
// var person = require('./data.js')
// console.log(person.firstName+''+person.lastName)
// var msg = require('./log.js');
// msg('Hello World');
var person = require('./utility/person.js')
var person1 = new person('James', 'Bond');
console.log(person1.fullName());
