let assert = require('assert');
let regCheck = require('../regCheck');

describe('regCheck function', function(){
	it('should check if a registration number is for GP then return true', function(){
		assert.equal(regCheck('DV 23 NB GP', 'GP'), true)
	})
	it('should return false if the reg is not for GP ', function(){
		assert.equal(regCheck('DV 23 LP GP', 'MP'), false)
	})
})