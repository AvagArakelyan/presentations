var R = require('ramda');

// Functors

// map(func,[x]) => [func(x)]
// map(func,Array(x)) => Array(func(x))
//

var fmap = R.curry(function(mapper, mappable){
  return mappable.map(mapper);
});

function Maybe(value){
  if( !(this instanceof Maybe) ){
    return new Maybe(value);
  }

  this.value = value;
}

Maybe.prototype.map = function(mapper){
  return this.value ? Maybe( mapper(this.value) ) : Maybe(this.value);
};
Maybe.prototype.valueOf = function(){
  return this.value;
};




var Either = R.curry(function(left,right){
  if( !(this instanceof Either) ){
    return new Either(left,right);
  }

  this.left = left;
  this.right = right;
});

Either.prototype.map = function(mapper){
  return this.right ?
        Either( this.left, mapper(this.right) ) :
        Either( mapper(this.left), null );
};
Either.prototype.valueOf = function(){
  return this.right ? this.right : this.left;
};

exports.fmap = fmap;
exports.Maybe = Maybe;
exports.Either = Either;





