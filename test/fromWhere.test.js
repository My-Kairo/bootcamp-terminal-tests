let assert = require('assert');
let fromWhere = require('../fromWhere');

describe('fromWhere function', function(){
    it('should return Bellville if its CY', function(){
        assert.equal(fromWhere('CY 76544'), 'Bellville')
    })
    it('should return Paarl if its CJ', function(){
        assert.equal(fromWhere('CJ 6898'), 'Paarl')
    })
})