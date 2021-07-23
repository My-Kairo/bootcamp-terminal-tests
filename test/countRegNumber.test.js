let assert = require('assert');
let countRegNumber = require('../countRegNumber');

describe('countRegNumber function', function(){
    it('should count regs for Bellville', function(){
        assert.equal(countRegNumber('CY 123-223, CY 123-123'), 2);
    });
    it('should count regs for Paarl', function(){
        assert.equal(countRegNumber('CJ 8476, CJ 397'), 2)
    })
});