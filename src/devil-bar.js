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
