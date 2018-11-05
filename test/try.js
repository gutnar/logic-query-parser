const lqp = require('../lib');

const tree = lqp.parse('!this AND NOT "that!"');

console.log(JSON.stringify(tree, null, 4));
