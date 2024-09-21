const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');
const assert = require('assert');

describe('sendPaymentRequestToApi', function () {
    let consoleSpy, calculateNumberStub;

    beforeEach(function () {
        calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        consoleSpy = sinon.spy(console, 'log');
    });
    afterEach(function () {
        sinon.restore();
    });
    it('should call Utils.calculateNumber with "SUM", 100, and 20', function () {
        sendPaymentRequestToApi(100, 20);
        assert(calculateNumberStub.calledWith('SUM', 100, 20));
        assert(calculateNumberStub.calledOnce);
    });
    it('should log "The total is: 10"', function () {
        sendPaymentRequestToApi(100, 20);
        assert(consoleSpy.calledWith('The total is: 10'));
    });
});

