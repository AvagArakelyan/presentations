var data = [
  {
    name:'Project A',
    investors:[
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
    investors:[
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

var investments = [];
data.forEach(function(project){
  var total = 0;
  project.investors.forEach(function(investor){
    total += investor.amount;
  });
  investments.push('$'+total);
});

console.log(investments);






















// TODO:

var investments = data.map(function(project){
  var total = project.investors.reduce(function(acc,investor){
    return acc + investor.amount;
  },0);

  return '$'+total;
});

console.log(investments);
