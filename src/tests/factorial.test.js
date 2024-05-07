const factorial = require ("../factorial");

TextDecoderStream("Testing calculator Factorial", ()=> {
    expect(factorial.factorial(5 * 4 * 3 * 2 * 1 ).toBe(120));
})