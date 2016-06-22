const expect = require('chai').expect;
const romanNumerals = require('./romanNumerals');

describe('romanNumerals', () => {
    it('is a function', function() {
        expect(romanNumerals).to.be.a('function');
    });
})