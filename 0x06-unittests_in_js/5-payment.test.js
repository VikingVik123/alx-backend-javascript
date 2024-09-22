const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToAPI = require('./5-payment');

describe('Payment API', function () {
  let consoleLogSpy;

  beforeEach(function () {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    consoleLogSpy.restore();
  });

  it('should log the total as 120 when called with 100 and 20', function () {
    sinon.stub(Utils, 'calculateNumber').returns(120);

    sendPaymentRequestToAPI(100, 20);
    sinon.assert.calledOnce(consoleLogSpy);
    sinon.assert.calledWith(consoleLogSpy, 'The total is: 120');

    Utils.calculateNumber.restore();
  });

  it('should log the total as 20 when called with 10 and 10', function () {
    sinon.stub(Utils, 'calculateNumber').returns(20);

    sendPaymentRequestToAPI(10, 10);
    sinon.assert.calledOnce(consoleLogSpy);
    sinon.assert.calledWith(consoleLogSpy, 'The total is: 20');

    Utils.calculateNumber.restore();
  });
});
