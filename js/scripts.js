// Business (or back-end) logic:

var convertOuncesToCups = function(number1) {
  return number1 * (1/8);
};

var convertOuncesToTablespoons = function(number1) {
  return number1 * (1/2);
};

var convertCupsToPints = function(number1) {
  return number1 * (1/2);
};

var convertQuartsToGallon = function(number1) {
  return number1 * (1/4);
};


// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {

  $("form#OuncesToCups").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#ounces").val());
    var result = convertOuncesToCups(number1);
    $("#outputOuncesToCups").text(result);
    $(".resultsOtC").show();
  });



  $("form#TablespoonsToOunces").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#tablespoons").val());
    var result = convertOuncesToTablespoons(number1);
    $("#outputTablespoonsToOunces").text(result);
    $(".resultsTtO").show();
  });


  $("form#CupsToPints").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#cups").val());
    var result = convertCupsToPints(number1);
    $("#outputCupsToPints").text(result);
    $(".resultsCtP").show();
  });

  $("form#QuartsToGallon").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#quarts").val());
    var result = convertQuartsToGallon(number1);
    $("#outputQuartsToGallon").text(result);
    $(".resultsQtG").show();
  });

});
