var R = require('ramda');
var typeclass = require('./typeclass')

var map = R.map,
  prop = R.prop,
  add = R.add,
  sort = R.sort,
  reduce = R.reduce,
  compose = R.compose,
  concat = R.concat;

var fmap = typeclass.fmap,
    Maybe = typeclass.Maybe,
    Either = typeclass.Either;


// Program here

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
      },{
        name:'A',
        amount: null
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
//To make getting property of nullable object more safe, we need to wrap it by Maybe functor
//var amount = compose(fmap(prop('amount'),Maybe);

var addCurrency = concat("$");

var totalAmount = compose( reduce(add,0), map(amount) );
var totalInvestment = compose( addCurrency, totalAmount, investor );

var investments = map(totalInvestment)(data);

//=> [ '$2500000', '$3000000' ]

var names = map(prop('name'))(null);
//=> [ 'Project A', 'Project B' ]
//
console.log( names, investments );

