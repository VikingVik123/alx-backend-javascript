const { expect } = require("chai");
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber()", function() {

    describe("SUM", function() {
        it("should return 3 when adding 1 and 2", function() {
            expect(calculateNumber("SUM", 1, 2)).to.equal(3);
        });

        it("should return 7 when adding 1.2 and 2.3", function() {
            expect(calculateNumber("SUM", 1.2, 2.3)).to.equal(3);
        });

        it("should handle negative numbers correctly", function() {
            expect(calculateNumber("SUM", -1.5, -2.5)).to.equal(-4);
        });
    });

    describe("SUBTRACT", function() {
        it("should return -4 when subtracting 5 from 1.4 and 4.5", function() {
            expect(calculateNumber("SUBTRACT", 1.4, 4.5)).to.equal(-4);
        });

        it("should return 2 when subtracting 2.3 from 4.5", function() {
            expect(calculateNumber("SUBTRACT", 4.5, 2.3)).to.equal(2);
        });

        it("should handle negative results correctly", function() {
            expect(calculateNumber("SUBTRACT", 1.4, 2.2)).to.equal(-1);
        });
    });

    describe("DIVIDE", function() {
        it("should return 0.2 when dividing 1.4 by 4.5", function() {
            expect(calculateNumber("DIVIDE", 1.4, 4.5)).to.equal(0.2);
        });

        it("should return 'Error' when dividing by 0", function() {
            expect(calculateNumber("DIVIDE", 1.7, 0)).to.equal('Error');
        });

        it("should handle division correctly with rounded numbers", function() {
            expect(calculateNumber("DIVIDE", 5.5, 2.3)).to.equal(3); // 6 / 2 = 3
        });
    });

    describe("Invalid Type", function() {
        it("should throw an error for invalid operation type", function() {
            expect(() => calculateNumber("MULTIPLY", 2, 3)).to.throw("Invalid type: MULTIPLY");
        });
    });

});
