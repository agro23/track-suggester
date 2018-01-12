$(document).ready(function() {
var result = "RESULTS";

//Business logic

  $("form#survey").submit(function(e) {
    e.preventDefault();
    // var number1 = parseInt($("#add1").val());
    // var number2 = parseInt($("#add2").val());
    // var result = add(number1, number2);
    console.log("got the results, I think.")
    result =  result + "";

  });

// UI logic
  $("results").text(result);

});
