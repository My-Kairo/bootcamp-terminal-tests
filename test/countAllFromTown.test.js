let assert = require('assert');
let countAllFromTown = require('../countAllFromTown');

describe('countAllFromTown function', function(){
    it('should count total number of registration from the town', function(){//passes two parameters
        assert.equal(countAllFromTown('CA 67788, CK 56412', 'CA'),1)
    })
    it('should display total regs from town', function(){
        assert.equal(countAllFromTown('CA 3464, CY 78996, CJ 12345, CY 988', 'CY'), 2)//it passes two parameters
    })
})