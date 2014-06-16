/* jshint node:true */
'use strict';
var fs = require('fs');

var stuff = fs.readFileSync(process.argv[2]);
stuff = stuff.toString();
var stuffArray = stuff.split('\n');
console.log(stuffArray.length - 1);
