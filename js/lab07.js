var stores = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];
// eslint-disable-next-line no-unused-vars
var totals = [0, 0, 0, 0, 0];
var ids = ['am6', 'am7', 'am8', 'am9', 'am10', 'am11', 'pm12', 'pm1', 'pm2', 'pm3', 'pm4', 'pm5', 'pm6', 'pm7'];
var datas = [];
var results = [];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var foterhours = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'];
var places = [];
function Store(storename, custoerMinNumber, customerMaxNumber, averageperHours) {
  this.custoerMinNumber = custoerMinNumber;
  this.customerMaxNumber = customerMaxNumber;
  this.averageperHours = averageperHours;
  this.storename = storename;
  this.total = 0;
  this.salesPerHours = [];
  places.push(this);
}

/**************start of lab code ********************/
var container = document.getElementById('containers');
var tableEl = document.createElement('table');
container.appendChild(tableEl);

var shops = [];
function Shop(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.salesPerHour = [];
  this.total = 0;
  shops.push(this);
  this.getCookiesPerHour();
}

Shop.prototype.getRandomCustomer = function () {
  return Math.ceil(Math.random() * (this.max - this.min + 1)) + this.min;
};
Shop.prototype.getCookiesPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.salesPerHour.push(Math.floor(this.getRandomCustomer() * this.avg));
    this.total += this.salesPerHour[i];
  }
};
Shop.prototype.render = function () {
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  var tdEl = document.createElement('td');
  trEl.appendChild(tdEl);
  tdEl.textContent = this.name;
  for (var i = 0; i < hours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.salesPerHour[i];
    trEl.appendChild(tdEl);
  }
  var totalTdEl = document.createElement('td');
  trEl.appendChild(totalTdEl);
  totalTdEl.textContent = this.total;
};

var seattle = new Shop('Seattle', 23, 65, 6.3);
var tokyo = new Shop('Tokyo', 3, 24, 1.2);
var dubai = new Shop('Dubai', 11, 38, 3.7);
var paris = new Shop('Paris', 20, 38, 2.3);
var lima = new Shop('Lima', 2, 16, 4.6);

function renderHeader() {
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  var thEl = document.createElement('th');
  trEl.appendChild(thEl);
  thEl.textContent = ' ';
  for (let i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent = hours[i];
  }
  thEl = document.createElement('th');
  trEl.appendChild(thEl);
  thEl.textContent = 'Total';
}

function renderFooter() {
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  tableEl.setAttribute('id', 'maintable')
  var tdEl = document.createElement('td');
  trEl.appendChild(tdEl);
  tdEl.textContent = 'Total';
  var megaTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    var sum = 0;
    for (let j = 0; j < shops.length; j++) {
      sum += shops[j].salesPerHour[i];
    }
    megaTotal += sum;
    tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = sum;
  }
  tdEl = document.createElement('td');
  trEl.appendChild(tdEl);
  tdEl.textContent = megaTotal;
}
renderHeader();
for (let i = 0; i < shops.length; i++) {
  shops[i].render();
}

/**************end of lab code ********************/


/**********start lab 8 *********************************/

function handleSubmit(event) {
  if (event.target.name.value !== '' && event.target.min.value !== '' && event.target.max.value !== '' && event.target.avg.value !== '') {
    if (event.target.min < event.target.max) {
      event.preventDefault();
      var storename = event.target.name.value;
      var min = parseInt(event.target.min.value);
      var max = parseInt(event.target.max.value);
      var avarge = parseInt(event.target.avg.value);
      var newshop = new Shop(storename, min, max, avarge);
      var rowCount = tableEl.rows.length;
      tableEl.deleteRow(rowCount - 1);
      newshop.render();
      renderFooter();
      document.getElementById('myForm').reset();
    }else{
      alert('please min can\'t be more than max');
    }
  }else{
    alert('please enter values ');
  }
}
var vform = document.getElementById('cookiesform');
vform.addEventListener('submit', handleSubmit);
renderFooter();
