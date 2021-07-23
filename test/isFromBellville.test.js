let assert = require('assert');
let isFromBellville = require('../isFromBellville');

describe('isFromBellvile function', function(){
    it('should return true for Bellville regs CY 123-223', function(){
        assert.equal(isFromBellville("CY 345"), true);
    })
     it('should return false for other registrations', function(){
         assert.equal(isFromBellville("CA 6543"), false);
     })
})
