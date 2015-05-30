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

var investments = [],
    i,j,
    project,investor,
    total;

for(i = 0; i !== data.length; ++i){
  project = data[i];
  total = 0;

  for(j = 0; j !== project.investors.length; ++j){
    investor = project.investors[j];

    total += investor.amount;
  }
  investments.push('$'+total);
}

console.log(investments);

