let assert = require('assert');
let totalPhoneBill = require('../totalPhoneBill');

describe('totalPhoneBill function', function(){
    it('should calculate total phone bill for sms', function(){
        assert.equal(totalPhoneBill('sms'), 'R0.65')
    })
    it('should calculate total phone bill for calls', function(){
        assert.equal(totalPhoneBill('calls'), 'R0.00')
    })
})