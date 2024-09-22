const getPaymentTokenFromAPI = (success) => {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Status code : 200, Successful response from the API' });
    }
  });
};

module.exports = getPaymentTokenFromAPI;
