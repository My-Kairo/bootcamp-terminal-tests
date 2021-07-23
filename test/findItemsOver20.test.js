let assert = require('assert');
let findItemsOver20 = require('../findItemsOver20')

describe('findItemsOver20', function () {
    it('should return all products greater than 20 in quantity', function () {
        assert.deepEqual(findItemsOver20([
            { "name": "pears", "qty": 37 }, { "name": "bananas", "qty": 5 }]),
            [{ "name": "pears", "qty": 37 }]);
    });
    it('should display all the products greater than 20', function () {
        assert.deepEqual(findItemsOver20([
            { "name": "cheese", "qty": 60 }, { "name": "bread", "qty": 1 }]),
            [{ "name": "cheese", "qty": 60 }]);
    });
});