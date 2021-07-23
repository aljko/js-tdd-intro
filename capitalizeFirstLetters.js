// capitalizeFirstLetters.js
const assert = require('assert');
const { lstat } = require('fs');

// WRITE THE ACTUAL FUNCTION HERE

// Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');

// Check that capitalizeFirstLetters accepts one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);

// Check that capitalizeFirstLetters transforms  `i love javaScript` correctly
assert.strictEqual(capitalizeFirstLetters(`ì love javascript`), `I Love Javascript`);

// Check that capitalizeFirstLetters transforms  `javaScript` correctly
assert.strictEqual(capitalizeFirstLetters(`javascript`), `Javascript`);

// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters(`j`), `J`);

// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');