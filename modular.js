/* jshint node:true */
'use strict';
var fs = require('fs');
var path = require('path');

var filter = require('./module.js');
var cb = function (err, data) {
  data.forEach(function(fileName){
    console.log(fileName);
  });
};

filter(process.argv[2], process.argv[3], cb);
