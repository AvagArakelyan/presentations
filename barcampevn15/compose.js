var R = require('ramda');


var map = R.map,
  prop = R.prop,
  add = R.add,
  sort = R.sort,
  reduce = R.reduce,
  compose = R.compose,
  concat = R.concat;

// f ∘ g
// Associative ->   f ∘ (g ∘ h) = (f ∘ g) ∘ h
// compose(f,compose(g,h)) = compose(compose(f,g),h) = compose(f,g,h);

var plain_compose = function(f, g){
  return function(){
    f.call(this, g.apply(this, arguments));
  };
};

var double = function(x) { return x * 2; };
var square = function(x) { return x * x; };
var squareThenDouble = compose(double, square);
squareThenDouble(5); //≅ double(square(5)) => 50

var summy = compose( reduce(add,0), map(squareThenDouble) );
summy([1,2]);



















var data = [
  {
    name:'Project A',
    investor:[
      {
        name: 'Microsoft',
        amount: 800000,
      },{
        name: 'Twitter',
        amount: 1200000
      },{
        name: 'Google',
        amount: 500000
      }
    ]
  },
  {
    name:'Project B',
    investor:[
      {
        name: 'Microsoft',
        amount: 1000000
      }, {
        name: 'Facebook',
        amount: 2000000
      }
    ]
  }
];

var investor = prop('investor');
var amount = prop('amount');
var addCurrency = concat("$");

var totalAmount = compose( reduce(add,0), map(amount) );
var totalInvestment = compose( addCurrency, totalAmount, investor );

var investments = map(totalInvestment)(data);
//=> [ '$2500000', '$3000000' ]

var names = map(prop('name'))(data);
//=> [ 'Project A', 'Project B' ]
//
//console.log( names, investments );


