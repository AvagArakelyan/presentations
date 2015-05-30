var log = console.log;
var isOdd = function(x){ return x%2===1; }
var sum2 = function(x,y){ return x+y; }




var reduce = function(combine, array, initial){
  var i=0,
    acc,
    len = array.length ;

  acc = initial!== undefined ? initial : array[i++];

  for(; i !== len; ++i){
    acc = combine(acc, array[i]);
  }
  return acc;
};

var sum = reduce(sum2,[1,2,3]);

sum ; // 6


















//Filter
var filter = function(predicate, array){
  return reduce(function(acc,x){
    if( predicate(x) ){
      acc.push(x);
    }
    return acc;
  },array, []);
};

var odds = filter(isOdd,[1,2,3]);
odds; // = [1,3]





// Some
var some = function(predicate, array){
  return reduce(function(acc,x){
    if( predicate(x) ){
      return true;
    }
    return acc;
  },array,false);
};

var hasOdd = some(isOdd,[4,2,5]);




// Every
var every = function(predicate, array){
  return reduce(function(acc,x){
    if( !predicate(x) ){
      return false;
    }
    return acc;
  },array,true);
};

var allOdds = every(isOdd, [1,3,5]);


//TODO: Implement `map`


