const lqp = require('../lib');

const tree = lqp.parse('!this');

console.log(JSON.stringify(tree, null, 4));
