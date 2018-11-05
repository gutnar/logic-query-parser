const lqp = require('../lib');

const tree = lqp.parse('!this and not "that!"');

console.log(JSON.stringify(tree, null, 4));
