var test = require('tape');
var bar = require('../src/devil-bar.js'); //Wrap application's code in a module

//Creat DOM elements needed for tests
function setup () {
  function add (type, className) {
    var element = document.createElement(type);
    element.className = className;
    document.body.appendChild(element);
  }
  //Add event listeners to DOM elements
  add('input', 'sixsixsix');
  add('div', 'satan');
  add('div', 'satanized');
  add('div', 'clear');
  bar();
}

//Remove elements created during setup for clean test start
function teardown () {
  var selectors = ['.satan', '.sixsixsix', '.satanized', '.clear'];
  selectors.forEach(function (selector) {
    var element = document.querySelector(selector);
    element.parentNode.removeChild(element);
  });
}

function testCase (name, cb) {
  var t = test(name, cb);
  t.once('prerun', setup); // setup before each test case
  t.once('end', teardown); // teardown after each test case
}

testCase('satan without input should show an error message', function (t) {
  var satan = document.querySelector('.satan');
  var satanized;

  satan.click();
  satanized = document.querySelectorAll('.satanized p');

  t.plan(4); //Number of assertions to be run
  t.ok(satan, 'satan element exists');   //Assert that value is truthy with an optional message
  t.equal(satanized.length, 1); //Assert that actual === expected
  t.equal(satanized[0].className, 'error');
  t.equal(satanized[0].innerText, 'Do you even know what a number is?');
});

testCase('satan with an decimal should show an error', function (t) {
 var satan = document.querySelector('.satan');
 var sixsixsix = document.querySelector('.sixsixsix');
 var satanized;

 sixsixsix.value = '.2';
 satan.click();
 satanized= document.querySelectorAll('.satanized p');

  t.plan(4); //Number of assertions to be run
  t.ok(satan, 'satan element exists');
  t.equal(satanized.length, 1);
  t.equal(satanized[0].className, 'error');
  t.equal(satanized[0].innerText, 'Hail Satan. Enter a whole number!');
});

testCase('satan with whole number input should result in a number multiplied by 666', function (t) {
 var satan = document.querySelector('.satan');
 var sixsixsix = document.querySelector('.sixsixsix');
 var satanized;
 sixsixsix.value = '1';

 var number = sixsixsix.value * 666;
 satan.click();
 satanized= document.querySelectorAll('.satanized p');

  t.plan(4); //Number of assertions to be run
  t.ok(satan, 'satan element exists');
  t.equal(satanized.length, 1);
  t.equal(satanized[0].className, 'multiplied');
  t.equal(satanized[0].innerText, 'Multiplied to ' + number + '. Another round?');
});

testCase('two inputs should produce two results', function (t) {
 var satan = document.querySelector('.satan');
 var sixsixsix = document.querySelector('.sixsixsix');
 var satanized;
 sixsixsix.value = '1';

 var number = sixsixsix.value * 666;
 satan.click();
 sixsixsix.value = '.2';
 satan.click();
 satanized= document.querySelectorAll('.satanized p');

t.plan(6); //Number of assertions to be run
t.ok(satan, 'satan element exists');
t.equal(satanized.length, 2);
t.equal(satanized[0].className, 'multiplied');
t.equal(satanized[0].innerText, 'Multiplied to ' + number + '. Another round?');
t.equal(satanized[1].className, 'error');
t.equal(satanized[1].innerText, 'Hail Satan. Enter a whole number!');
});

testCase('clearing empty list does not throw', function (t) {
 var clear = document.querySelector('.clear');

  t.plan(2);
  t.ok(clear);
  t.doesNotThrow(function () { // Assert that function does not throw an error
    clear.click();
  });
});

testCase('clicking clear removes any results in the list', function (t) {
  var satan = document.querySelector('.satan');
  var sixsixsix = document.querySelector('.sixsixsix');
  var clear = document.querySelector('.clear');
  var satanized;
  var satanizedCleared;

  sixsixsix.value = '2';
  satan.click();
  sixsixsix.value = '2.3';
  satan.click();
  sixsixsix.value = '';
  satan.click();
  satanized = document.querySelectorAll('.satanized p');
  clear.click();
  satanizedCleared = document.querySelectorAll('.satanized p');

  t.plan(2);
  t.equal(satanized.length, 3);
  t.equal(satanizedCleared.length, 0);
});
