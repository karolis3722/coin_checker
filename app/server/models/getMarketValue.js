const defaultOptions = require("../coinmarketcap/defaultOptions");
const mainList = {
    ...defaultOptions.defaultOptions,
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    qs: {
      'start': '1',
      'limit': '15',
      'convert': 'USD'
    }
  };

  exports.mainList = mainList;