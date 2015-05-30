var R = require('ramda');

var log = console.log;
var map = R.map;

function binary(x){
  return x.toString(2);
}

// program here


binary(7);  //'111'


R.map(binary,[7,8]);  //['111','1000']

