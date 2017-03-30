
var splitToParts = function(number) {
    var parts = [];
    var multiplier = 1;
    while(number > 0) {
        var result = number % 10;
        if(result > 0) {
            parts.unshift(result);
        }
        number = Math.floor(number / 10);
    }
    return parts;
}

symbol = function(arabic, roman) {
  this.arabic = arabic;
  this.roman = roman;
}
//[3000,400,50,6]
var translator = function(numbers) {
  var symbolObjects = [
    new symbol(1, 'I'),
    new symbol(5, 'V'),
    new symbol(10, 'X'),
    new symbol(50, 'L'),
    new symbol(100, 'C'),
    new symbol(500, 'D'),
    new symbol(1000, 'M')
  ];
  var places = [1, 10, 100, 1000];
  var result = '';
  numbers.reverse().forEach(function(number, placeIndex){
    // grab the symbol for the current decimal place
    var symbol = symbolObjects.filter(function(elem) {
      return elem.arabic === places[placeIndex];
    })[0];
    // find the index of that symbol so we traverse the array
    var index = symbolObjects.indexOf(symbol);
    // the number of symbols is the value at the numberarray
    if (number < 4) {
      result = symbol.roman.repeat(number) + result;
    } else if (number === 4) {
      result = symbolObjects[index].roman + symbolObjects[index + 1].roman + result;
    } else if (number === 9) {
      result = symbolObjects[index].roman + symbolObjects[index + 2].roman + result;
    } else {
      result = symbolObjects[index + 1].roman + symbol.roman.repeat((number - 5)) + result;
    }
  });
  return result;
}

function translateNumber(number) {
  return result = translator(splitToParts(number));
  //return result.join('');
}
$(document).ready(function() {
  $('form').submit(function(){
    var input = $('input').val();
    if (validateString === true) {
      //compute result
      var result = '';
      $('#output').text(result);
    }
    return false;
  });
});
