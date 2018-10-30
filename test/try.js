const lqp = require('../lib');

const tree = lqp.parse('a != 1 and not b <= 10');

console.log(JSON.stringify(tree, null, 4));
