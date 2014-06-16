/* jshint node:true */
'use strict';
var fs = require('fs');

var doTheStuff = function(){
  fs.readFile(process.argv[2], function(err, data){

    if (err){

      console.log(err);

    }
    else {

      var dataString = data.toString();
      var dataArray = dataString.split('\n');
      console.log(dataArray.length - 1);

    }
  });
};

doTheStuff();
