let assert = require('assert');
let isWeekday = require('../isWeekDay');

describe('isWeekday function', function(){
    it('should return true if its a weekday', function(){
        assert.equal(isWeekday('Tuesday'), true);
    });
    it ('should return false if its not weekday', function(){
        assert.equal(isWeekday('Sunday'), false)
    })
});