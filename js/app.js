
var stores = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];
// eslint-disable-next-line no-unused-vars
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var totals = [0, 0, 0, 0, 0];
var ids = ['am6', 'am7', 'am8', 'am9', 'am10', 'am11', 'pm12', 'pm1', 'pm2', 'pm3', 'pm4', 'pm5', 'pm6', 'pm7'];
var datas = [];
var Seattleresult = [];
var Tokyoresult = [];
var Dubairesult = [];
var Parisresult = [];
var Limaresult = [];

var Seattle = {
  custoerMinNumber: 23,
  customerMaxNumber: 65,
  averageperHours: 6.3,
  sales: function () {
    var result = [];
    var randomcustomers = Math.floor(Math.floor(Math.random() * (this.customerMaxNumber - this.custoerMinNumber)) + this.custoerMinNumber);
    var randomcookies = Math.ceil((Math.random() * this.averageperHours) + this.averageperHours);
    var salesperhour = Math.floor(randomcustomers * randomcookies);
    result = [randomcustomers, randomcookies, salesperhour];
    Seattleresult = result;
    return result;
  },
};

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
    li.textContent = hours[lis] + ': ' + Seattle.sales()[2] + ' cookies';
    totals[0] += parseInt(Seattleresult[2]);
  }
  var ulcontainers = document.getElementById('sulcontainer');
  ulcontainers.appendChild(ul);
  document.getElementById('stotal').innerHTML = 'Total: ' + totals[0] + ' cookies';
  for (var Seattleh = 0; Seattleh < stores.length; Seattleh++) {
    var Seattleel = document.getElementsByClassName('storess');
    Seattleel[Seattleh].innerHTML = '<h4>' + stores[Seattleh] + '</h4>';
  }
}
seattle();

var Tokyo = {
  custoerMinNumber: 3,
  customerMaxNumber: 24,
  averageperHours: 1.2,
  sales: function () {
    var result = [];
    var randomcustomers = Math.floor(Math.floor(Math.random() * (this.customerMaxNumber - this.custoerMinNumber)) + this.custoerMinNumber);
    var randomcookies = Math.ceil((Math.random() * this.averageperHours) + this.averageperHours);
    var salesperhour = Math.floor(randomcustomers * randomcookies);
    result = [randomcustomers, randomcookies, salesperhour];
    Tokyoresult = result;
    return result;
  },
};

function tokyo() {
  for (var Seattlei = 0; Seattlei < ids.length; Seattlei++) {
    datas[Seattlei] = document.getElementById(ids[Seattlei]);
  }
  var ul = document.createElement('ul');
  var li;
  for (var lis = 0; lis < hours.length; lis++) {
    li = document.createElement('li');
    ul.appendChild(li);
    li.classList.add('Tokyo');
    li.textContent = hours[lis] + ': ' + Tokyo.sales()[2] + ' cookies';
    totals[1] += parseInt(Tokyoresult[2]);
  }
  var ulcontainers = document.getElementById('tulcontainer');
  ulcontainers.appendChild(ul);
  document.getElementById('ttotal').innerHTML = 'Total: ' + totals[1] + ' cookies';
  for (var Seattleh = 0; Seattleh < stores.length; Seattleh++) {
    var Seattleel = document.getElementsByClassName('storess');
    Seattleel[Seattleh].innerHTML = '<h4>' + stores[Seattleh] + '</h4>';
  }
}
tokyo();

var Dubai = {
  custoerMinNumber: 11,
  customerMaxNumber: 38,
  averageperHours: 3.7,
  sales: function () {
    var result = [];
    var randomcustomers = Math.floor(Math.floor(Math.random() * (this.customerMaxNumber - this.custoerMinNumber)) + this.custoerMinNumber);
    var randomcookies = Math.ceil((Math.random() * this.averageperHours) + this.averageperHours);
    var salesperhour = Math.floor(randomcustomers * randomcookies);
    result = [randomcustomers, randomcookies, salesperhour];
    Dubairesult = result;
    return result;
  },
};

function dubai() {
  for (var Seattlei = 0; Seattlei < ids.length; Seattlei++) {
    datas[Seattlei] = document.getElementById(ids[Seattlei]);
  }
  var ul = document.createElement('ul');
  var li;
  for (var lis = 0; lis < hours.length; lis++) {
    li = document.createElement('li');
    ul.appendChild(li);
    li.classList.add('Tokyo');
    li.textContent = hours[lis] + ': ' + Dubai.sales()[2] + ' cookies';
    totals[2] += parseInt(Dubairesult[2]);
  }
  var ulcontainers = document.getElementById('dulcontainer');
  ulcontainers.appendChild(ul);
  document.getElementById('dtotal').innerHTML = 'Total: ' + totals[2] + ' cookies';
  for (var Seattleh = 0; Seattleh < stores.length; Seattleh++) {
    var Seattleel = document.getElementsByClassName('storess');
    Seattleel[Seattleh].innerHTML = '<h4>' + stores[Seattleh] + '</h4>';
  }
}
dubai();

var Paris = {
  custoerMinNumber: 20,
  customerMaxNumber: 38,
  averageperHours: 2.3,
  sales: function () {
    var result = [];
    var randomcustomers = Math.floor(Math.floor(Math.random() * (this.customerMaxNumber - this.custoerMinNumber)) + this.custoerMinNumber);
    var randomcookies = Math.ceil((Math.random() * this.averageperHours) + this.averageperHours);
    var salesperhour = Math.floor(randomcustomers * randomcookies);
    result = [randomcustomers, randomcookies, salesperhour];
    Parisresult = result;
    return result;
  },
};

function paris() {
  for (var Seattlei = 0; Seattlei < ids.length; Seattlei++) {
    datas[Seattlei] = document.getElementById(ids[Seattlei]);
  }
  var ul = document.createElement('ul');
  var li;
  for (var lis = 0; lis < hours.length; lis++) {
    li = document.createElement('li');
    ul.appendChild(li);
    li.classList.add('Paris');
    li.textContent = hours[lis] + ': ' + Paris.sales()[2] + ' cookies';
    totals[3] += parseInt(Parisresult[2]);
  }
  var ulcontainers = document.getElementById('pulcontainer');
  ulcontainers.appendChild(ul);
  document.getElementById('ptotal').innerHTML = 'Total: ' + totals[3] + ' cookies';
  for (var Seattleh = 0; Seattleh < stores.length; Seattleh++) {
    var Seattleel = document.getElementsByClassName('storess');
    Seattleel[Seattleh].innerHTML = '<h4>' + stores[Seattleh] + '</h4>';
  }
}
paris();


var Lima = {
  custoerMinNumber: 2,
  customerMaxNumber: 16,
  averageperHours: 4.6,
  sales: function () {
    var result = [];
    var randomcustomers = Math.floor(Math.floor(Math.random() * (this.customerMaxNumber - this.custoerMinNumber)) + this.custoerMinNumber);
    var randomcookies = Math.ceil((Math.random() * this.averageperHours) + this.averageperHours);
    var salesperhour = Math.floor(randomcustomers * randomcookies);
    result = [randomcustomers, randomcookies, salesperhour];
    Limaresult = result;
    return result;
  },
};

function lima() {
  for (var Seattlei = 0; Seattlei < ids.length; Seattlei++) {
    datas[Seattlei] = document.getElementById(ids[Seattlei]);
  }
  var ul = document.createElement('ul');
  var li;
  for (var lis = 0; lis < hours.length; lis++) {
    li = document.createElement('li');
    ul.appendChild(li);
    li.classList.add('Lima');
    li.textContent = hours[lis] + ': ' + Lima.sales()[2] + ' cookies';
    totals[4] += parseInt(Limaresult[2]);
  }
  var ulcontainers = document.getElementById('lulcontainer');
  ulcontainers.appendChild(ul);
  document.getElementById('ltotal').innerHTML = 'Total: ' + totals[4] + ' cookies';
  for (var Seattleh = 0; Seattleh < stores.length; Seattleh++) {
    var Seattleel = document.getElementsByClassName('storess');
    Seattleel[Seattleh].innerHTML = '<h4>' + stores[Seattleh] + '</h4>';
  }
}
lima();