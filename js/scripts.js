
$(document).ready(function() {

  $("form#Survey").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    $(".outputName").text(name);

var flavor = $("input:radio[name=flavor]:checked").val();
    $(".outputFlavor").text(flavor);

    var animal = $("input:radio[name=animal]:checked").val();
    $(".outputAnimal").text(animal);

    var favoriteColor = $("#color").val();
    $(".outputColor").text(favoriteColor);

    var born = $("#born").val();
    $(".outputborn").text(born);



    $(".results").show();
  });

});
