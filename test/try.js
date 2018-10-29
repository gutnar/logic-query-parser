const lqp = require('../lib');

const tree = lqp.parse('SCORE > 20 and not (SCORE = 50 or SCORE = 75)');

console.log(JSON.stringify(tree, null, 4));
