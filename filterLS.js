/* jshint node:true */
'use strict';
var fs = require('fs');
var path = require('path');

var filter = function(dir, fileType){
  var result;
  fs.readdir(dir, function(err, content){
    if (err) {throw err;}

    content.forEach(function(file){
      if (path.extname(file) === ('.' + fileType)){
        console.log(file);
      }
    });
  });
};

var cb = function(err, list){

};

filter(process.argv[2], process.argv[3]);
