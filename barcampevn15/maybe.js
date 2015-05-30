var R = require('ramda');
var typeclass = require('./typeclass');

var compose = R.compose;

var fmap = typeclass.fmap;
    Maybe = typeclass.Maybe;


//Sample 1
var data = 'Great title here';

var length = function(x){ return x.length; };

fmap( length, Maybe(data) ); //16

//Make generic length
var safeLength = compose( fmap(length), Maybe );
safeLength(data);


//Sample 2 - mapping on collection
var data = ['some','words','here',null,'are','missed'];

var allLengths = fmap(safeLength)(data);

//var cleanup = fmap(compose(R.prop('value'),safeLength));
//var allLengths = cleanup(data);

console.log(allLengths );
