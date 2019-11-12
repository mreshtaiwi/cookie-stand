'use strict';
// eslint-disable-next-line no-unused-vars
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var total = 0;

var seattle = {
  custoerMinNumber:23,
  customerMaxNumber:65,
  averageHours:6.3,
  sales:function(){
    var result = [];
    var randomcustomers =  (Math.floor(Math.random() * 42) + 23) / 14;
    var randomcookies =  Math.floor(Math.random() * 6.3) + 1;
    var salesperhour = (randomcustomers * randomcookies).toFixed();

    result = [randomcustomers,randomcookies,salesperhour];
    return result;
  },
};
var elemnts = ['am6','am7','am8','am9','am10','am11','pm12','pm1','pm2','pm3','pm4','pm5','pm6','pm7'];
var datas = [];

//var total += seattle.sales()[2];

for (var i = 0; i < elemnts.length; i++) {
  datas[i] =  document.getElementById(elemnts[i]);
}
for (var j = 0; j < hours.length; j++) {
  console.log('before' + seattle.sales()[2]);
  document.getElementById(elemnts[j]).innerHTML = hours[j] + ': ' + seattle.sales()[2] + ' cookies';
  ///console.log(total);
  total += parseInt(seattle.sales()[2]);
  console.log(seattle.sales()[2]);
}
document.getElementById('total').innerHTML = 'Total: ' + total  + ' cookies';
