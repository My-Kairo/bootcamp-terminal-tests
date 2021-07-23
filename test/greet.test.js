let assert = require('assert');
let greet = require('../greet');

describe('greet function' , function(){
    it('should be able to greet Lindani' , function(){
        assert.equal(greet('Lindani'), 'Hello, Lindani');

    });
    it('should be able to greet Siyanda', function(){
        assert.equal('Hello, Siyanda', greet('Siyanda'));
    });
});