var stores = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];
// eslint-disable-next-line no-unused-vars
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var totals = [0, 0, 0, 0, 0];
var ids = ['am6', 'am7', 'am8', 'am9', 'am10', 'am11', 'pm12', 'pm1', 'pm2', 'pm3', 'pm4', 'pm5', 'pm6', 'pm7'];
var datas = [];
var results = [];

function Store(custoerMinNumber, customerMaxNumber, averageperHours) {
  this.custoerMinNumber = custoerMinNumber;
  this.customerMaxNumber = customerMaxNumber;
  this.averageperHours = averageperHours;
  this.sales = function () {
    var result = [];
    var randomcustomers = Math.floor(Math.floor(Math.random() * (this.customerMaxNumber - this.custoerMinNumber)) + this.custoerMinNumber);
    var randomcookies = Math.ceil((Math.random() * this.averageperHours) + this.averageperHours);
    var salesperhour = Math.floor(randomcustomers * randomcookies);
    result = [randomcustomers, randomcookies, salesperhour];
    results = result;
    return result;
  };
}
var seattles = new Store(23,65,6.3);
seattle();
var tokyo = new Store(3,24,1.2);
tokyos();
var dubai = new Store(11,38,3.7);
dubais();
var paris = new Store(20,38,2.3);
pariss();
var lima = new Store(2,16,4.6);
limas();

function seattle() {
  for (var Seattlei = 0; Seattlei < ids.length; Seattlei++) {
    datas[Seattlei] = document.getElementById(ids[Seattlei]);
  }
  var ul = document.createElement('ul');
  var li;
  for (var lis = 0; lis < hours.length; lis++) {
    li = document.createElement('li');
    ul.appendChild(li);
    li.classList.add('Seattle');
    li.textContent = hours[lis] + ': ' + seattles.sales()[2] + ' cookies';
    totals[0] += parseInt(results[2]);
  }
  var ulcontainers = document.getElementById('sulcontainer');
  li = document.createElement('li');
  ul.appendChild(li);
  li.classList.add('Seattle');
  li.textContent = 'Total: ' + totals[0] + ' cookies';
  ulcontainers.appendChild(ul);
  //document.getElementById('stotal').innerHTML = 'Total: ' + totals[0] + ' cookies';
  for (var Seattleh = 0; Seattleh < stores.length; Seattleh++) {
    var Seattleel = document.getElementsByClassName('storess');
    Seattleel[Seattleh].innerHTML = '<h4>' + stores[Seattleh] + '</h4>';
  }
}
function createtableheader(){
  var thetable;
  var tablerows;
  var tabledatas;
  thetable = document.createElement('table');
  thetable.classList.add('tablestyle');
  thetable.setAttribute('id', 'maintable');
  tablerows = document.createElement('tr');
  tablerows.classList.add('tablerow');
  for (var tds = 0; tds < hours.length ; tds++) {
    if(tds === 0){
      tabledatas = document.createElement('td');
      tabledatas.classList.add('tabledata');
      tabledatas.setAttribute('id','empty');
      tablerows.appendChild(tabledatas);
    }else{
      tabledatas = document.createElement('th');
      tabledatas.classList.add('tabledata');
      tablerows.appendChild(tabledatas);
    }
  }
  thetable.appendChild(tablerows);
  document.getElementById('containers').appendChild(thetable);
}
createtableheader();
/*
var thetable;
thetable = document.createElement('table');
thetable.classList.add('tablestyle');
thetable.setAttribute('id', 'maintable');

function render() {
  var tablerows;
  var tabledatas;
  for (var trs = 0; trs < (stores.length) + 1; trs++) {// create rows as number of stores
    tablerows = document.createElement('tr');
    tablerows.classList.add('tablerow');
    if(trs === 0){
      for (var tds = 0; tds < (hours.length) + 1 ; tds++) {
        if(tds === 0){
          tabledatas = document.createElement('td');
          tabledatas.classList.add('tabledata');
          tabledatas.setAttribute('id','empty');
          tablerows.appendChild(tabledatas);
        }else{
          tabledatas = document.createElement('td');
          tabledatas.classList.add('tabledata');
          tablerows.appendChild(tabledatas);
        }
      }
    }else{
      for (var tds2 = 0; tds2 < (hours.length) + 1 ; tds2++) {
        tabledatas = document.createElement('td');
        tabledatas.classList.add('tabledata');
        tablerows.appendChild(tabledatas);
      }
    }
    thetable.appendChild(tablerows);
  }
}
render();
document.getElementById('containers').appendChild(thetable);

var empty = document.getElementsByClassName('tabledata')[0];
empty.textContent = '';

for (var i = 1; i < hours.length; i++) {
  var tds = document.getElementsByClassName('tabledata')[i];
  tds.textContent = hours[i - 1];
}

var end = document.getElementsByClassName('tabledata')[14];
end.textContent = 'Location Total';
*/
// for( var firstel = 1 ; stores.length ; firstel++){

// }
//console.log(this.find('> td').eq(0).html());
// for (var rows = 0; rows < hours.length; rows++) {
//   document.getElementsByClassName('tabledata')[rows].textContent = seattles.sales()[2];
// }
// for (var i = 1; i < hours.length; i++) {// create rows as number of stores
//   var tdss = document.getElementsByClassName('tabledata')[i];
//   tablerows = document.createElement('tr');
//   tablerows.classList.add('tablerow');
//   for (var tds = 0; tds < (hours.length) + 1 ; tds++) {
//     if(tds === 0){
//       tabledatas = document.createElement('td');
//       tabledatas.classList.add('tabledata');
//       tabledatas.setAttribute('id','empty');
//       tablerows.appendChild(tabledatas);
//     }else{
//       tabledatas = document.createElement('td');
//       tabledatas.classList.add('tabledata');
//       tablerows.appendChild(tabledatas);
//     }
//   }
//   thetable.appendChild(tablerows);
// }












function tokyos() {
  for (var Seattlei = 0; Seattlei < ids.length; Seattlei++) {
    datas[Seattlei] = document.getElementById(ids[Seattlei]);
  }
  var ul = document.createElement('ul');
  var li;
  for (var lis = 0; lis < hours.length; lis++) {
    li = document.createElement('li');
    ul.appendChild(li);
    li.classList.add('Tokyo');
    li.textContent = hours[lis] + ': ' + tokyo.sales()[2] + ' cookies';
    totals[1] += parseInt(results[2]);
  }
  var ulcontainers = document.getElementById('tulcontainer');
  li = document.createElement('li');
  ul.appendChild(li);
  li.classList.add('Seattle');
  li.textContent = 'Total: ' + totals[1] + ' cookies';
  ulcontainers.appendChild(ul);
  //document.getElementById('ttotal').innerHTML = 'Total: ' + totals[1] + ' cookies';
  for (var Seattleh = 0; Seattleh < stores.length; Seattleh++) {
    var Seattleel = document.getElementsByClassName('storess');
    Seattleel[Seattleh].innerHTML = '<h4>' + stores[Seattleh] + '</h4>';
  }
}

function dubais() {
  for (var Seattlei = 0; Seattlei < ids.length; Seattlei++) {
    datas[Seattlei] = document.getElementById(ids[Seattlei]);
  }
  var ul = document.createElement('ul');
  var li;
  for (var lis = 0; lis < hours.length; lis++) {
    li = document.createElement('li');
    ul.appendChild(li);
    li.classList.add('Dubai');
    li.textContent = hours[lis] + ': ' + dubai.sales()[2] + ' cookies';
    totals[2] += parseInt(results[2]);
  }
  var ulcontainers = document.getElementById('dulcontainer');
  li = document.createElement('li');
  ul.appendChild(li);
  li.classList.add('Seattle');
  li.textContent = 'Total: ' + totals[2] + ' cookies';
  ulcontainers.appendChild(ul);
  //document.getElementById('dtotal').innerHTML = 'Total: ' + totals[2] + ' cookies';
  for (var Seattleh = 0; Seattleh < stores.length; Seattleh++) {
    var Seattleel = document.getElementsByClassName('storess');
    Seattleel[Seattleh].innerHTML = '<h4>' + stores[Seattleh] + '</h4>';
  }
}

function pariss() {
  for (var Seattlei = 0; Seattlei < ids.length; Seattlei++) {
    datas[Seattlei] = document.getElementById(ids[Seattlei]);
  }
  var ul = document.createElement('ul');
  var li;
  for (var lis = 0; lis < hours.length; lis++) {
    li = document.createElement('li');
    ul.appendChild(li);
    li.classList.add('Paris');
    li.textContent = hours[lis] + ': ' + paris.sales()[2] + ' cookies';
    totals[3] += parseInt(results[2]);
  }
  var ulcontainers = document.getElementById('pulcontainer');
  li = document.createElement('li');
  ul.appendChild(li);
  li.classList.add('Seattle');
  li.textContent = 'Total: ' + totals[3] + ' cookies';
  ulcontainers.appendChild(ul);
  //document.getElementById('ptotal').innerHTML = 'Total: ' + totals[3] + ' cookies';
  for (var Seattleh = 0; Seattleh < stores.length; Seattleh++) {
    var Seattleel = document.getElementsByClassName('storess');
    Seattleel[Seattleh].innerHTML = '<h4>' + stores[Seattleh] + '</h4>';
  }
}

function limas() {
  for (var Seattlei = 0; Seattlei < ids.length; Seattlei++) {
    datas[Seattlei] = document.getElementById(ids[Seattlei]);
  }
  var ul = document.createElement('ul');
  var li;
  for (var lis = 0; lis < hours.length; lis++) {
    li = document.createElement('li');
    ul.appendChild(li);
    li.classList.add('Lima');
    li.textContent = hours[lis] + ': ' + lima.sales()[2] + ' cookies';
    totals[4] += parseInt(results[2]);
  }
  var ulcontainers = document.getElementById('lulcontainer');
  li = document.createElement('li');
  ul.appendChild(li);
  li.classList.add('Seattle');
  li.textContent = 'Total: ' + totals[4] + ' cookies';
  ulcontainers.appendChild(ul);
  //document.getElementById('ltotal').innerHTML = 'Total: ' + totals[4] + ' cookies';
  for (var Seattleh = 0; Seattleh < stores.length; Seattleh++) {
    var Seattleel = document.getElementsByClassName('storess');
    Seattleel[Seattleh].innerHTML = '<h4>' + stores[Seattleh] + '</h4>';
  }
}
