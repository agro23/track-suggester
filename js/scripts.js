$(document).ready(function() {

// Variables
var result = "RESULTS";
var flavor ="none";
var question1 = "";
var question2 = "";
var question3 = "";
var question4 = "";
var question5 = "";

  $("form#survey").submit(function(e) {
    e.preventDefault();
    // var number1 = parseInt($("#add1").val());
    // var number2 = parseInt($("#add2").val());
    // var result = add(number1, number2);
    console.log("got the results, I think.")
    result =  result + "";

    question1 = parseInt( $("input:radio[name=question1]:checked").val() );
    question2 = $("input:radio[name=question2]:checked").val();
    question3 = $("input:radio[name=question3]:checked").val();
    question4 = $("input:radio[name=question4]:checked").val();
    question5 = $("input:radio[name=question5]:checked").val();
    // console.log("flavor is: " + flavor);
    console.log("question 1 is: " + question1);
    console.log("question 3 is: " + question3);

    // $(input:radio[name=question5]).attr("checked" , false );
    // x = $("input:radio[name=question5]:checked").val();

    $('#survey').trigger("reset");

    // UI logic
      // $("#results").text(result);
      // $("#results").append(flavor);
      // console.log("now flavor is: " + flavor)

  });



});
