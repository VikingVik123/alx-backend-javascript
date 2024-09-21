const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber()", function() {

    it(`checking sum function`, function() {
      const ans = calculateNumber("SUM", 1, 2);
      assert.strictEqual(ans, 3);
    });
    it(`checking minus function`, function() {
      const ans = calculateNumber("SUBTRACT", 1.4, 2.2);
      assert.strictEqual(ans, -1);
    });
    it(`checking minus function`, function() {
      const ans = calculateNumber("SUBTRACT", 4.9, 2.7);
      assert.strictEqual(ans, 2);
    });
    it(`checking divide function`, function() {
      const ans = calculateNumber("DIVIDE", 4, 2);
      assert.strictEqual(ans, 2);
    });
    it(`checking divide function`, function() {
      const ans = calculateNumber("DIVIDE", 1.7, 0);
      assert.strictEqual(ans, "Error");
    });
    it(`checking divide function`, function() {
      const ans = calculateNumber("DIVIDE", 1.4, 4.6);
      assert.strictEqual(ans, 0.2);
    });
});
