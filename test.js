const fibonacci = require('./fibonacci')
var assert = require('chai').assert;

describe('Testing fibonacci', () => {
  it('fib(1) = 0', () => {
    assert.equal(fibonacci(1),0);
})
it('fib(2) = 1', () => {
    assert.equal(fibonacci(2),1);
})
it('fib(5) = 3', () => {
    assert.equal(fibonacci(5),3);
})


});
