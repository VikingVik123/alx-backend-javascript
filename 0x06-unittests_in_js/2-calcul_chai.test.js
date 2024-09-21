const expect = require("chai").expect;
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber()", function() {

    it(`checking sum function`, function() {
      const ans = calculateNumber("SUM", 1, 2);
      expect(calculateNumber("SUM", 1, 2)).to.equal(3);
    });
    it(`checking minus function`, function() {
      const ans = calculateNumber("SUBTRACT", 1.4, 2.2);
      expect(calculateNumber("SUBTRACT", 1.4, 4.5)).to.equal(-4);
    });
    it(`checking divide function`, function() {
      const ans = calculateNumber("DIVIDE", 1.4, 4.5);
      expect(calculateNumber("DIVIDE", 1.4, 4.5)).to.equal(0.2);
    });
    it(`checking divide function`, function() {
      const ans = calculateNumber("DIVIDE", 1.7, 0);
      expect(calculateNumber("DIVIDE", 1.7, 0)).to.equal('Error');
    });
});
