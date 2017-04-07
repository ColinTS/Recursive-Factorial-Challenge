 /*jshint esversion: 6*/

 const chai = require('chai');
 const expect = chai.expect;

 const factorial = require('../factorial.js');

  describe('factorial function', () => {

    it('should be a function', () => {
      expect(factorial).to.be.a('function');
    });

    it('should return a factorial value', () => {
      expect(factorial(4)).to.equal(24);
    });

  });