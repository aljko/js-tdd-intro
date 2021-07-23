// capitalizeFirstLetters.js
const assert = require('assert');

// WRITE THE ACTUAL FUNCTION HERE
function capitalizeFirstLetters(input){
    const words = input.split(' ');
    let output = "";
    if(input.length > 1){
        words.forEach(word => {
            output = output + word[0].toUpperCase() + word.slice(1) + " "; 
        });
        output = output.substring(0, output.length-1);
    }else if(input.length = 1){
        output = input.toUpperCase();
    }else{
        output = "";
    }
    
    return output;
}

// Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');

// Check that capitalizeFirstLetters accepts one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);

// Check that capitalizeFirstLetters transforms  `i love javaScript` correctly
assert.strictEqual(capitalizeFirstLetters(`i love javascript`), `I Love Javascript`);

// Check that capitalizeFirstLetters transforms  `javaScript` correctly
assert.strictEqual(capitalizeFirstLetters(`javascript`), `Javascript`);

// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters(`j`), `J`);

// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');