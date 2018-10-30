# Logic Query Parser
Generate binary tree with a logic query string as input.

# How to install?
```
npm install
```

Check everything is working with `npm test`.

# How to use it

This lib provides a function parser whick take an optional options object and a string parameter, then returning a binary tree.
As binary trees are not easy to use, this lib also provides an utility function which convert said binaryTree to a more usable query form

Avalaible options are for now :
* `spaces` : String / array containing all spaces characters. Default : " \n\t"
* `defaultOperator` : Default operator to use between two strings. Default : 'and'

Available operators for now : AND, OR, parens, double quote

This extended version adds the NOT (alias !) operator as well as comparison operators:
* < (lt - lower than)
* <= (lte - lower than or equal)
* \> (gt - greater than)
* \>= (gte - greater than or equal)
* = (e - is equal)
* != (ne - is not equal)

# Example

```js
var parser = require('logic-query-parser');

var binaryTree = parser.parse('hello AND welcome');
```

The binaryTree for this example will be :
```js
{
  lexeme: { 
    type: 'and'
  },
  left: {
    lexeme: {
      type: 'string',
      value: 'hello'
    },
    left: null,
    right: null
  },
  right: {
    lexeme: {
      type: 'string',
      value: 'welcome'
    },
    left: null,
    right: null
  }
}
```

Another example, slightly more complex:

```js
var parser = require('logic-query-parser');

var binaryTree = parser.parse('(welcome OR bye) AND (hello OR ahoy)');
```

And the binary tree :
```js
{
  lexeme: {
    type: "and"
  },
  left: {
    lexeme: {
      type: "or"
    },
    left: {
      lexeme: {
        type: "string",
        value: "welcome"
      },
      left: null,
      right: null
    },
    right: {
      lexeme: {
        type: "string",
        value: "bye"
      },
      left: null,
      right: null
    }
  },
  right: {
    lexeme: {
      type: "or"
    },
    left: {
      lexeme: {
        type: "string",
        value: "hello"
      },
      left: null,
      right: null
    },
    right: {
      lexeme: {
        type: "string",
        value: "ahoy"
      },
      left: null,
      right: null
    }
  }
}
```

NOT operator and comparison example:

```js
var parser = require('logic-query-parser');

var binaryTree = parser.parse('a > 1 and not b <= 10');
```

The binary tree will be:
```js
{
    "lexeme": {
        "type": "and"
    },
    "left": {
        "lexeme": {
            "type": "gt"
        },
        "left": {
            "lexeme": {
                "type": "string",
                "value": "a"
            },
            "left": null,
            "right": null
        },
        "right": {
            "lexeme": {
                "type": "string",
                "value": "1"
            },
            "left": null,
            "right": null
        }
    },
    "right": {
        "lexeme": {
            "type": "not"
        },
        "left": null,
        "right": {
            "lexeme": {
                "type": "lte"
            },
            "left": {
                "lexeme": {
                    "type": "string",
                    "value": "b"
                },
                "left": null,
                "right": null
            },
            "right": {
                "lexeme": {
                    "type": "string",
                    "value": "10"
                },
                "left": null,
                "right": null
            }
        }
    }
}
```

As said before, trees are useful but not easy to use. You can also get the "query form":

```js
var parser = require('logic-query-parser');

var binaryTree = parser.parse('(welcome OR bye) AND (hello OR ahoy)');
var query = parser.utils.binaryTreeToQueryJson(binaryTree);
```

Returning:
```js
{
  type: "and",
  values: [
    {
      type: "or",
      values: [
        {
          type: "string",
          value: "welcome"
        },
        {
          type: "string",
          value: "bye"
        }
      ]
    },
    {
      type: "or",
      values: [
        {
          type: "string",
          value: "hello"
        },
        {
          type: "string",
          value: "ahoy"
        }
      ]
    }
  ]
}
```


Take a look at `config/tests.js` for more samples
