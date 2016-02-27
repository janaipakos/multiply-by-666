(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function () {
  //Find DOM nodes using CSS selectors
  var satan = document.querySelector('.satan');
  var sixsixsix = document.querySelector('.sixsixsix');
  var satanized = document.querySelector('.satanized');
  var clear = document.querySelector('.clear');

  //Bind click event
  satan.addEventListener('click', satanize);
  clear.addEventListener('click', reset);

  //Parse click event
  function satanize () {
    var number = sixsixsix.value * 666;
    satanizing(number, report);
  }

  //Test if input is a whole number
  function satanizing (number, done) {
    if (isNaN(number) || number === 0) {
      done(new Error('Do you even know what a number is?'));
     } else if (number !== Math.round(number)) {
      done(new Error('Hail Satan. Enter a whole number!'));
    } else {
      done(null, number);
    }
  }

  //Create satanized result in new paragraph and fill with any error message
  function report (err, value) {
    var p = document.createElement('p');

    if (err) {
      p.className = 'error';
      p.innerText = err.message;
    } else {
      p.className = 'multiplied';
      p.innerText = 'Multiplied to ' + value + '. Another round?';
    }
    satanized.appendChild(p);
  }

  //Clear results
  function reset () {
    var all = satanized.querySelectorAll('.satanized p');
    var i = all.length;

    while (i--) {
      satanized.removeChild(all[i]);
    }
  }
};

},{}],2:[function(require,module,exports){
var bar = require('./devil-bar.js');

bar();

},{"./devil-bar.js":1}]},{},[2])