/* jshint node:true */
'use strict';
var fs = require('fs');
var path = require('path');

module.exports = function(dir, fileType, cb){
  var result;
  var filesArray = [];
  fs.readdir(dir, function(err, content){
    if (err) {return cb(err, null);}

    content.forEach(function(file){
      if (path.extname(file) === ('.' + fileType)){
        filesArray.push(file);
      }
    });
    cb(null, filesArray);
  });
};
