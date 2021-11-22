var express = require('express');
var router = express.Router();
const rp = require('request-promise');
const reqOptions = require("../models/getMarketValue");

/* GET home page. */
router.get('/', function(req, res, next) {
  rp(reqOptions.mainList).then(response => {
    res.json(response);
  }).catch((err) => {
    console.log('API call error:', err.message);
  });
    
});

module.exports = router;