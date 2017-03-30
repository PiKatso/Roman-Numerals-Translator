
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
var translator = function(number) {
  var symbolObjects = [
    new symbol(1, 'I'),
    new symbol(5, 'V'),
    new symbol(10, 'X'),
    new symbol(50, 'L'),
    new symbol(100, 'C'),
    new symbol(500, 'D'),
    new symbol(1000, 'M')
  ];
  var places = [1000, 100, 10, 1];
  var result = '';
  var multiplier = 1;
  places.forEach(function(place, placeIndex){
    // grab the symbol for the current decimal place
    var symbol = symbolObjects.filter(function(elem) {
      return elem.arabic === place;
    })[0];
    // find the index of that symbol so we traverse the array
    var index = symbolObjects.indexOf(symbol);
    // the number of symbols is the value at the numberarray
    var numberofSymbols = number[placeIndex];
    if (numberofSymbols < 4) {
      result += symbol.roman.repeat(numberofSymbols);
    } else if (numberofSymbols === 4) {
      result += symbolObjects[index + 1].roman + symbolObjects[index].roman
    } else if (numberofSymbols === 9) {
      result += symbolObjects[index - 1].roman + symbolObjects[index + 1].roman;
    } else {
      result += symbolObjects[index + 1].roman + symbol.roman.repeat((numberofSymbols - 5));
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
