
var splitToParts = function(number) {
    var parts = [];
    var multiplier = 1;
    while(number > 0) {
        var result = number % 10;
        if(result > 0) {
            parts.unshift(result * multiplier);
        }
        number = Math.floor(number / 10);
        multiplier *= 10;
    }
    return parts;
}

symbol = function(arabic, roman) {
  this.arabic = arabic;
  this.roman = roman;
}
//[3000,400,50,6]
var translator = function(number_part) {
  var symbolObjects = [
    new symbol(1, 'I'),
    new symbol(5, 'V'),
    new symbol(10, 'X'),
    new symbol(50, 'L'),
    new symbol(100, 'C'),
    new symbol(500, 'D'),
    new symbol(1000, 'M')
  ].reverse();
  var places = [1000, 100, 10, 1];
  var result = '';
  places.forEach(function(place){
    var symbol = symbolObjects.filter(function(elem) {
      return elem.arabic == place;
    })[0];
    var numberofSymbols = Math.floor(number_part / symbol.arabic);
    if (numberofSymbols < 4) {
      result += (numberofSymbols * symbol.roman);
    } else if (numberofSymbols === 4 || numberofSymbols === 9) {
      result += (symbolObjects[i-1] + symbolObjects[i+1]);
    } else {
      result += (symbolObjects[i+1] + ((numberofSymbols - 5) * symbol.roman))
    }
  });
  return result;
}

function translateNumber(number) {
  var parts = splitToParts(number);
  var result = [];
  parts.forEach(function(part) {
    result.push(translator(part));
  });
  return result.join('');
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
