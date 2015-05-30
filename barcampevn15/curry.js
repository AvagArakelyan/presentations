var R = require('ramda');
var log = console.log;

//
var plain_mod = function(a, b){
  return a % b;
};

plain_mod(10,7);  //= 3

// - Currying
var mod = function(b){
  return function(a){
    return a % b;
  };
};


// Program here

var isOdd = mod(2);

isOdd(11); // = 1, which is true

// - Auto curry
var sum3 = R.curry(function(a,b,c){
  return a+b+c;
});

sum3(1,2,3);   // = 6
sum3(1,2)(3);  // = 6
sum3(1)(2,3);  // = 6
sum3(1)(2)(3); // = 6


var sum = R.curry(function(a,b){ return b+a; });

var inc = sum(-1);
var dec = sum(1);

var v = inc(7);
var v2 = dec(7);

console.log( v , v2 );









