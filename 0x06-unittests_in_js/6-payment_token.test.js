const { expect } = require('chai');
const getPaymentTokenFromAPI = require("./6-payment_token");

describe('getPaymentTokenFromAPI', function () {
  it('should return a successful response when success is true', function (done) {
    getPaymentTokenFromAPI(true)
      .then(response => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch(err => {
        done(err);
      });
  });

  it('should do nothing when success is false', function (done) {
    getPaymentTokenFromAPI(false)
      .then(response => {
        expect(response).to.be.undefined;
        done();
      })
      .catch(err => {
        done(err);
      });
  });
});

